import axios from "axios";

async function getAllWorkApi(page, token) {
    try {
        let res = await axios.get(import.meta.env.VITE_REACT_APP_API + "/work/getAll/" + page, {
            headers: {
                "x-api-key": token
            }
        })
        .then(response => { return response.data })
        .catch((error) => { return error.response.data})

        if(!res.status) alert(res.message);
        else return [res.data, res.count];
    } catch (error) {
        alert(error.message);
    }
}

export default getAllWorkApi;