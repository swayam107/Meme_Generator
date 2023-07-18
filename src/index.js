import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css'
import { createRoot } from 'react-dom/client';
import App2 from './App2.js';



const root = createRoot(document.getElementById('root'))
root.render(<App />)

// const root2 = createRoot(document.getElementById('root'))
// root2.render(<App2/>)

// createRoot(document.getElementById('root')).render(<App />)

