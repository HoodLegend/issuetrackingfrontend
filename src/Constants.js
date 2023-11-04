const dev = {
    url: {
      API_BASE_URL: 'http://localhost:8080'
    }
  }

  const prod = {
    url: {
      API_BASE_URL: 'http://app.herokuapp.com'
    }
  }

  export const config = process.env.NODE_ENV === 'development' ? dev : prod