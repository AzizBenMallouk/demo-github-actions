// src/main.js
import { createApp } from './App';

const root = document.getElementById('app');
root.innerHTML = ''; // on nettoie au cas où
root.appendChild(createApp());
