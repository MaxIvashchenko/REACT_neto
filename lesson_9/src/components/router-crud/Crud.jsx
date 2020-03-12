import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import nanoid from 'nanoid';





import ContextCrud from './context.js'

function Create() {

    return (
        <div className="create-Box">
            <Link exact to="/new" className="create-Link">Создать пост</Link>
        </div>
    );
}

function Post(props) {

    const [redir, setRedir] = useState(false)

    const back = () => {
        setRedir(true)
    }

    return (
        <>
            {redir ? <Redirect to='/' /> :
                <Route exact path={props.look ? `/posts/${props.id}` : "/"}>
                    {props.look ?
                        <div className="post-Box">
                            {props.look ? <div className='add-del' onClick={back}>&lt;</div> : null}
                            <p>Имя пользователя</p>
                            <p>{props.content}</p>
                            {props.children}</div> :
                        <Link to={`/posts/${props.id}`} className="post-Box">
                            <p>Имя пользователя</p>
                            <p>{props.content}</p>
                        </Link>
                    }

                </Route>
            }
        </>
    );
}

function Add(props) {

    const { setChangePost } = useContext(ContextCrud);
    const { setChange } = useContext(ContextCrud);
    const [newPost, setNewPost] = useState({
        post: props.content ? props.content : '',
    })

    const [loading, setLoading] = useState(false);

    let url = 'http://localhost:7777/posts';

    const formChange = (e) => {
        setNewPost(
            { post: e.target.value, }
        )
    }

    const formSubmit = (e) => {
        e.preventDefault();
        const fetchUsers = async () => {
            try {
                const response = await fetch(url, {
                    method: 'post',
                    body: JSON.stringify({
                        id: props.id ? props.id : nanoid(),                        
                        content: newPost.post
                    })
                });
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
            } catch (e) {
                console.error(e)
            } finally {
                setChange(prevChange => prevChange + 1);
                setLoading(true);
            }
        }

        fetchUsers();

        setNewPost(
            { post: '', }
        )
    }

    const setLoad = () => {
        setChangePost(false);
        setLoading(true);
    }

    return (

        <div>
            {loading ? <Redirect to='/' /> :
                <div className="add-Box">
                    <div className='add-del' onClick={setLoad}>&times;</div>
                    <form action="." onSubmit={formSubmit}>
                        <textarea
                            onChange={formChange}
                            name="bewPost"
                            id=""
                            cols="30" rows="10"
                            value={newPost.post}
                        >
                        </textarea>
                        <button className="create-Link">{props.content ? 'Сохранить' : 'Опубликовать'}</button>
                    </form>
                </div>
            }
        </div>
    );
}


function LookPost(props) {

    let url = `http://localhost:7777/posts/${props.id}`;
    const [loading, setLoading] = useState(false);
    const { change, setChange } = useContext(ContextCrud);
    const { changePost, setChangePost } = useContext(ContextCrud);

    const changeP = () => {
        setChangePost(true);
    }

    useEffect(() => {
        if (changePost) { setChangePost(false) };
    }, [ContextCrud]);

    const remove = () => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(url, {
                    method: 'delete',
                });
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
            } catch (e) {
                console.error(e)
            } finally {
                setChange(prevChange => prevChange + 1);
                setLoading(true);
            }
        }

        fetchUsers();
    }

    return (
        <>
            {loading ? <Redirect to='/' /> :
                <Route exact path={`/posts/${props.id}`}>
                    {changePost ?
                        <Add {...props} /> :
                        <Post {...props}>
                            <div className='lookPost-buttonBox'>
                                <button className='lookPost-change' onClick={changeP}>Изменить</button>
                                <button className='lookPost-remove' onClick={remove}>Удалить</button>
                            </div>
                        </Post>
                    }
                </Route>
            }
        </>
    );
}


export default function Crud() {
  const { change, setChange } = useContext(ContextCrud);
  const [posts, setPosts] = useState([]);
  const url = 'http://localhost:7777/posts';
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const post = await response.json();
        setPosts(post)
      } catch (e) {
        console.error(e)
      }
    }
    fetchUsers()
  }, [change]);

  return (
    <Router>
      <div className="crud-Box">
        <Route exact path="/" component={Create} />
        <Route exact path="/new" component={Add} />
        {posts.map(post => <Post {...post} look={false} key={post.id} />)}
        {posts.map(post => <LookPost {...post} look={true} key={post.id} />)}
      </div>
    </Router>
  );
}
