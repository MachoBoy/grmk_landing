import Image from 'next/image';
import Slider from 'react-slick';

const Home = () => {
  const settings = {
    arrows: false,
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
  };
  return (
    <div className='relative w-full h-[1080px]'>
      <div className='absolute w-[380px] h-[200px] top-[370px] inset-0 mx-auto z-50'>
        <Image src='/grmk_logo.png' layout='fill' alt='logo' />
      </div>
      <Slider {...settings}>
        <div className='relative w-full h-[1080px] bg-main-slide-1 bg-cover bg-no-repeat bg-center flex justify-center items-center'>
          <div className='flex flex-col text-center absolute bottom-[314px] inset-x-0 m-auto text-white font-NanumSquare text-[40px] h-[180px]'>
            <h4>더 신선하게,</h4>
            <h4>더 안전하게,</h4>
            <h4>더 투명하게</h4>
          </div>
        </div>
        <div className='w-full h-[1080px] bg-main-slide-2 bg-cover bg-no-repeat bg-center '>
          <div className='flex flex-col  text-center absolute bottom-[314px] inset-x-0 m-auto text-white font-NanumSquare text-[40px] h-[180px]'>
            <h4>신선하고 정직한 유통을 연구합니다.</h4>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Home;
