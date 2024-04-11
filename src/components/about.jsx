import { useNavigate } from "react-router-dom";

function About(){
    const navigate = useNavigate();

    console.log('about');

    return (
        <>
            <h2>About</h2>
            <button onClick={ ()=>navigate('/contact')}>Contact</button>
        </>
    );
}

export default About;
