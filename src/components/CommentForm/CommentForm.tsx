import { useState } from "react";

type CommentFormProps = {
  onAddComment: (text: string) => void;
};

export default function CommentForm({ onAddComment }: CommentFormProps) {
  const [text, setText] = useState("");

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = text.trim();
    if (trimmed === "") return;

    onAddComment(trimmed);
    setText("");
  }

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <label htmlFor="comment" />
      <div className="input-wrapper">
        <input
          id="comment"
          name="comment"
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Add a comment..."
          required
        />
      </div>
      <button type="submit">post comment</button>
    </form>
  );
}
