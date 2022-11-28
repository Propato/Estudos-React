import { Link } from 'react-router-dom';
import './index.css'

export const Header = () => {
    return(
        <div className='Header'>
            <div>
                <Link to="/Init" className='Init'>Monike</Link>
                <ul>
                    <li><Link to="/ParaVoce">Para Você</Link></li>
                    <li><Link to="/Reviews">Reviews</Link></li>
                    <li><Link to="/Futuro">Futuro</Link></li>
                </ul>
            </div>
        </div>
    );
}