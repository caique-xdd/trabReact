import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { vc } from './Routes';
import './App.css'

export function App() {
  const nav = useNavigate();

  const [ nome, setNome] = useState('');  
  const [ git, setGit] = useState('');  
  const [ lin, setLin] = useState('');  
  const [ des, setDes] = useState('');

  const { setValue} = useContext(vc);
  return (
    <>
      <div className="card">
        <h1>Home</h1>
        <p className="read-the-docs">
          Serviço de curriculo online, integrado ao linkedin e github.
        </p>

        <h4>Nome</h4> 
        <input type="text" onChange={e =>(setNome(e.target.value))}/>
        <p></p>

        <h4>Github</h4>
        <input type="text" onChange={e =>(setGit(e.target.value))}/>
        <p></p>

        <h4>Linkedin</h4>
        <input type="text" onChange={e =>(setLin(e.target.value))}/>
        <p></p>

        <h4>Descrição</h4>
        <input type="text" onChange={e =>(setDes(e.target.value))}/>
        <p></p>

        <button 
        onClick={()=>{               
          setValue({
              nome:nome,
              git:git,
              lin:lin,
              des:des
          })
          alert("Cadastro realizado.")
        }}>Cadastrar</button>


        <button onClick={()=>{nav('/App2')}}>Curriculos</button>
      </div>
    </>
  )
}

export default App
