import jobs from './data/jobs.json';
import skills from './data/skills.json';
import { Jobs } from './components/Jobs';
import './style.scss';

document.querySelector('#app').innerHTML = /*html*/ `
  <h1 class="text-blue-900 text-2xl mb-3">Jobs and Skills</h1>
  <p class="mb-1">There are ${jobs.length} jobs.</p>
  <p class="mb-6">There are ${skills.length} skills.</p>
  <input class="searchText mb-4"/> <button class="btnSearch">Search</button>
  <!-- ${Jobs('cypress')}
  ${Jobs('oop')}
  ${Jobs('react')} -->
  <div class="results"></div>
`;


const btnSearchElem = document.querySelector('.btnSearch');
const searchTextElem = document.querySelector('.searchText');
const resultsElem = document.querySelector('.results');

btnSearchElem.addEventListener('click', () => {
  const searchText = searchTextElem.value;
  const resultHtml = Jobs(searchText);
  resultsElem.innerHTML = resultHtml;
})
