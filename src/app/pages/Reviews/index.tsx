import { useState } from 'react';
import { Header, Footer } from '../../components';
import './index.css'

export const Reviews = () => {

    const [name, setName] = useState('');
    const [CPF, setCPF] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {
        console.log(name, CPF, senha);
    }

    return(
        <div>
            <Header/>
            <h1>Reviews - Banco de Dados</h1>
            <form action="/Init">
                    <label>
                        <span>Nome</span>
                        <input title="Digite seu nome" value={name} onChange={e => setName(e.target.value)}/>
                    </label><br/>
                    <label>
                        <span>CPF</span>
                        <input type='text' title="Digite um CPF no formato: xxx.xxx.xxx-xx" value={CPF} onChange={e => setCPF(e.target.value)}/>
                    </label><br/>
                    <label>
                        <span>Senha</span>
                        <input type='password' value={senha} onChange={e => setSenha(e.target.value)}/>
                    </label><br/>

                    <button type='button' onClick={handleLogin}>Entrar</button>
            </form>
            <Footer/>
        </div>
    );
}