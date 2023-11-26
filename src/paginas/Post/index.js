import posts from 'json/posts.json'
import { useParams } from 'react-router-dom'
import React from 'react'
import PostModelo from 'componentes/PostModelo';
import ReactMarkDown from 'react-markdown'
import './Post.css'

export default function Post() {

    const parametros = useParams();
    
    const post = posts.find((post) => post.id === Number(parametros.id))

    if(!post){
        return <h1>Post não encontrado...</h1>
    }

    return (
        <PostModelo
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >
            <div className='post-markdown-container'>
                <ReactMarkDown>
                    {post.texto}
                </ReactMarkDown>
            </div>

        </PostModelo>
    )
}
