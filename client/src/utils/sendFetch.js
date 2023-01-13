function sendFetch(url) {
    return fetch("http://localhost:3001/api/" + url, {
        headers: {
            "Authorization": localStorage.getItem('token') ?? null
        }})
}
export default sendFetch;