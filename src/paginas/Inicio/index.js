import React from 'react'
import Banner from 'componentes/Banner'
import styles from './Inicio.module.css'
import Post from 'componentes/Post'

import posts from 'json/posts'

export default function Inicio() {
  return (
    <>
        <ul className={styles.posts}>
          {posts.map((post) => (
              <li key={post.id}>
                <Post post={post} />
              </li>
          ))}
        </ul>
    </>
  )
}
