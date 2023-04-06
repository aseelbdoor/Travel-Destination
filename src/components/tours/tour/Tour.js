import './Tour.css';
import { Link } from "react-router-dom";

function Tour(prop) {
    return (
        <div className="top">
            <div className="title"><h1>{prop.name}</h1></div>
            <div className="card">
                <div className="photo"><Link to={`/city/${prop.id}`}><img src={prop.image} alt={prop.name} /></Link></div>
            </div>
        </div>
    )
}

export default Tour;