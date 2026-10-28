import { ArtPieceComment } from "../../types";

type CommentsProps = {
  comments: ArtPieceComment[];
};

export default function Comments({ comments }: CommentsProps) {
  return (
    <section className="commentSection">
      <h2>Comments</h2>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul className="comments">
          {comments.map((comment) => (
            <li key={comment.date}>
              <p>{comment.text}</p>
              <time dateTime={comment.date}>
                {new Date(comment.date).toLocaleString()}
              </time>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
