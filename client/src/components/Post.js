import { usePostContext } from "../context/PostContext"
import { CommentForm } from "./CommentForm"
import { CommentList } from "./CommentList"

export function Post() {

  const { post, rootComments } = usePostContext()

  return <>
    <h1>{post.title}</h1>
    <article>{post.body}</article>
    <h3 className="comments-title">Comments</h3>
    <section>
      <CommentForm autoFocus />
      {rootComments != null && rootComments.length > 0 && (
        <div className="mt-4">
          <CommentList comments={rootComments} />
        </div>
      )}
    </section>
  </>
}