import React from 'react'
import PostCard from 'componentes/PostCard'

export default function Recomendacao({ posts }) {
    const numeroDeRecomendacoes = 4
    return (
        <ul>
                {posts.map((post, index) => {
                    if(index > numeroDeRecomendacoes - 1) {
                        return '';
                    }
                    return (
                    <li key={post.id}>
                        <PostCard post={post}/>
                    </li>)
                })}
        </ul>
  )
}
