const URL = "http://localhost:3000/api/musculos";

async function getByFilters(filter) {
  let apiUrl = filter ? URL + "?titulo=" + filter : URL;
  const res = await fetch(apiUrl, { method: "GET" });
  return await res.json();
}

async function save(data)

export default {getByFilters,}
