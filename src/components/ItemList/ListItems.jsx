import React, { useState, useEffect } from "react";
import { ContainerWrapper, Table, Title, Wrapper } from '../../styles/listStyles'
import api from '../../services/api'

export default function ListItems(){
    const [ items, setItems ] = useState([])
    const [ form, setForm ] = useState({
      nomes: '',
      description: '',
      type: '',
      class: '',
    })

    useEffect(() => {
      async function getItems() {
        const response = await api.get('/api');
        setItems(response.data);
      }
      getItems();
    }, []);

    const handleDelete = async (id) => {
      await api.delete(`/item/delete/${id}`);
      setItems(items.filter(item => item._id !== id))
    }

    const handleSubmit = async () => {
      const response = await api.post('/item/new', form)
      const { nomes, description, type, class: classification, _id} = response.data 
      setItems([...items, { nomes, description, type, class: classification, _id } ]) 
    }

    useEffect(() => {
        console.log(form)
    }, [form])

    return (
      <>
      <ContainerWrapper>
      <Title>List of Magic Items</Title>
      <div>
          <input type="text" value={form.nomes} onChange={(e) => setForm({...form, nomes: e.target.value})} />
          <input type="text" value={form.description} onChange={(e) => setForm({...form, description: e.target.value})} />
          <input type="text" value={form.type} onChange={(e) => setForm({...form, type: e.target.value})} />
          <input type="text" value={form.class} onChange={(e) => setForm({...form, class: e.target.value})} />
          <button onClick={handleSubmit}>Create item</button>
        </div>
      <Wrapper>
      <Table>
           <thead>
             <tr>
              <th>#</th>
              <th>Item</th>
              <th>Description</th>
              <th>Type</th>
              <th>Class</th>
              <th>Ações</th>
             </tr>
           </thead>
           <tbody>
             {items.map((item, index) => (
              <tr key={item._id}>
              <th>{++index}</th>
              <th>{item.nomes}</th>
              <th>{item.description}</th>
              <th>{item.type}</th>
              <th>{item.class}</th>
              <th><button onClick={() => {
                handleDelete(item._id)
              }}>Deletar</button></th>
            </tr>
             ))}
           </tbody>
        </Table>
      </Wrapper>
      </ContainerWrapper>
      </>
    );
}

