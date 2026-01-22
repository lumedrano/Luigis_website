import React from 'react';
import Spline from '@splinetool/react-spline';

const SplineScene = () => {
  return (
    <div className="relative min-h-screen bg-gray-900">
      <div className="absolute top-8 left-0 right-0 z-10 text-center">
        <h1 className="text-4xl font-bold text-white mb-2">Spline 3D Scene</h1>
      </div>
      
      <div className="w-full h-screen">
        <Spline scene="https://prod.spline.design/hjgUY4M4LWqGfbLX/scene.splinecode" />
      </div>
    </div>
  );
};

export default SplineScene;