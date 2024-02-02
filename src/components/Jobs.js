import jobs from '../data/jobs.json';
import skills from '../data/skills.json';

const getSkillNameList = (skillList) => {
	const skillIdCodes = skillList.split(',').map(m => m.trim()).sort();
	const skillHtmlTexts = [];
	for (const skillIdCode of skillIdCodes) {
		const skill = skills.find(skill => skill.idCode === skillIdCode);
		if (skill) {
			skillHtmlTexts.push(`<a class="underline" target="_blank" href="${skill.url}">${skill.name}</a>`);
		}
	}
	return skillHtmlTexts.join(', ');
};

export const Jobs = () => {

	let jobsHtml = '<ul>';
	for (const job of jobs) {

		jobsHtml += `
<li class="mb-4 bg-slate-600 p-3 rounded">
  <p class="font-semibold"><a href="${job.url}" class="underline" target="_blank">${job.title}</a></p>
  <p class="text-orange-950">${job.company}</p>
  <p>${getSkillNameList(job.skillList)}</p>
</li>
`;
	}
	jobsHtml += '</ul>';

	return /*html*/ `
	${jobsHtml}
	`;
};