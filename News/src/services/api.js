import axios from 'axios'

const api = axios.create({
	baseURL: 'https://meuapp.rafaelamoreira.repl.co'
})

export default api