import React, {useState} from 'react'
import AppContainer from './appContainer'
import api from '../api'
import { useHistory } from 'react-router-dom'

const Create = () => {

    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const addSubmit = async () => {
        setLoading(true)
        try {
            await api.createPost({
                title, description,
            })
            history.push('/')
        } catch {
            alert('failed add post!')
        }finally{
            setLoading(false)
        }
    }

    return (
        <AppContainer title="CREATE POST CRUD">
            <form>
                <div className="form-group">
                    <label for="exampleInputPassword1">Title</label>
                    <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} placeholder="title here ..." />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Description</label>
                    <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} placeholder="description here ..." />
                </div>

                <button type="submit" className="btn btn-success btn-block p-3" onClick={addSubmit} disabled={loading}>{loading == true ? 'LOADING' : 'CREATE'}</button>
            </form>
        </AppContainer>
    )
}

export default Create
