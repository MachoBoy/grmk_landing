import Image from 'next/image';

const Home = () => (
  <div className='bg-main-slide-1 bg-cover bg-no-repeat bg-center w-full h-screen flex justify-center items-center'>
    <div className='flex flex-col justify-center items-center'>
      <div className='relative block w-154 h-81'>
        <Image src='/grmk_logo.png' layout='fill' alt='logo' />
      </div>
      <div className='flex flex-col text-white'>
        <span>더 신선하게,</span>
        <span>더 안전하게,</span>
        <span>더 투명하게</span>
      </div>
    </div>
  </div>
);

export default Home;
