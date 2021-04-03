import axios from 'axios'


const base = axios.create({
    baseURL: 'https://tinder-clone-jdan1.herokuapp.com'
})

export default base