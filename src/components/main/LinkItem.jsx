const LinkItem = ({
  link = 'https://linktr.ee/',
  icon = 'https://assets.production.linktr.ee/ef928851e29399340d4af70da9c77a3f60e5afad/icons/tabler-icons/trees.svg',
  linklabel = 'Linkt.ree',
}) => {
  return (
    <section className='link-item'>
      <a className='link' href={link} target='_blank' rel='noreferrer'>
        <img className='icon' src={icon} alt={`${linklabel} link`} />
        <p data-testid='linklabel'>{linklabel}</p>
        <button className='btn-sharesvg'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={20}
            height={17}
            viewBox='0 0 24 24'
            strokeWidth={1.6}
            stroke='#FFF'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2' />
            <polyline points='7 9 12 4 17 9' />
            <line x1='12' y1='4' x2='12' y2='16' />
          </svg>
        </button>
      </a>
    </section>
  );
};

export default LinkItem;
