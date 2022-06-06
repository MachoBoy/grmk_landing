import type { NextPage } from 'next';
import Head from 'next/head';
import { ScrollingProvider, Section } from 'react-scroll-section';
import Header from '../components/header/header';
import Home from '../components/home/home';
import Mini from '../components/mini/mini';
import Menu from '../components/menu/menu';
import Partners from '../components/partners/partners';
import Comments from '../components/comments/comments';

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
        <div className='w-full max-w-screen-5xl min-h-screen mx-auto'>
          <Section id='HOME' className='min-h-screen'>
            <Home />
          </Section>
          <Section id='MINI'>
            <div className='mt-32'>
              <Mini />
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
          </Section>
          <Section id='KITCHEN'>
            <div>kitchen</div>
          </Section>
          <Section id='PLACE'>
            <div>place</div>
          </Section>
        </div>
      </ScrollingProvider>
    </div>
  );
};

export default Main;
