import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio"
import SobreMim from "./paginas/SobreMim"
import Post from "./paginas/Post";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>
        <Route path="*" element={<h1>Pagina não encontrada!</h1>} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
