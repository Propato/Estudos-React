import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { Inicio, Login, Reviews, Rascunho } from "./pages"
import { Header } from './components'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Login/>}/>
        <Route path="/Init" element= {<Inicio/>}/>
        <Route path="/Reviews" element= {<Reviews/>}/>
        <Route path="/Rascunho" element= {<Rascunho/>}/>
        
        <Route path="*" element= {<div><Header/> <h1>ERRO: NOT FOUND</h1></div>} />
      </Routes>
    </BrowserRouter>
  )
}