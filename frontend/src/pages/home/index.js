import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import './styles.css';

export default function Home(){
    const [posts, setPosts] = useState([])

    useEffect(() => {
        api.get('posts').then( response => console.log(setPosts(response.data)) )
    }, []);

    return (
        <div className="home-container">
            <section className="header">Brito Variedades</section>
            <div className="products">
                <ul>
                    {posts.map(post => (
                        <li key={post.date}>
                            <strong>Title:</strong>
                            <p>{post.title}</p>

                            <strong>Description:</strong>
                            <p>{post.description}</p>

                            <strong>Price:</strong>
                            <p>R$ {post.price}</p>

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

}