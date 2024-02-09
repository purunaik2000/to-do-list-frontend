import axios from "axios";

async function loginApi(data) {
    try {
        let res = await axios.post(import.meta.env.VITE_REACT_APP_API + "/login", data)
        .then(response => { return response.data })
        .catch((error) => { return error.response.data})

        alert(res.message);
        if(res.status) return res;
    } catch (error) {
        alert(error.message);
    }
}

export default loginApi;