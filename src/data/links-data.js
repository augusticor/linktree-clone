const baseUrlID = 'd04573735aa5439503f9b5fb5928e289c03e29e0'

const assetsBaseURL = `https://assets.production.linktr.ee/${baseUrlID}/icons/tabler-icons/`;

const brandUrl = 'brand-';

export const linksInfo = [
	{
		id: 'link-linkedin',
		link: 'https://www.linkedin.com/in/augusticor/',
		icon: `${assetsBaseURL}${brandUrl}linkedin.svg`,
		label: 'LinkedIn',
	},
	{
		id: 'link-github',
		link: 'https://github.com/augusticor',
		icon: `${assetsBaseURL}${brandUrl}github.svg`,
		label: 'GitHub',
	},
	{
		id: 'link-youtube',
		link: 'https://www.youtube.com/channel/UC0_5DKWPKfTCu6S8Bs1QihA',
		icon: `${assetsBaseURL}${brandUrl}youtube.svg`,
		label: 'YouTube',
	},
	{
		id: 'link-duolingo',
		link: 'https://www.duolingo.com/profile/augusticor',
		icon: `${assetsBaseURL}language.svg`,
		label: 'Duolingo',
	},
	{
		id: 'link-linktree',
		link: 'https://linktr.ee/augusticor',
		icon: `${assetsBaseURL}trees.svg`,
		label: 'Real linktr.ee',
	},
];
