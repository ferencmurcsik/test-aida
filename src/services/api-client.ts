import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: 'e590295d24364db980e8669a8c4c624f'
    }
})