import './footer-styles.css';

const FooterLink = () => {
  return (
    <footer className='footer'>
      <a href='https://linktr.ee/?utm_source=linktree&utm_medium=profile&utm_campaign=footer_logo_cta&utm_content=augusticor'>
        <button className='btn-join'>Join augusticor on Linktree</button>
      </a>

      <button className='cookies'>Cookie Preferences</button>
      <a
        className='lastupdated'
        href='https://github.com/augusticor/linktree-clone'
        target='_blank'
        rel='noopener noreferrer'
      >
        Last updated: October 2024
      </a>
    </footer>
  );
};

export default FooterLink;
