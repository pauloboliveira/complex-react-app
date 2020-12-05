import Axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import StateContext from "../StateContext";
import LoadingDotIcon from "./LoadingDotsIcon";

function ProfileFollow(props) {
    const { username } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState([])
    const appState = useContext(StateContext)

    useEffect(() => {
        const ourRequest = Axios.CancelToken.source()

        async function fetchPosts() {
            try {
                const response = await Axios.get(`/profile/${username}/${props.action}`, { cancelToken: ourRequest.token })
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
    }, [username, props.action])

    if (isLoading) return <LoadingDotIcon />

    return (
        <div className="list-group">
            {username == appState.user.username && props.followingCount == 0 && (
                <h6>You still don't follow anyone!</h6>
            )} 
            {username != appState.user.username && props.followingCount == 0 && (
                <h6>This user is not following anyone yet!</h6>
            )}
            {posts.map((follower, index) => {
                return (
                    <Link key={index} to={`/profile/${follower.username}`} className="list-group-item list-group-item-action">
                        <img className="avatar-tiny" src={follower.avatar} /> {follower.username}
                        
                    </Link>
                )
            })}
        </div>
    )
}

export default ProfileFollow