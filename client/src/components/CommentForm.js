import { useState } from "react"

export function CommentForm({ loading, error, onSubmit, autoFocus = false, initialValue = '' }) {

  const [message, setMessage] = useState(initialValue)

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(message).then(() => setMessage(''))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="comment-form-row">
        <textarea className='message-input' value={message} autoFocus={autoFocus}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button disabled={loading} className="btn">{loading ? 'Loading... ' : 'Post'}</button>
      </div>
      <div className="error-msg">
        {error}
      </div>
    </form>
  )
}