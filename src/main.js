import jobs from './data/jobs.json';
import './style.scss';

let jobsHtml = '<ul>';
for (const job of jobs) {
  jobsHtml += `
<li class="mb-4">
  <p class="font-semibold">${job.title}</p>
  <p>${job.company}</p>
</li>
`;
}
jobsHtml += '</ul>';

document.querySelector('#app').innerHTML = /*html*/ `
  <h1 class="text-blue-950 text-2xl mb-3">Jobs and Skills</h1>
  <p class="mb-6">There are ${jobs.length} jobs.</p>
  ${jobsHtml}
`;
