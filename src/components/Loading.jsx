import React from 'react';
import { BsBook } from 'react-icons/bs';

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-light transition-colors duration-200">
      <BsBook className="text-primary text-5xl mb-4 animate-pulse" />
      <div className="text-2xl font-heading text-secondary mb-4">BookHaven</div>
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-primary border-solid"></div>
    </div>
  );
};

export default Loading;