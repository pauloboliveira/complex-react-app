import Axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import LoadingDotIcon from "./LoadingDotsIcon";
import Post from "./Post";

function ProfilePosts() {
    const { username } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const ourRequest = Axios.CancelToken.source()

        async function fetchPosts() {
            try {
                const response = await Axios.get(`/profile/${username}/posts`, {cancelToken: ourRequest.token})
                setIsLoading(false)
                setPosts(response.data)
            } catch (error) {
                console.log("There was a problem or the request was cancelled")
            }
        }
        fetchPosts()

        return () => {
            ourRequest.cancel()
        }
    }, [username])

    if (isLoading) return <LoadingDotIcon />

    return (
        <div className="list-group">
            {posts.map(post => {
                return <Post post={post} key={post._id} noAuthor={true}/>
            })}
        </div>
    )
}

export default ProfilePosts