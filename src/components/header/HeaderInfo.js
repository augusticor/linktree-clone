import React from 'react';

import './header-styles.css';

const HeaderInfo = () => {
	return (
		<header className='info'>
			<img className='image' src='https://d1fdloi71mui9q.cloudfront.net/7TrNrWjiTk6X2Y3iJnXE_QlLnDOA3CHLK0c8j' alt='User profile photography' />
			<h1 className='username'>@augusticor</h1>
			<h2 className='bio'>U.P.T.C. Systems Engineering last semester student. JavaScript dev</h2>
		</header>
	);
};

export default HeaderInfo;
