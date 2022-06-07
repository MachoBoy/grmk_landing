interface Props {
  title: string;
  desc: string;
}

const SectionHeader = ({ title, desc }: Props) => {
  return (
    <div className='flex justify-center items-center flex-col text-center'>
      <h2 className='font-NanumSquare text-5xl'>{title}</h2>
      <p
        className='font-NanumSquare text-[40px] mt-5'
        dangerouslySetInnerHTML={{ __html: desc }}
      ></p>
    </div>
  );
};

export default SectionHeader;
