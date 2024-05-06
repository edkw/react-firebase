import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <>
      <h2>About</h2>
      <button onClick={() => navigate("/contact")}>Contact</button>
      <div className="container">
        <table border="5">
          <tr>
            <th>id</th>
            <th>name</th>
          </tr>
          <tr>
            <td>001</td>
            <td>John Smith</td>
          </tr>
          <tr>
            <td>002</td>
            <td>aaa bbb</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default About;
