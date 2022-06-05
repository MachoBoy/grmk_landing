import Image from 'next/image';

const partnersData = ['baemin_logo', 'yogio_logo', 'coupang_logo'];
const Partners = () => {
  return (
    <div className='w-full flex-col flex justify-center items-center'>
      <h2 className='font-NanumSquare text-5xl uppercase'>Partners brand</h2>
      <div className='mt-[73px] grid grid-cols-3 gap-x-24 w-full max-w-[1080px]'>
        {partnersData.map((partner, index) => (
          <div key={index} className='relative w-284 h-284'>
            <Image src={`/mini/${partner}.png`} layout='fill' alt='menu' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
