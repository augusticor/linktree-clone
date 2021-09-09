import React from 'react';

import HeaderInfo from './components/header/HeaderInfo';
import LinksGrid from './components/main/LinksGrid';

import './link-tree.css';

const LinkTree = () => {
	return (
		<>
			<HeaderInfo />

			<LinksGrid />
		</>
	);
};

export default LinkTree;
