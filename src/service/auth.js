import axios from "./axios.js"

const AuthService = {
    register(user) {
          return axios.post('/users', {user})
        },
    }

    export default AuthService
