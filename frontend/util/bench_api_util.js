export const fetchBenches = (filters) => {
  console.log(filters);
    return $.ajax({
      method: 'GET',
      url: '/api/benches',
      data: filters,
      error: (err) => console.log(err)
    })
  }
