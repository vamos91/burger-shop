import React, { useEffect, useState } from 'react';

const Articles = () => {
    const [articles, setArticles] = useState([])

    
    useEffect(() => {
        const getPost = async () => {
            const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
            const postsJson = await posts.json()
            console.log(postsJson)
            setArticles(postsJson)
        }        
        getPost()
    }, [])
    
    return (
        <div>
            {
                articles.length > 0 && (
                    articles.map((article) => (
                        <div>{article.title} <button>voir</button></div>
                    ))
                )
            }
        </div>
    );
};

export default Articles;