import React, {useEffect, useState} from 'react'
import { useParams, useHistory } from 'react-router-dom';
import AppContainer from './appContainer'
import api from '../api'

function Update() {

    const { id } = useParams();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);

    const updateSubmit = async () => {
        setLoading(true)
        try {
            await api.updatePost({
                title, description,
            }, id);
            history.push('/');
        } catch {
            alert('failed update post!')
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        api.getOnePost(id).then( res => {
            const result = res.data;
            setTitle(result.title);
            setDescription(result.description);
        })
    }, [])

    return (
        <AppContainer title="UPDATE POST">
            <form>
                <div className="form-group">
                    <label for="exampleInputPassword1">Title</label>
                    <input type="text" className="form-control" value={title} onChange = {e => setTitle(e.target.value)} placeholder="title here ..." />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Description</label>
                    <input type="text" className="form-control" value={description} onChange = {e => setDescription(e.target.value)} placeholder="description here ..." />
                </div>

                <button type="submit" className="btn btn-warning btn-block p-3" onClick={updateSubmit} disabled={loading}>{loading === true ? "LOADING" : "UPDATE"}</button>
            </form>
        </AppContainer>
    )
}

export default Update
