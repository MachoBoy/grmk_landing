import { IoStarSharp } from 'react-icons/io5';

const commentsData = [
  {
    text: '2~3일 연속으로 시켜먹고있습니다...<br/>멈출 수가 없어요...<br/>광어는 실하고 도미는 쫄깃하고 참치는 녹습니다...<br/>오늘도 잘 먹었습니다. ',
    stars: 5,
  },
  {
    text: '와...여기 진짜 최고에요... 구성 알찬데 그 구성이 구색맞추기가 아니라 정말 맛있는 것들로 이루어져서 정말 만족스럽고 살짝 아부리된 세 점 먹어보니 여기 아부리 덮밥도 다음번에 꼭 시켜먹어보려구요! 아 생선에 다른 손상없이 불맛은 최대로 된 아부리를 이 가격에 ... ㅠㅠㅠㅠㅠ 진짜 정말 꼭 재주문 하겠습니다. ',
    stars: 5,
  },
  {
    text: '너무 훌륭합니다. 이 가격에 이리 먹을 수 있다니 감동이에요.<br/> 예전 어디선가 먹었던 숭어가 흙냄새가 나서 너무 먹기 힘들었는데<br/> 여기 숭어는 꼬들한게 냄새없고 맛있었어요. ',
    stars: 5,
  },
];

const Comments = () => {
  const renderStar = (number: number) => {
    let rows = [];
    for (let i = 0; i < number; i++) {
      rows.push(
        <IoStarSharp key={i} className='w-16 h-16 mx-2 text-yellow-400' />
      );
    }
    return rows;
  };
  return (
    <div className='w-full max-w-[1080px] flex flex-col justify-center items-center mx-auto'>
      {commentsData.map(({ text, stars }, index) => (
        <div
          key={index}
          className='mb-[67px] w-full h-[391px] border-2 border-solid border-[#07002] rounded-3xl flex flex-col justify-center items-center text-center font-NanumSquare text-3xl'
        >
          <p
            className='w-full max-w-4xl mb-8'
            dangerouslySetInnerHTML={{ __html: text }}
          ></p>
          <div className='flex justify-center items-center'>
            {renderStar(stars)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
