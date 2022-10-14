import './landingpage.css'
import { Link } from 'react-router-dom'
const LandingPage = () => {
    return (
        <div className="container">
            <div>
                <img src="https://images.unsplash.com/photo-1665196877463-918958e3a3c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="Landing-Image" />
            </div>
            <div>
                <h1>10X Team 04</h1>
                <Link to="./postview">
                    <button className="btn" >Enter</button>
                </Link>
            </div>
        </div>
    )
}
export default LandingPage;