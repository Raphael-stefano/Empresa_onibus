import '../App.css';
import {useState, useEffect} from 'react'
import {obterNomesMunicipios} from '../services/listaCidades'

export default function CriarUsuario(){

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Previne o comportamento padrão de envio do formulário
        // Cria o objeto com os dados do formulário
        const dadosFormulario = {
            nome: nome,
            cpf: cpf,
            telefone: telefone,
            cidade: cidade,
            email: email,
            senha: senha,
            senhaConf: senhaConf
        };
        // Converte o objeto em JSON
        const jsonDadosFormulario = JSON.stringify(dadosFormulario);
        // Exibe o JSON no console (ou pode ser enviado para uma API)
        console.log(jsonDadosFormulario);
    };

    const [cidade, setCidade] = useState('Selecionar cidade')
    function definirCidade(cidade){
        setCidade(cidade)
    }
    const [listaCidades, setListaCidades] = useState([])
    const [renderLista, setRenderLista] = useState([])
    const [listaCidadesVisibility, setlistaCidadesVisibility] = useState('cidade-select-list-hidden')
    function mostrarLista(){
        if(listaCidadesVisibility == 'cidade-select-list'){
            setlistaCidadesVisibility('cidade-select-list-hidden')
        } else{
            setlistaCidadesVisibility('cidade-select-list')
        }
    }

    useEffect(() => {
         obterNomesMunicipios(33).then(novosElementos => {
            setListaCidades(prevLista => [...prevLista, ...novosElementos]);
        })
    }, [])

    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaConf, setSenhaConf] = useState('')

    function renderizarLista(){
        let listaRenderizada = []
        let i = 0
        listaCidades.forEach(element => {

            listaRenderizada.push(<p  key={i} onClick={() => definirCidade(element)}>{element}</p>)
            i++
        })
        setRenderLista(listaRenderizada)
    }
        
    return(
        <form id='criacaoUsuario' method='post'>
            <div>
                <label htmlFor='nome'>Nome completo</label>
                <input id='nome' type='text' value={nome} onChange={e => setNome(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='cpf'>CPF</label>
                <input id='cpf' type='text' value={cpf} onChange={e => setCpf(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='telefone'>Telefone</label>
                <input id='telefone' type='tel' value={telefone} onChange={e => setTelefone(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="cidade-select">Cidade</label>
                <div onClick={() => {
                    mostrarLista()
                    renderizarLista()
                }} id='cidade-select'>{cidade}</div>
                <div onClick={mostrarLista} id={listaCidadesVisibility}>{renderLista}</div>
            </div>
            <div>
                <label htmlFor='email'>E-mail</label>
                <input id='email' type='email' value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='senha'>Senha</label>
                <input id='senha' type='password' value={senha} onChange={e => setSenha(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='senha_confirmar'>Confirmar senha</label>
                <input id='senha_confirmar' type='password' value={senhaConf} onChange={e => setSenhaConf(e.target.value)}/>
            </div>
            <input id='input_submit' type='button' onClick={handleSubmit} value='Confirmar dados'/> 
        </form>
    )
}