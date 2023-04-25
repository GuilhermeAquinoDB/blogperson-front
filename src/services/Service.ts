import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://blogperson.onrender.com'
})

export const login =  async(url: string, dados: any, setDado: any) => {
  const resposta = await api.post(url, dados)
  setDado(resposta.data)
}