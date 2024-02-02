import jobs from '../data/jobs.json';

export const Jobs = () => {

	let jobsHtml = '<ul>';
	for (const job of jobs) {
		jobsHtml += `
<li class="mb-4 bg-slate-600 p-3 rounded">
  <p class="font-semibold">${job.title}</p>
  <p class="text-orange-950">${job.company}</p>
  <p>${job.skillList}</p>
</li>
`;
	}
	jobsHtml += '</ul>';

	return /*html*/ `
	${jobsHtml}
	`;
};