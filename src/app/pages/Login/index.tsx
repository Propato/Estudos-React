import { useState, useEffect, useMemo } from 'react';

import { Footer, Header } from '../../components';
import './index.css'

export const Login = () => {

    const [name, setName] = useState('');
    const [CPF, setCPF] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {
        console.log(name, CPF, senha);
    }

    useEffect( () => {
        if(window.confirm('real ou fake?')){
            console.log('real');
        } else{
            console.log('fake');
        }
    }, []);

    useEffect( () => {
        console.log(name);
    }, [name]);
    useEffect( () => {
        console.log(CPF);
    }, [CPF]);
    useEffect( () => {
        console.log(senha);
    }, [senha]);

    const CPFsize = useMemo(() => { return CPF.length*156 }, [CPF]); //useMemo (memory) é usado para realizar coisas grande para recarrega-lo só quando necessário

    return(
        <div>
            <Header/>
            <form action="/Init">
                    <label>
                        <span>Nome</span>
                        <input title="Digite seu nome" value={name} onChange={e => setName(e.target.value)}/>
                    </label><br/>
                    <label>
                        <span>CPF</span>
                        <input type='text' title="Digite um CPF no formato: xxx.xxx.xxx-xx" value={CPF} onChange={e => setCPF(e.target.value)}/>
                    </label>
                    {CPFsize}<br/>
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
