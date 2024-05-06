import { useState } from "react";
//import { useNavigate } from "react-router-dom";
//import Sidebar from "./sidebar";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./../../FirebaseConfig.js";

function Posts() {
  //const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "edkw_db"), {
        title,
        content,
        created_at: new Date().getTime(),
      });
      setTitle("");
      setContent("");
    } catch (error) {
      alert("コンテンツ登録にエラーが発生");
    }
  };

  return (
    <>
      <h2>Posts</h2>

      <div className="row">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="mb-3">
              <label for="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="content">Content</label>
              <input
                type="text"
                className="form-control"
                id="content"
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              //onClick={() => navigate("/contact")}
            >
              Insert Content
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default Posts;
