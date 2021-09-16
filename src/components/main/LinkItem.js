import React from 'react';
import PropTypes from 'prop-types';

import './link-item.css';

const LinkItem = ({ link, icon, linklabel }) => {
	return (
		<section className='link-item'>
			<a className='link' href={link} target='_blank' rel='noreferrer'>
				<div className='icon-alignment'>
					<img className='icon' src={icon} alt={`${linklabel} link`} />
				</div>
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

LinkItem.defaultProps = {
	link: 'https://linktr.ee/',
	linklabel: 'Linkt.ree',
	icon: 'https://assets.production.linktr.ee/ef928851e29399340d4af70da9c77a3f60e5afad/icons/tabler-icons/trees.svg',
};

export default LinkItem;
