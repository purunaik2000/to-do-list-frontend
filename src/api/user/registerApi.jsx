import axios from "axios";

async function registerApi(data) {
    try {
        let res = await axios.post(import.meta.env.VITE_REACT_APP_API + "/register", data)
        .then(response => { return response.data })
        .catch((error) => { return error.response.data})

        alert(res.message);
        if(res.status) return res;
    } catch (error) {
        alert(error.message);
    }
}

export default registerApi;