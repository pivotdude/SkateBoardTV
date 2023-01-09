function sendFetch(url) {
    fetch("http://localhost:3001/api/" + url, {
        headers: {
            "Authorization": localStorage.getItem('token') ?? null
        }}).then(console.log)
}
export default sendFetch;