import { useEffect, useRef } from 'react';
import './header-styles.css';

const HeaderInfo = () => {
  const firstScroll = useRef(false);
  const iconsHeader = useRef();

  const applyClasses = () => {
    iconsHeader.current.classList.add('icons-header-scroll');
  };

  const removeClasses = () => {
    iconsHeader.current.classList.remove('icons-header-scroll');
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        firstScroll.current = false;
        removeClasses();
      }

      if (window.scrollY > 50) {
        if (!firstScroll.current) {
          firstScroll.current = true;
          applyClasses();
        }
      }
    });

    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <header className='info'>
      <div className='icons-header' ref={iconsHeader}>
        <button className='btn-share'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={20}
            height={20}
            viewBox='0 0 24 24'
            strokeWidth={1.0}
            stroke='#0a0b0d'
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

        <img
          className='tinyimage'
          src='https://d1fdloi71mui9q.cloudfront.net/7TrNrWjiTk6X2Y3iJnXE_QlLnDOA3CHLK0c8j'
          alt='User profile photography'
          role='presentation'
        />

        <button className='btn-follow'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            strokeWidth='1'
            stroke='#000000'
            fill='#000000'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6' />
            <path d='M9 17v1a3 3 0 0 0 6 0v-1' />
          </svg>

          <p>Subscribe</p>
        </button>
      </div>

      <img
        className='image'
        src='https://d1fdloi71mui9q.cloudfront.net/7TrNrWjiTk6X2Y3iJnXE_QlLnDOA3CHLK0c8j'
        alt='User profile photography'
      />
      <h1 className='username'>@augusticor</h1>
      <h2 className='bio'>FullStack Software Engineer</h2>
    </header>
  );
};

export default HeaderInfo;
