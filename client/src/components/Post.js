import { usePostContext } from "../context/PostContext"

export function Post() {

  const { post } = usePostContext()

  return <>
    {JSON.stringify(post)}
  </>
}