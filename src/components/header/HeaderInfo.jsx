import { useEffect, useRef } from 'react';
import './header-styles.css';

const HeaderInfo = () => {
  const firstScroll = useRef(false);
  const iconsHeader = useRef();

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY === 0) {
        firstScroll.current = false;
        iconsHeader.current.classList.remove('icons-header-scroll');
      }

      if (window.scrollY > 120 && !firstScroll.current) {
        firstScroll.current = true;
        iconsHeader.current.classList.add('icons-header-scroll');
      }
    };

    window.addEventListener('scroll', onPageScroll);

    return () => {
      window.removeEventListener('scroll', onPageScroll);
    };
  }, []);

  return (
    <header className='info'>
      <div className='icons-header' ref={iconsHeader}>
        <button className='btn-share'>
          <svg
            width='20'
            height='20'
            className='w-5 h-5'
            viewBox='0 0 16 19'
            fill='none'
          >
            <path
              d='M6.36667 15.3667V15.9C6.36667 16.7837 7.08301 17.5 7.96667 17.5C8.85032 17.5 9.56667 16.7837 9.56667 15.9V15.3667M2.1 13.7667C2.1 14.6503 1.38366 15.3667 0.5 15.3667H15.4333C14.5497 15.3667 13.8333 14.6503 13.8333 13.7667V9.5C13.8333 6.25993 12.8067 3.63333 9.56667 3.63333V3.1C9.56667 2.21634 8.85032 1.5 7.96667 1.5C7.08301 1.5 6.36667 2.21634 6.36667 3.1V3.63333C3.1266 3.63333 2.1 6.25993 2.1 9.5L2.1 13.7667Z'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinejoin='bevel'
            ></path>
          </svg>
        </button>

        <button className='btn-follow'>
          <svg width='16' height='16' viewBox='0 0 16 16'>
            <path
              fill='white'
              stroke='white'
              d='M12.6661 7.33348C12.2979 7.33348 11.9994 7.63195 11.9994 8.00014C11.9994 8.36833 12.2979 8.66681 12.6661 8.66681C13.0343 8.66681 13.3328 8.36833 13.3328 8.00014C13.3328 7.63195 13.0343 7.33348 12.6661 7.33348Z'
            ></path>
            <path
              fill='white'
              stroke='white'
              d='M8.00057 7.33348C7.63238 7.33348 7.3339 7.63195 7.3339 8.00014C7.3339 8.36833 7.63238 8.66681 8.00057 8.66681C8.36876 8.66681 8.66724 8.36833 8.66724 8.00014C8.66724 7.63195 8.36876 7.33348 8.00057 7.33348Z'
            ></path>
            <path
              fill='white'
              stroke='white'
              d='M3.33333 7.33348C2.96514 7.33348 2.66667 7.63195 2.66667 8.00014C2.66667 8.36833 2.96514 8.66681 3.33333 8.66681C3.70152 8.66681 4 8.36833 4 8.00014C4 7.63195 3.70152 7.33348 3.33333 7.33348Z'
            ></path>
          </svg>
        </button>
      </div>

      <img
        className='image'
        src='https://ugc.production.linktr.ee/0c8419f4-7675-4b8c-9559-763f0ee61307_q6yLzcez3aeKAMygKya8W8.jpeg?io=true&size=avatar-v3_0'
        alt='User profile photography'
      />
      <h1 className='username'>@augusticor</h1>
      <h2 className='bio'>FullStack Software Engineer</h2>
    </header>
  );
};

export default HeaderInfo;
