import jobs from '../data/jobs.json';

export const Jobs = () => {

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

	return /*html*/ `
	${jobsHtml}
	`;
};