import axios from 'axios'

export async function obterMunicipios(uf) {
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`;
    const response = await axios.get(url);
    let resposta = response.data
    return resposta
}

export async function obterNomesMunicipios(uf){
    const municipios = await obterMunicipios(uf)
    const nomesMunicipios = municipios.map(municipio => `${municipio.nome} - ${municipio.microrregiao.mesorregiao.UF.sigla}`); // Extrai apenas os nomes dos municípios
    //console.log('Lista de nomes de municípios:', nomesMunicipios)
    return nomesMunicipios
}

//obterNomesMunicipios('33').then(nomesMunicipios => {console.log(nomesMunicipios)})

