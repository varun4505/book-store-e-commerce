import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-amber-50">
      {/* Book loading animation */}
      <div className="relative w-24 h-24 mb-8">
        {/* Left page */}
        <div className="absolute inset-0 origin-right animate-page-flip bg-white border-amber-800 border-2 rounded-l-md shadow-md flex items-center justify-center">
          <div className="w-1/3 h-2/3 bg-amber-100 rounded-sm mx-1"></div>
        </div>
        
        {/* Right page */}
        <div className="absolute inset-0 origin-left animate-page-flip-delay bg-white border-amber-800 border-2 rounded-r-md shadow-md flex items-center justify-center">
          <div className="w-1/3 h-2/3 bg-amber-100 rounded-sm mx-1"></div>
        </div>
        
        {/* Book spine */}
        <div className="absolute left-1/2 top-0 bottom-0 w-2 -ml-1 bg-amber-800 rounded-sm"></div>
      </div>
      
      <h2 className="text-xl font-semibold text-amber-800">BookHaven</h2>
      <p className="text-amber-700 mt-2">Opening your literary journey...</p>
      
      {/* Animation keyframes */}
      <style>{`
        @keyframes page-flip {
          0%, 100% { transform: rotateY(0deg); }
          50% { transform: rotateY(-180deg); }
        }
        
        @keyframes page-flip-delay {
          0%, 100% { transform: rotateY(0deg); }
          50% { transform: rotateY(180deg); }
        }
        
        .animate-page-flip {
          animation: page-flip 3s ease-in-out infinite;
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }
        
        .animate-page-flip-delay {
          animation: page-flip-delay 3s ease-in-out infinite;
          animation-delay: 0.3s;
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default Loading;