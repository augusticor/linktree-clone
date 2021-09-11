import React from 'react';

import HeaderInfo from './components/header/HeaderInfo';
import LinksGrid from './components/main/LinksGrid';
import FooterLink from './components/footerlink/FooterLink';

import './link-tree.css';

const LinkTree = () => {
	return (
		<>
			<HeaderInfo />

			<LinksGrid />

			<FooterLink />
		</>
	);
};

export default LinkTree;
