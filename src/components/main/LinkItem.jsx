const LinkItem = ({
  link = 'https://linktr.ee/',
  icon = 'https://assets.production.linktr.ee/ef928851e29399340d4af70da9c77a3f60e5afad/icons/tabler-icons/trees.svg',
  linklabel = 'Linkt.ree',
}) => {
  return (
    <section className='link-item'>
      <a className='link' href={link} target='_blank' rel='noreferrer'>
        <div className='icon-alignment'>
          <img className='icon' src={icon} alt={`${linklabel} link`} />
        </div>
        <p data-testid='linklabel'>{linklabel}</p>
        <p className='hide'>hiding</p>
      </a>
    </section>
  );
};

export default LinkItem;
