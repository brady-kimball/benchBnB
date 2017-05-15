export const fetchBenches = (filters) => {
  return $.ajax({
    url: "/api/benches/",
    method: "GET",
    data: filters,
    error: (err) => console.log(err)
  });
};


export const createBench = (bench) => {
  return $.ajax({
    url: "/api/benches/",
    method: "POST",
    data: bench
  });
};
