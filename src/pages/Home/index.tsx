import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <Link to="/githubsearch">
                <h1>Desafio Github API</h1>
                <h2>Bootcamp Spring React - DevSuperior</h2>
                <button className="btn btn-primary btn-lg start-button">Começar</button>
            </Link>
        </div>
    );
}

export default Home;
