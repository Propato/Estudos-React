import { useEffect, useState } from 'react';
import { Header, Footer } from '../../components';
import './index.css'
import axios from 'axios';

export const Reviews = () => {

    const [name, setName] = useState('');
    const [salario, setSalario] = useState('');
    const [profissao, setProfissao] = useState('');

    const [table, setTable] = useState(Array<{nome:string, salario:number, profissao:string}>);

    const handleLogin = () => {
        console.log(name, salario, profissao);
        axios.post("http://localhost:3000/register", {
            name: name,
            salario: salario,
            profissao: profissao
        }).then((response) => { console.log(response); });
        
        axios.get("http://localhost:3000/getTable").then((response) => {
            setTable(response.data);
        });
    };

    useEffect(() => {
        axios.get("http://localhost:3000/getTable").then((response) => {
            setTable(response.data);
        });
    }, []);

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
                        <span>Salario</span>
                        <input type='number' title="Digite seu salario" value={salario} onChange={e => setSalario(e.target.value)}/>
                    </label><br/>
                    <label>
                        <span>Profissao</span>
                        <input type='text' value={profissao} onChange={e => setProfissao(e.target.value)}/>
                    </label><br/>
                    
                    <button type='button' onClick={handleLogin}>Salvar</button>
            </form>
            <div className='list'>
                {table.map((value, index) => <div key={index} className='list-topic'> <h3>{index}, {value.nome}, {value.salario}, {value.profissao}</h3> </div>)}
            </div>
            <Footer/>
        </div>
    );
}