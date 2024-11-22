import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ToqueGame from './ToqueGame';
import './CelularJogo.css';

const CelularJogo = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { gender } = location.state || {};
    const [showGame, setShowGame] = useState(false);

    if (!gender) {
        navigate('/');
        return null;
    };

const dicas = {
    verde: 'Esta é uma região onde o toque costuma ser seguro.',
    amarela: 'Dica: Esta é uma região que ao ser tocada por outra pessoa precisamos ficar atentos.',
    vermelha: 'Dica: Esta é uma região privada. Ninguém deve tocá-la sem sua permissão.',
    };

    return (
        <div className="celular-jogo">
            {!showGame ? (
                <div className="start-screen">
                    <h2>Semáforo do Toque</h2>
                    <p>
                        Arraste as bolinhas para as partes do corpo corretas. Cada cor tem um significado:
                    </p>
                    <ul>
                        <li>
                            <span className="ball verde"></span> Verde: Regiões seguras para o toque.
                        </li>
                        <li>
                            <span className="ball amarela"></span> Amarelo: Regiões para ficar atento.
                        </li>
                        <li>
                            <span className="ball vermelha"></span> Vermelho: Regiões que não devem ser tocadas sem permissão.
                        </li>
                    </ul>
                    <button className="start-button" onClick={() => setShowGame(true)}>
                        Iniciar
                    </button>
                </div>
            ) : (
                <div className="game-modal">
                    <button className="close-button" onClick={() => navigate('/')}>
                        X
                    </button>
                    <div className="game-container">
                        <ToqueGame gender={gender} onBack={() => setShowGame(false)} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CelularJogo;
