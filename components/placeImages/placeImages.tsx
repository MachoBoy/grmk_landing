import Image from 'next/image';

const PlaceImages = () => {
  return (
    <div className='w-full max-w-[1080px] mx-auto flex flex-col'>
      <h2 className='font-NanumSquare text-5xl uppercase text-center'>Place</h2>
      <div className='mt-5 grid grid-cols-7 justify-self-center content-center gap-x-6 gap-y-[10px]'>
        <div className='relative w-full h-[1060px] col-span-3 row-span-2'>
          <Image src='/place/place1.jpg' layout='fill' alt='place-image' />
        </div>
        <div className='relative w-full h-[560px] col-span-4'>
          <Image src='/place/place2.jpg' layout='fill' alt='place-image' />
        </div>
        <div className='relative w-full h-[490px] col-span-4'>
          <Image src='/place/place3.jpg' layout='fill' alt='place-image' />
        </div>
      </div>
      <div className='mt-5 grid grid-cols-2 justify-self-center content-center gap-x-7 gap-y-[19px]'>
        <div className='relative w-full h-[455px] col-span-2'>
          <Image src='/place/place4.jpg' layout='fill' alt='place-image' />
        </div>
        <div className='relative w-full h-[585px] col-span-1'>
          <Image src='/place/place5.jpg' layout='fill' alt='place-image' />
        </div>
        <div className='relative w-full h-[585px] col-span-1'>
          <Image src='/place/place6.jpg' layout='fill' alt='place-image' />
        </div>
        <div className='relative w-full h-[660px] col-span-2'>
          <Image src='/place/place7.jpg' layout='fill' alt='place-image' />
        </div>
      </div>
    </div>
  );
};

export default PlaceImages;
