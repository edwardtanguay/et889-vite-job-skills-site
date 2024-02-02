import jobs from './data/jobs.json';
import { Jobs } from './components/Jobs';
import './style.scss';

document.querySelector('#app').innerHTML = /*html*/ `
  <h1 class="text-blue-900 text-2xl mb-3">Jobs and Skills</h1>
  <p class="mb-6">There are ${jobs.length} jobs.</p>
  ${Jobs()}
`;
