import { usePostContext } from "../context/PostContext"
import { CommentList } from "./CommentList"

export function Post() {

  const { post, rootComments } = usePostContext()

  return <>
    <h1>{post.title}</h1>
    <article>{post.body}</article>
    <section>
      {rootComments != null && rootComments.length > 0 && (
        <div className="mt-4">
          <CommentList comments={rootComments} />
        </div>
      )}
    </section>
  </>
}