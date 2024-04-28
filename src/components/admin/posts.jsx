import { useNavigate } from "react-router-dom";

function Posts() {
  const navigate = useNavigate();

  return (
    <>
      <h2>Posts</h2>
      <button onClick={() => navigate("/contact")}>Contact</button>
    </>
  );
}

export default Posts;
