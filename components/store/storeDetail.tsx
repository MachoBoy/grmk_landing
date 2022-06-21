interface StoreData {
  title: string;
  desc: string;
  text: string;
}

const StoreDetail = ({ title, desc, text }: StoreData) => {
  return (
    <div className='store_detail_container w-full h-full border-solid border-[1px] border-white box-border flex justify-center items-center px-12 py-20'>
      <div className='store_detail_left w-full h-full flex flex-col items-start justify-start box-border'>
        <h3 className='font-NanumSquare text-[50px] text-white'>고래마켓</h3>
        <h3 className='font-NanumSquare text-[50px] text-white leading-6'>
          {title}
        </h3>
        <span className='w-full max-w-[330px] h-[10px] bg-white block mt-12 mb-4'></span>
        <p
          className='font-NanumSquare text-[40px] text-white'
          dangerouslySetInnerHTML={{ __html: desc }}
        ></p>
      </div>
      <div className='store_detail_right'>
        <span className='divider w-1 h-full bg-white hidden'></span>
        <div className='hidden'>
          <p dangerouslySetInnerHTML={{ __html: text }}></p>
        </div>
      </div>
    </div>
  );
};

export default StoreDetail;
