import { Link } from "react-router-dom"
import './styles.css'
export const Home = () => {
    return (
        <>
            <h1>FrontEnd Web Development</h1>
            <div className="links">
                <Link to="/data" className="linkEstilizado">Data</Link>
                <Link to="/calculator"className="linkEstilizado">Calculator</Link>
            </div>
        </>
    )
}