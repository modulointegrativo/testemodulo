import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Toque from './Toque';
import Denuncia from './Denuncia';
import CelularJogo from './CelularJogo';
import './App.css';

function App() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    return (
        <Router>
            <div className="App">
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

                <main className="content">
                    <Routes>
                        <Route path="/" element={<Toque isMobile={isMobile} />} />
                        <Route path="/denuncia" element={<Denuncia />} />
                        <Route path="/jogo" element={<CelularJogo />} />
                    </Routes>
                </main>

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
