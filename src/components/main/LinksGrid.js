import React from 'react';

import LinkItem from './LinkItem';

import { linksInfo } from '../../data/links-data';

const LinksGrid = () => {
	return (
		<main>
			{linksInfo.map(({ id, link, icon, label }) => (
				<LinkItem key={id} link={link} icon={icon} linklabel={label} />
			))}
		</main>
	);
};

export default LinksGrid;
