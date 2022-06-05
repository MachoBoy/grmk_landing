import Image from 'next/image';
import SnsIcon from '../snsIcon/snsIcon';
import { BsEnvelope, BsInstagram } from 'react-icons/bs';
import { useScrollSections } from 'react-scroll-section';

const Header = () => {
  const snsData = [
    {
      name: 'email',
      link: '',
      icon: <BsEnvelope className='w-9 h-9' />,
    },
    {
      name: 'instagram',
      link: '',
      icon: <BsInstagram className='w-9 h-9' />,
    },
  ];
  const sections = useScrollSections();
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <header className='fixed top-0 left-0 w-full h-149 bg-grey-blue bg-opacity-75 flex items-center justify-center select-auto z-50'>
      <nav className='w-full max-w-screen-4xl flex justify-between items-center'>
        <div className='flex justify-between items-center'>
          <ul className='w-fit flex flex-row justify-center items-center'>
            {sections.map(({ id, onClick, selected }, index) => (
              <li
                className={`block w-full p-10 text-3xl text-white`}
                key={index}
              >
                <button onClick={onClick}>{id}</button>
              </li>
            ))}
          </ul>

          <div
            className='relative block w-154 h-81 cursor-pointer ml-28'
            onClick={() => scrollToTop()}
          >
            <Image src='/grmk_logo.png' layout='fill' alt='logo' />
          </div>
        </div>

        <ul className='flex justify-center items-center'>
          {snsData.map(({ name, link, icon }, index) => (
            <SnsIcon key={index} name={name} link={link} icon={icon} />
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
