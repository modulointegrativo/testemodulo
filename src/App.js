import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Toque from './Toque';
import Denuncia from './Denuncia'; // Página de Canais de Denúncia
import './App.css'; // Estilos globais

function App() {
    return (
        <Router>
            <div className="App">
                {/* Cabeçalho com nome e logo da universidade */}
                <header className="App-header">
                    <div className="university-info">
                        <img
                            src={`${process.env.PUBLIC_URL}/unir-logo.png`}
                            alt="Logo da Universidade Federal de Rondônia"
                            className="university-logo"
                        />
                        <nav>
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/denuncia" className="nav-link">Canais de Denúncia</Link>
                        </nav>
                    </div>
                </header>

                {/* Conteúdo principal */}
                <main className="content">
                    <Routes>
                        <Route path="/" element={<Toque />} />
                        <Route path="/denuncia" element={<Denuncia />} />
                    </Routes>
                </main>

                {/* Rodapé */}
                <footer className="App-footer">
                    <p>
                        Este site foi desenvolvido por estudantes de medicina da turma 23 da
                        <strong> Universidade Federal de Rondônia</strong>.
                    </p>
                    <p>
                        Desenvolvedores: A colocar 
                    </p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
