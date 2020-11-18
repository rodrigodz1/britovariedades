import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api';
import './styles.css';

export default function Login(){
    const [id, setId] = useState("");
    const history = useHistory()

    async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await api.get('users', { id });

            history.push('/profile');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="login-container">
            <section className="form">
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input 
                        placeholder="Sua ID" 
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />

                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
        </div>
    );
}