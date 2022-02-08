import ListItems from './components/ItemList/ListItems'
import NavBar from './components/NavBar/Navbar';
import GlobalStyle from './styles/createGlobalStyle'

function App() {
  return (
    <>
    <GlobalStyle />
    <NavBar />
    <ListItems />
    </>
  );
}

export default App;
