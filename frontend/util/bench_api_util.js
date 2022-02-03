export const fetchBenches = (filters) => {
    return $.ajax({
      method: 'GET',
      url: '/api/benches',
      filters,
      error: (err) => console.log(err)
    })
  }
