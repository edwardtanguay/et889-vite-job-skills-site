import jobs from './data/jobs.json';
import './style.scss';

let jobsHtml = '<ul>';
for (const job of jobs) {
  jobsHtml += `
<li>
  <p><b>${job.title}</b></p>
  <p>${job.company}</p>
</li>
`;
}
jobsHtml += '</ul>';

document.querySelector('#app').innerHTML = `
  <h1>Jobs and Skills</h1>
  <p>There are ${jobs.length} jobs.</p>
  ${jobsHtml}
`;
