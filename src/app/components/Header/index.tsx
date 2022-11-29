import { Link } from 'react-router-dom';
import './index.css'

export const Header = () => {
    return(
        <div className='Header'>
            <div>
                <Link to="/Init" className='Init'>Init</Link>
                <ul>
                    <li><Link to="/Reviews">Reviews</Link></li>
                </ul>
            </div>
        </div>
    );
}