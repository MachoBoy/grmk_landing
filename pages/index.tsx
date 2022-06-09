import type { NextPage } from 'next';
import Head from 'next/head';
import { ScrollingProvider, Section } from 'react-scroll-section';
import Header from '../components/header/header';
import Home from '../components/home/home';
import Intro from '../components/intro/intro';
import Store from '../components/store/store';
import SectionHeader from '../components/sectionHeader/sectionHeader';
import Menu from '../components/menu/menu';
import Partners from '../components/partners/partners';
import Comments from '../components/comments/comments';
import KitchenImages from '../components/kitchenImages/kitchenImages';
import PlaceImages from '../components/placeImages/placeImages';
import KitchenInsta from '../components/insta/kitchenInsta';
import MiniInsta from '../components/insta/miniInsta';

const Main: NextPage = () => {
  return (
    <div className='w-full min-w-[1920px] overflow-hidden'>
      <Head>
        <title>grmk</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ScrollingProvider>
        <Header />
        <div className='w-full max-w-[1920px] min-h-screen mx-auto'>
          <Section id='HOME' className='min-h-screen'>
            <Home />
          </Section>
          <section id='Intro'>
            <Intro />
            <Store />
          </section>
          <Section id='MINI'>
            <div className='mt-32'>
              <SectionHeader
                title='고래마켓 미니'
                desc='수산시장이 우리 동네에도 있으면 얼마나 좋을까?<br />라는 물음으로 시작하였습니다.<br />가까운 우리동네에서 합리적인 가격으로<br />전문가의 생선회와 초밥을 만나보세요.<br />'
              />
            </div>
            <div className='mt-40'>
              <Menu />
            </div>
            <div className='mt-52'>
              <Partners />
            </div>
            <div className='mt-44'>
              <Comments />
            </div>
            <div className='mt-40'>
              <MiniInsta />
            </div>
          </Section>
          <Section id='KITCHEN'>
            <div className='mt-32'>
              <SectionHeader
                title='고래마켓 키친'
                desc='30년 이상의 경력을 가진 셰프들과 치열하게연구하고<br/>개발하여 직접 유통하는 최고급 원물의 맛과 즐거움.<br/>보다 맛있게, 보다 합리적으로<br/>찾아 주시는 여러분들을 정성 다해 모시겠습니다.'
              />
            </div>
            <div className='mt-40'>
              <KitchenImages />
            </div>
            <div className='mt-40'>
              <KitchenInsta />
            </div>
          </Section>
          <Section id='PLACE' className='mt-40'>
            <SectionHeader
              title='고래마켓 플레이스'
              desc='저울치기 등의 편법이 없는<br/>정직하고 깨끗하며 과학적인<br/>신개념 수산시장을 만들어 가고 있습니다.<br/>정량, 정찰제로 수산물 장보기를 경험해 보세요.'
            />
            <div className='mt-40'>
              <PlaceImages />
            </div>
          </Section>
        </div>
      </ScrollingProvider>
    </div>
  );
};

export default Main;
