import React, { Suspense } from 'react';

// Lazy load the heavy Three.js component
const NeuralNetwork = React.lazy(() => import('./NeuralNetwork').then(module => ({ default: module.NeuralNetwork })));

const LoadingFallback: React.FC = () => (
  <div className="absolute inset-0 -z-10 bg-gradient-radial from-champagne/5 to-transparent" />
);

export const NeuralNetworkLazy: React.FC = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <NeuralNetwork />
    </Suspense>
  );
};