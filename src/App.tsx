import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Works } from './layout/sections/works/Works';
import { Testimony } from './layout/sections/testimony/Testimony';
import { Contacts } from './layout/sections/contacts/Contacts';
import { Slogan } from './layout/sections/slogan/Slogan';
import { Footer } from './layout/footer/Footer';
import { Particle } from './components/particle/Particles';


function App() {
    return (
        <div className="App">
            <Particle/>
            <Header></Header>
            <Main></Main>
            <Skills/>
            <Works></Works>
            <Testimony></Testimony>
            <Contacts></Contacts>
            <Slogan></Slogan>
            <Footer></Footer>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;