import { useParams } from 'react-router-dom'
import styles from './Post.module.css'
import React from 'react'

export default function Post() {

    const parametros = useParams();

    console.log(parametros)

    return (
        <div>Post</div>
    )
}
