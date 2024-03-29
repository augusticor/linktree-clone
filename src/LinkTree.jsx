import HeaderInfo from './components/header/HeaderInfo';
import LinksGrid from './components/main/LinksGrid';
import FooterLink from './components/footerlink/FooterLink';

import './link-tree.css';

const LinkTree = () => {
  return (
    <div className='linktree'>
      <HeaderInfo />

      <LinksGrid />

      <FooterLink />
    </div>
  );
};

export default LinkTree;
