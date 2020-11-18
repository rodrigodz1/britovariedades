import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api';
import './styles.css';

export default function Register(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory()

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            username,
            password,
        };
        
        try {
            console.log(data);
            const response = await api.post('users', data);
            console.log(data);
            console.log(response.data);

            alert(`Seu ID de acesso: ${response.data._id}`);

            history.push('/');
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <h1>Cadastro</h1>
                    <p>Salve produtos, entre em contato</p>

                    <Link className="back-link" to="/">
                        Voltar para homepage
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Usuário"
                        value={username}
                        onChange={e => setUsername(e.target.value)} 
                    />

                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)} 
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}