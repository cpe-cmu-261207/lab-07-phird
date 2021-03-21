import {useEffect,useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'
const APP_ID = '605668030403b71f5bf38df3'

const Posts = () => {
    const [posts,setPosts] = useState([])
    const fetch = async () => {
        const response = await axios.get(`${baseURL}/post`, { headers: { 'app-id': APP_ID } })
        setPosts(response.data.data)
        console.log(response.data.data)
    }
    const style = {
        backgroundColor: '#4CAF50',
        border: 'none',
        color: 'white',
        padding: '10px 10px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        cursor: 'pointer',
      }

    useEffect(fetch,[])
    return (
        <>
        <table id ="Link">
            <tr>
                <td style= {style}><Link href="/">Home</Link></td>
                <td style= {style}><Link href="/gallery">Gallery</Link></td>
                <td style= {style}><Link href="/contact">Contact</Link></td>
                <td style= {style}><Link href="/gpa">GPA calculator</Link></td>
                <td style= {style}><Link href="/post">post</Link></td>
            </tr>
        </table>
            <h1>All Posts</h1>
            <ul>
            {posts.map(post => {
                console.log(post)
                return (
                    <li>
                        <h3>post : {post.text}</h3>
                        <img src = {post.image} alt = "fail to load"/>
                        <p>Likes : {post.likes}</p>
                        <Link  key={post.id} href={`/post/${post.id}`}>
                            <button style={{margin:10}}>Go to this post</button>
                        </Link>
                    </li>
                ) 
            })}
            </ul>
        </>
    )
}

export default  Posts