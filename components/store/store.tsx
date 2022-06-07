import Image from 'next/image';

const Store = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='w-[640px] h-[1080px] bg-grmk-mini bg-center transition-all hover:w-full'></div>
      <div className='w-[640px] h-[1080px] bg-grmk-kitchen bg-center transition-all hover:w-full'></div>
      <div className='w-[640px] h-[1080px] bg-grmk-place bg-center transition-all hover:w-full'></div>
    </div>
  );
};

export default Store;
