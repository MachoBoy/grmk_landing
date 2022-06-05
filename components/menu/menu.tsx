import Image from 'next/image';

const menuData = [
  'menu1',
  'menu2',
  'menu3',
  'menu4',
  'menu5',
  'menu6',
  'menu7',
  'menu8',
  'menu9',
];

const Menu = () => (
  <div className='w-full flex-col flex justify-center items-center'>
    <h2 className='font-NanumSquare text-5xl uppercase'>MENU</h2>
    <div className='mt-5 grid grid-cols-3 gap-x-7 gap-y-4 w-full max-w-[1080px]'>
      {menuData.map((menu, index) => (
        <div key={index} className='relative w-340 h-340'>
          <Image src={`/mini/${menu}.jpg`} layout='fill' alt='menu' />
        </div>
      ))}
    </div>
  </div>
);

export default Menu;
