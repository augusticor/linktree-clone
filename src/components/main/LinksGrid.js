import React from 'react';

import LinkItem from './LinkItem';

const LinksGrid = () => {
	return (
		<main>
			<LinkItem
				link={'https://www.linkedin.com/in/augusticor/'}
				icon={'https://assets.production.linktr.ee/ef928851e29399340d4af70da9c77a3f60e5afad/icons/tabler-icons/brand-linkedin.svg'}
				linklabel={'LinkedIn'}
			/>
		</main>
	);
};

export default LinksGrid;
