import Image from 'next/image';

const KitchenImages = () => {
  return (
    <div className='w-full max-w-[1080px] mx-auto flex flex-col'>
      <h2 className='font-NanumSquare text-5xl uppercase text-center'>
        KITCHEN
      </h2>
      <div className='mt-5 grid grid-cols-7 justify-self-center content-center gap-5'>
        <div className='relative w-full h-[558px] col-span-7'>
          <Image
            src='/kitchen/kitchen1.jpg'
            layout='fill'
            alt='kitchen-image'
          />
        </div>
        <div className='relative w-full h-[488px] col-span-3 row-span-2'>
          <Image
            src='/kitchen/kitchen2.jpg'
            layout='fill'
            alt='kitchen-image'
          />
        </div>
        <div className='relative w-full h-[236px] col-span-2'>
          <Image
            src='/kitchen/kitchen3.jpg'
            layout='fill'
            alt='kitchen-image'
          />
        </div>
        <div className='relative w-full h-[488px] col-span-2 row-span-2'>
          <Image
            src='/kitchen/kitchen5.jpg'
            layout='fill'
            alt='kitchen-image'
          />
        </div>
        <div className='relative w-full h-[228px] col-span-2'>
          <Image
            src='/kitchen/kitchen4.jpg'
            layout='fill'
            alt='kitchen-image'
          />
        </div>
      </div>
      <div className='mt-5 grid grid-cols-4 justify-self-center content-center gap-5'>
        <div className='relative w-full h-[777px] col-span-4'>
          <Image
            src='/kitchen/kitchen6.jpg'
            layout='fill'
            alt='kitchen-image'
          />
        </div>
        <div className='relative w-full h-[587px] col-span-2'>
          <Image
            src='/kitchen/kitchen7.jpg'
            layout='fill'
            alt='kitchen-image'
          />
        </div>
        <div className='relative w-full h-[587px] col-span-2'>
          <Image
            src='/kitchen/kitchen8.jpg'
            layout='fill'
            alt='kitchen-image'
          />
        </div>
      </div>
    </div>
  );
};

export default KitchenImages;
