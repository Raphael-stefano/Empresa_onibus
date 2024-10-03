import { useContext } from "react";
import { createContext, useState } from "react";

export const ContextoGeral = createContext()

export const ProvedorGeral = (props) => {
    const [tema, setTema] = useState('Claro')
    function mudarTema(){
        if(tema === 'Claro'){
            setTema('Escuro')   
        } else{
            setTema('Claro')
        }
    }
    return <ContextoGeral.Provider value={{tema, mudarTema}}>{props.children}</ContextoGeral.Provider>
}

export const UsarContextoGeral = () => useContext(ContextoGeral)