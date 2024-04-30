import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { vc } from './Routes';
import './App.css'

export function App2() {
  const nav = useNavigate();  

  const { value } = useContext(vc)

  const urlg = `https://github.com/${value.git}`
  const urll = `https://www.linkedin.com/in/${value.lin}/`

  return (
    <>
        <div className="card">
            <h1>Curriculos</h1>
        </div>

        <div>
            <p>
                {value.nome} |
                &nbsp;
                <a href={urlg} target='_blank'>{value.git}</a> |
                &nbsp;
                <a href={urll} target='_blank'>{value.lin}</a> |
                &nbsp;
                {value.des} |
            </p>
        </div>

        <button onClick={()=>{nav('/')}}>Voltar</button>
    </>
  )
}

export default App2