import { Link } from 'react-router-dom';
import './index.css'

export const Footer = () =>{
    return(
        <div className='Footer'>
            <div>
                <h1>Footer</h1>
                <h2>Rascunho</h2>
                <ul>
                    <li><Link to="/">Login</Link></li>
                    <li><Link to="/Init">Inicio</Link></li>
                    <li><Link to="/ParaVoce">Para Você</Link></li>
                    <li><Link to="/Reviews">Reviews</Link></li>
                    <li><Link to="/Futuro">Futuro</Link></li>
                    <li><Link to="/Rascunho">Rascunho</Link></li>
                </ul>
            </div>
        </div>
    );
}