import { Header, Footer } from '../../components';
import './index.css'

import { useNavigate } from 'react-router-dom';

export const Rascunho = () => {
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    }

    return(
        <div>
            <Header/>
            <main>
                <h1>Inicio</h1>

                <button onClick={handleClick}>botao</button>
            </main>
            <Footer/>
        </div>
    );
}