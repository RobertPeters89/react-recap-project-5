import { useState } from "react";

type CommentFormProps = {
  onAddComment: (text: string) => void;
};

export default function CommentForm({ onAddComment }: CommentFormProps) {
  const [text, setText] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = text.trim();
    if (trimmed === "") return;

    onAddComment(trimmed);
    setText("");
  }

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <label htmlFor="comment">Add a comment.</label>
      <input
        id="comment"
        name="comment"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        required
      />
      <button type="submit">Send</button>
    </form>
  );
}
