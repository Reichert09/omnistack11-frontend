import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';
import './styles.css';

export default function Login() {
    return (
        <div className="login-container">
            <section className="form">
                <img src={logo} alt="logo"/>
                <form>
                    <h1>Faça seu login</h1>
                    <input placeholder="Sua ID"/>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02141"></FiLogIn>
                        Não tenho cadastro
                    </Link >
                </form>
            </section>
            <img src={heroesImg} alt="heroes"/>
        </div>
    );
}