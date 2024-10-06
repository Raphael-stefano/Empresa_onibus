import { useContext } from "react";
import { createContext, useState } from "react";
import { useEffect } from "react";
import { obterNomesMunicipios } from "../services/listaCidades";

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
    const [seta1, setSeta1] = useState('')
    const [seta2, setSeta2] = useState('')
    function virarSeta1(){
        if(seta1 === 'Select-button-icon-invertido'){
          setSeta1('')
        } else{
          setSeta1('Select-button-icon-invertido')
        }
      } 
    function virarSeta2(){
        if(seta2 === 'Select-button-icon-invertido'){
          setSeta2('')
        } else{
          setSeta2('Select-button-icon-invertido')
        }
      }
  
      const [tipo1, setTipo1] = useState('Selecione um tipo')
      const [tipo2, setTipo2] = useState('Selecione um tipo')
      function selecionarTipo1(tipo){
          setTipo1(tipo)
        } 
      function selecionarTipo2(tipo){
          setTipo2(tipo)
      }
    const [container1, setContainer1] = useState('Select-types-tipo-container-oculto')
    const [container2, setContainer2] = useState('Select-types-tipo-container-oculto')
    function ocultarContainer1(){
        if(container1 === ''){
            setContainer1('Select-types-tipo-container-oculto')
        } else{
            setContainer1('')
        }
    }
    function ocultarContainer2(){
        if(container2 === ''){
            setContainer2('Select-types-tipo-container-oculto')
        } else{
            setContainer2('')
        }
    }
    function renderizarTiposSelect1(){
        let tiposRenderizados = []
        listaCidades.forEach(tipo => {
            tiposRenderizados.push(<div onClick={() => {
                selecionarTipo1(tipo)
                setContainer1('Select-types-tipo-container-oculto')
                virarSeta1()
            }} className="Select-types-tipo">{tipo}</div>)
        })
        return <div className={`Select-types-tipo-container ${container1}`}>{tiposRenderizados}</div>
    }
    function renderizarTiposSelect2(){
        let tiposRenderizados = []
        listaCidades.forEach(tipo => {
            tiposRenderizados.push(<div onClick={() => {
                selecionarTipo2(tipo)
                setContainer2('Select-types-tipo-container-oculto')
                virarSeta2()
            }} className="Select-types-tipo">{tipo}</div>)
        })
        return <div className={`Select-types-tipo-container ${container2}`}>{tiposRenderizados}</div>
    }

    const [cidade, setCidade] = useState('Selecionar cidade')
    function definirCidade(cidade){
        setCidade(cidade)
    }
    const [cidade1, setCidade1] = useState('Selecionar cidade')
    function definirCidade1(cidade){
        setCidade1(cidade)
    }
    const [cidade2, setCidade2] = useState('Selecionar cidade')
    function definirCidade2(cidade){
        setCidade2(cidade)
    }
    const [listaCidades, setListaCidades] = useState([])
    const usarAPICidades = async () => {
        const novosElementos = await obterNomesMunicipios(33);
        setListaCidades(prevLista => [...prevLista, ...novosElementos]);
    };
    useEffect(() => {
        usarAPICidades(); 
    }, []);

    return <ContextoGeral.Provider value={{definirCidade, definirCidade1, definirCidade2, usarAPICidades, listaCidades, setListaCidades, cidade1, setCidade1, cidade2, setCidade2, cidade, setCidade, tema, mudarTema, tipo1, tipo2, renderizarTiposSelect1, renderizarTiposSelect2, virarSeta1, virarSeta2, ocultarContainer1, ocultarContainer2}}>{props.children}</ContextoGeral.Provider>
}

export const UsarContextoGeral = () => useContext(ContextoGeral)