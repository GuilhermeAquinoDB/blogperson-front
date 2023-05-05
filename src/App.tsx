import Home from './pages/home/Home'
import Navbar from './components/statics/navbar/Navbar'
import Footer from './components/statics/footer/Footer'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario'
import ListaTema from './components/temas/listaTema/ListaTema'
import ListaPostagem from './components/postagem/listaPostagem/ListaPostagem'
import CadastroTema from './components/temas/cadastroTema/CadastroTema'
import DeletarTema from './components/temas/deletarTema/DeletarTema'
import DeletarPostagem from './components/postagem/deletarPostagem/DeletarPostagem'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<CadastroUsuario />} />
            <Route path="/formularioTema" element={<CadastroTema />} />
            <Route path="/tema" element={<ListaTema />} />
            <Route path="/formularioTema/:id" element={<CadastroTema />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />
            <Route path="/post" element={<ListaPostagem />} />
            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
