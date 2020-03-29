import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import './styles.css';

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="logo"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude as pessoas a encontrarem os casos da sua ong</p>
                    
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02141" />
                        Não tenho cadastro
                    </Link >
                </section>

                <form>
                    <input placeholder="Nome da ong"/>
                    <input type="email" placeholder="Email"/>
                    <input placeholder="Whatsapp"/>
                    <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style={ {'width': 80} }/>
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}