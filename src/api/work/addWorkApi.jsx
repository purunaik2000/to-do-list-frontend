import axios from "axios";

async function addWorkApi(data, token) {
    try {
        let res = await axios.post(import.meta.env.VITE_REACT_APP_API + "/work/add", data, {
            headers: {
                "x-api-key": token
            }
        })
        .then(response => { return response.data })
        .catch((error) => { return error.response.data})

        alert(res.message);
        if(res.status) return res;
    } catch (error) {
        alert(error.message);
    }
}

export default addWorkApi;