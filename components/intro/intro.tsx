import Image from 'next/image';

const Intro = () => {
  return (
    <div className='grid grid-cols-3 justify-self-center content-center'>
      <div className='relative h-[640px]'>
        <Image src='/intro/intro1.jpg' layout='fill' alt='intro-image' />
      </div>
      <div className='relative h-[640px]'>
        <Image src='/intro/intro2.jpg' layout='fill' alt='intro-image' />
      </div>
      <div className='relative h-[640px]'>
        <Image src='/intro/intro3.jpg' layout='fill' alt='intro-image' />
      </div>
      <div className='relative h-[640px]'>
        <Image src='/intro/intro4.jpg' layout='fill' alt='intro-image' />
      </div>
      <div className='relative h-[640px]'>
        <Image src='/intro/intro5.jpg' layout='fill' alt='intro-image' />
      </div>
      <div className='relative h-[640px]'>
        <Image src='/intro/intro6.jpg' layout='fill' alt='intro-image' />
      </div>
    </div>
  );
};

export default Intro;
