import React from 'react';
import './Denuncia.css'; // Estilos para a página de denúncia

function Denuncia() {
    return (
        <div className="denuncia-page">
            <section className="sobre-projeto">
                <h2>Sobre o Projeto</h2>
                <p>
                    O "Semáforo do Toque" foi desenvolvido para educar crianças sobre
                    limites corporais e conscientizar sobre a importância do respeito ao corpo.
                    Nosso objetivo é fornecer ferramentas para identificar situações de risco
                    e incentivar o diálogo sobre segurança pessoal.
                </p>
            </section>
            <section className="canais-denuncia">
                <h2>Canais de Denúncia</h2>
                <ul>
                    <li>Disque 100 - Serviço Nacional de Direitos Humanos</li>
                    <li>Polícia Militar - 190</li>
                    <li>Conselho Tutelar da sua região</li>
                    <li>
                        <a href="https://www.safernet.org.br" target="_blank" rel="noopener noreferrer">
                            SaferNet - Denúncias online de abuso
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Denuncia;
