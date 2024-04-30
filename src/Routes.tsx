import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext, useState} from 'react'
import './App.css'
import { App } from './App';
import { App2 } from './App2';

export const vc = createContext({} as any)

export function Rota(){
    const [ value, setValue ] = useState({});
    return(
        <BrowserRouter>
            <vc.Provider value={{value, setValue}}>
                <Routes>
                    <Route path='/' element={<App />}/>
                    <Route path='/App2' element={<App2/>} />
                </Routes>
            </vc.Provider>
        </BrowserRouter>
    );
}