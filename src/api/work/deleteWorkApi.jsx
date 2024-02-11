import axios from "axios";

async function deleteWorkApi(token, id) {
    try {
        let res = await axios.delete(import.meta.env.VITE_REACT_APP_API + "/work/delete/" + id, {
            headers: {
                "x-api-key": token
            }
        })
        .then(response => { return response.data })
        .catch((error) => { return error.response.data})

        alert("Deleted Successfully!");
    } catch (error) {
        alert(error.message);
    }
}

export default deleteWorkApi;