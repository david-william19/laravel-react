const axios = window.axios;

const BASE_URL_API = 'http://127.0.0.1:8000/api/';

export default {
    getPost: () => axios.get(`${BASE_URL_API}posts`),
    getOnePost: (id) => axios.get(`${BASE_URL_API}posts/update-post/${id}`),
    createPost: (post) => axios.post(`${BASE_URL_API}create`, post),
    updatePost: (post, id) => axios.put(`${BASE_URL_API}update/${id}`, post),
    deletePost: (id) => axios.delete(`${BASE_URL_API}delete/${id}`)
}