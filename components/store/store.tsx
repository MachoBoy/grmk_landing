import StoreDetail from './storeDetail';

const Store = () => {
  return (
    <div className='w-full flex flex-row h-[1080px]'>
      <div className='cursor-pointer flex-1 h-full bg-grmk-mini bg-center transition-[flex] duration-500 ease-in-out hover:flex-[23_23_0%] px-[110px] py-[205px]'>
        {/* <div className='cursor-pointer flex flex-1 h-full bg-grmk-mini bg-center px-[110px] py-[205px]'> */}
        <div>
          <StoreDetail
            title='MINI'
            desc='맛있는 회와 초밥이<br/> 함께하는<br/> 신개념 수산물<br/> 배달전문매장<br/> 미니'
            text='수산시장이 우리 동네에도 있으면 얼마나 좋을까?<br/>라는 물음으로 시작하였습니다.<br/><br/>멀리 수산시장을 찾아가지 않아도<br/>가까운 우리 동네에서 합리적인 가격으로<br/>전문가의 생선회와 초밥을 집에서 직접 드셔보세요.'
          />
        </div>
      </div>
      <div className='cursor-pointer flex-1 h-full bg-grmk-kitchen bg-center transition-[flex] duration-500 ease-in-out hover:flex-[23_23_0%] px-[110px] py-[205px]'>
        <div>
          <StoreDetail
            title='KITCHEN'
            desc='합리적인 가격에<br/> 고퀄리티 오마카세<br/> 최고의 맛과<br/> 경험을 드리는<br/> 키친'
            text='수산물의 다양함과 화려함은 무궁무진한 맛과 경험을 제공합니다.<br/>30년 이상의 경력을 가진 셰프들과 치열하게 연구하고 개발하여<br/>직접 유통하는 최고급 원물의 맛과 즐거움을 고객님들께<br/>선물하고 싶습니다.<br/><br/><br/>보다 맛있게, 보다 합리적으로<br/>찾아주시는 여러분들을 정성을 다해 모시겠습니다. '
          />
        </div>
      </div>
      <div className='cursor-pointer flex-1 h-full bg-grmk-place bg-center transition-[flex] duration-500 ease-in-out hover:flex-[23_23_0%] px-[110px] py-[205px]'>
        <div>
          <StoreDetail
            title='PLACE'
            desc='신선한 수산물을<br/> 합리적이고<br/> 양심적인 가격으로<br/> 만나보는<br/> 플레이스'
            text='대한민국에 하나뿐인 수산시장을 만들기 위해<br/>전국의 수산시장을 모두 방문하고 내방 고객들과 시장 상인분들을<br/>직접 인터뷰하였습니다.저울치기 등의 편법이 없고, 비린내가 거의 나지 않는<br/>정직하고 깨끗하고 과학적인 신개념 수산시장을 만들어 가고 있습니다.<br/>국내 유일의 직영형 수산시장에서 정량, 정찰제로<br/>수산물 장보기를 경험해 보세요.<br/>수산시장 또한 변화해야 합니다.'
          />
        </div>
      </div>
    </div>
  );
};
export default Store;
