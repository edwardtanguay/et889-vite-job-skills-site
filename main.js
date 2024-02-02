import jobs from './data/jobs.json';
import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Jobs and Skills</h1>
  <p>There are ${jobs.length} jobs.</p>
`;
