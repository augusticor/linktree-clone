import React from 'react';
import PropTypes from 'prop-types';

import './link-item.css';

const LinkItem = ({ link, icon, linklabel }) => {
	return (
		<section className='link-item'>
			<a className='link' href={link} target='_blank' rel='noreferrer'>
				<img src={icon} alt={`${linklabel} link`} />
				<p>{linklabel}</p>
				<p className='hide'>hiding</p>
			</a>
		</section>
	);
};

LinkItem.propTypes = {
	link: PropTypes.string.isRequired,
	linklabel: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

LinkItem.defaultPropTypes = {
	link: 'https://linktr.ee/',
	linklabel: 'Linkt.ree',
};

export default LinkItem;
