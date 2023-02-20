import React from 'react';

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

export default LinkItem;
