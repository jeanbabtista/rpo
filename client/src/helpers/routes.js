const base = 'http://localhost:3001'

const urls = {
  home: '',
  signup: 'api/auth/signup',
  signin: 'api/auth/signin',
}

for (const key in urls) urls[key] = `${base}/${urls[key]}`

export default urls
