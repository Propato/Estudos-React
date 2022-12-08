import { useState } from 'react';
import { Header, Footer } from '../../components';
import './index.css'

interface propsType{
    onClose: () => void,
    children: JSX.Element[]
};

export const POPUP = (props: propsType) => {    

    return (
        <div className='Popup' onClick={ props.onClose }>
            <div className='Container' onClick={e => e.stopPropagation()}>
                <button className='Close' onClick={ props.onClose }/>
                <div className='Conteudo'>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export const Inicio = () => {

    const [popup, setPopup] = useState(true);

    return(
        <div>
            <Header/>
            <main>
                <h1>Inicio</h1>
                <button onClick={ () => { popup ? setPopup(false) : setPopup(true); } } >PopUp</button>
                
                { popup ? 
                <POPUP onClose={ () => setPopup(false) }>
                    <h1>aaaa</h1>
                    <h3>texto texto texto texto</h3>
                </POPUP>: null }
            </main>
            <Footer/>
        </div>
    );
};