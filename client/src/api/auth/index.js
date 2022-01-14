import axios from 'axios'

const login = {
  google: async (data) => {
    const response = await axios.post(
      'http://localhost:5000/auth/google',
      data,
      { withCredentials: true, headers: { 'Access-Control-Allow-Origin': '*' } }
    )

    return response.data
  },
}

export default login
