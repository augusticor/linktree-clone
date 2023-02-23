import LinkItem from './LinkItem';
import { linksInfo } from '../../data/links-data';
import './link-item.css';

const LinksGrid = () => {
  return (
    <main className='links-grid'>
      {linksInfo.map(({ id, link, icon, label }) => (
        <LinkItem key={id} link={link} icon={icon} linklabel={label} />
      ))}

      <div className='social-item' data-testid='emailtosvg'>
        <a
          target='_blank'
          href='mailto:rojascruzoscar@gmail.com'
          rel='noreferrer'
          aria-label='@augusticor email address'
        >
          <svg className='svg' enableBackground='new 0 0 24 24' viewBox='0 0 24 24'>
            <path d='M18.821,20.5H5.179A3.683,3.683,0,0,1,1.5,16.821V7.179A3.683,3.683,0,0,1,5.179,3.5H18.821A3.683,3.683,0,0,1,22.5,7.179v9.642A3.683,3.683,0,0,1,18.821,20.5ZM5.179,4.5A2.682,2.682,0,0,0,2.5,7.179v9.642A2.682,2.682,0,0,0,5.179,19.5H18.821A2.682,2.682,0,0,0,21.5,16.821V7.179A2.682,2.682,0,0,0,18.821,4.5Z'></path>
            <path d='M12,14.209a.5.5,0,0,1-.346-.138L4.286,7.028a.5.5,0,0,1,.691-.723L12,13.018l7.023-6.713a.5.5,0,1,1,.691.723l-7.368,7.043A.5.5,0,0,1,12,14.209Z'></path>
            <path d='M4.7,17.833a.5.5,0,0,1-.347-.86l5.54-5.31a.5.5,0,0,1,.692.722L5.048,17.694A.5.5,0,0,1,4.7,17.833Z'></path>
            <path d='M19.3,17.832a.5.5,0,0,1-.346-.139l-5.538-5.308a.5.5,0,0,1,.692-.722l5.538,5.308a.5.5,0,0,1-.346.861Z'></path>
          </svg>
        </a>
      </div>
    </main>
  );
};

export default LinksGrid;
