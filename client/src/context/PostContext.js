import { createContext, useContext } from "react";
import { useParams } from "react-router-dom";
import { useAsync } from "../hooks/useAsync";
import { getPost } from "../service/post";

const Context = createContext()

export function usePostContext() {
  return useContext(Context)
}

export function PostProvider({ children }) {

  const { id } = useParams()

  const { loading, error, value: post } = useAsync(() => getPost(id))

  return <Context.Provider value={{
    post: {
      id,
      ...post
    }
  }}>

    {loading ?
      <h1>loading...</h1> :
      error ?
        <h1 className="error-msg">{error}</h1>
        : children
    }
  </Context.Provider>
}