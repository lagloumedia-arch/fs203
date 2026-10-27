/*import { StrictMode } from 'react';*/
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Compnpm, Compnpm1 } from './compjsx';
import Equipe2  from 'equipe2.js';


const root = createRoot(document.getElementById('root'));

root.render(
  <>
    <Compnpm
      nom="pr1"
      age={20}
      sexe="F"
      message="Bonjour"
      couleur="red"
      retour1={true}
    />
    <Equipe2/>


    <Compnpm1
      nom="pr1"
      age={20}
    />
  </>
);

reportWebVitals();