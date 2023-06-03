import { useEffect, useState } from 'react';
import axios from 'axios';

function Cadastro() {
    return (
        <div>
            <h1>Tela de Cadastro</h1>
            <form action="" method="post">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Senha</label>
                <input type="password" name="password" id="password" />
            </form>
        </div>
    );
};

export default Cadastro;