import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <PersistentDrawerLeft /> */}
      {/* <Login /> */}
      <ListarTarefa />
    </div>
  );
}

export default App;
