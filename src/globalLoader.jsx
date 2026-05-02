import React from 'react';

const GlobalLoader = () => {
    return (
         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="flex flex-col items-center gap-3">
        
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        
        {/* Text */}
        <p className="text-white text-sm font-medium">Loading...</p>

      </div>
    </div>
    );
};

export default GlobalLoader;