import React from 'react';

interface Props {
  name: string;
  link: string;
  icon: JSX.Element;
}

const SnsIcon = ({ name, link, icon }: Props) => {
  return (
    <li className='bg-white rounded-full w-14 h-14 mx-4 flex justify-center items-center'>
      <a className='flex justify-center items-center text-grey-blue'>{icon}</a>
    </li>
  );
};

export default SnsIcon;
