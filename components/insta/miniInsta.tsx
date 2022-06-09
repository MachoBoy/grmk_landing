import useMini from '../../hook/mini/mini';

interface Mini {
  id: string;
  caption: string;
  media_url: string;
  permalink: string;
}

const MiniInsta = () => {
  const { mini, isLoading, isError } = useMini();
  if (isLoading) return <div>loading</div>;
  if (isError) return <div>error</div>;
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <h2 className='font-NanumSquare text-5xl uppercase'>Instagram</h2>
      <ul className='mt-5 grid grid-cols-3 gap-x-7 gap-y-4 w-full max-w-[1080px]'>
        {mini.data.map(({ id, caption, media_url, permalink }: Mini) => (
          <li key={id} className='relative w-340 h-340'>
            <a
              className='block w-full h-full bg-cover'
              style={{ backgroundImage: `url(${media_url})` }}
              href={permalink}
              target='_blank'
              rel='noreferrer'
            ></a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MiniInsta;
