import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AppContainer from './appContainer'
import api from '../api'

const Home = () => {

    const [post, setPost] = useState(null)

    useEffect(() => {
        api.getPost().then((res) => {
            setPost(res.data);
        })
    }, []);

    const renderDataPost = () => {
        if (!post) {
            return (
                <tr>
                    <td colSpan="4">Loading Posts</td>
                </tr>
            )
        }
        if (post.length === 0) {
            return (
                <tr>
                    <td colSpan="4 ">Data masih kosong</td>
                </tr>
            )
        }
        return post.map((posts) => (
            <tr className="text-center" key={posts.id}>
                <td>{posts.id}</td>
                <td>{posts.title}</td>
                <td>{posts.description}</td>
                <td className="d-flex justify-content-around">
                    <Link className="btn btn-warning" to={`update-post/${posts.id}`}>Edit</Link>
                    <button className="btn btn-danger" onClick={() => {
                        api.deletePost(posts.id).then(res => {
                            console.log(res)
                        }).catch(err => {
                            alert('failed to delete post')
                        })
                    }}>Delete</button>
                </td>
            </tr>
        ))
    }

    return (
        <AppContainer title="ALL POST">
            <Link className="btn btn-primary my-3" to="create-post">Add new post</Link>
            <table className="table">
                <thead className="thead-dark text-center">
                    <th scope="col">ID Post</th>
                    <th scope="col">Title Post</th>
                    <th scope="col">Description Post</th>
                    <th scope="col">Action Post</th>
                </thead>
                <tbody>
                    {renderDataPost()}
                </tbody>
            </table>
        </AppContainer>
    )
}

export default Home
