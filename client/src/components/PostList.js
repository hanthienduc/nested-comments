import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { getPosts } from "../service/post"

export function PostList() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts().then(setPosts)

  }, [])

  return <>
    {JSON.stringify(posts)}
  </>
}