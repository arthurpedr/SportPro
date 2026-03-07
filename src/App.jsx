import Header from "./layout/Header";
import Inicio from "./pages/inicio/index";
import Metricas from "./components/Metricas";
import Produtos from "./pages/produtos/index";
import Ofertas from "./pages/ofertas/index";
import Testemunhos from "./components/CardsClientes";
import Footer from "./layout/Footer";

function App() {
  

  return (
    <main className='w-full h-screen flex flex-col'>
      <Header />
      <Inicio />
      <Metricas />
      <Produtos />
      <Ofertas />
      <Testemunhos />
      <Footer />
    </main>
  )
}

export default App
