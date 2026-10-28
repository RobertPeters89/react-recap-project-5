import { ArtPieceComment } from "../../types";
import CommentForm from "../CommentForm/CommentForm";

type CommentsProps = {
  comments: ArtPieceComment[];
  slug: string;
  onAddComment: (slug: string, text: string) => void;
};

export default function Comments({
  comments,
  slug,
  onAddComment,
}: CommentsProps) {
  return (
    <section className="commentSection">
      <h2>Comments</h2>
      <CommentForm onAddComment={(text) => onAddComment(slug, text)} />
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
