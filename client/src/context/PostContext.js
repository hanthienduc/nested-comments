import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useAsync } from "../hooks/useAsync";
import { getPost } from "../services/post";

const Context = createContext()

export function usePostContext() {
  return useContext(Context)
}

export function PostProvider({ children }) {

  const { id } = useParams()

  const { loading, error, value: post } = useAsync(() => getPost(id))

  const [comments, setComments] = useState([])

  const commentsByParentId = useMemo(() => {
    const group = {}
    comments.forEach(comment => {
      group[comment.parentId] ||= []
      group[comment.parentId].push(comment)
    })
    return group
  }, [comments])

  useEffect(() => {
    if (post?.comments == null) return
    setComments(post?.comments)

  }, [post?.comments])

  function getReplies(parentId) {
    return commentsByParentId[parentId]
  }

  function createLocalComment(comment) {
    setComments(prevComments => {
      return [
        comment,
        ...prevComments
      ]
    })
  }


  return <Context.Provider value={{
    post: {
      id,
      ...post,
    },
    rootComments: commentsByParentId[null],
    getReplies,
    createLocalComment

  }}>

    {loading ?
      <h1>loading...</h1> :
      error ?
        <h1 className="error-msg">{error}</h1>
        : children
    }
  </Context.Provider>
}