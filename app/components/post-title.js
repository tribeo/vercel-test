export default function PostTitle({ children }) {
  return (
    <h1 className="post-title" dangerouslySetInnerHTML={{ __html: children }} />
  );
}
