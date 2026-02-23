import Header from "./layout/header";
import Inicio from "./pages/inicio/index";
import Metricas from "./components/Metricas";

function App() {
  

  return (
    <main className='w-full h-screen flex flex-col'>
      <Header />
      <Inicio />
      <Metricas />
    </main>
  )
}

export default App
