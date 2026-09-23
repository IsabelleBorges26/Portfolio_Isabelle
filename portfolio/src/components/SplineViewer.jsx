import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineViewer({ url }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {url ? (
        <>
          {isLoading && (
            <div style={{ 
              position: 'absolute', 
              inset: 0, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'var(--neon-lime)' 
            }}>
              Carregando 3D...
            </div>
          )}
          <Spline scene={url} onLoad={handleLoad} />
        </>
      ) : (
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img 
            src="/image.png" 
            alt="Hero Visual" 
            style={{ 
              width: '120%', 
              height: '130%', 
              objectFit: 'contain',
              transform: 'scale(1.15)',
              filter: 'drop-shadow(0px 20px 40px rgba(0,0,0,0.5))',
              imageRendering: 'high-quality',
              animation: 'float 6s ease-in-out infinite'
            }} 
          />
          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(2deg); }
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
