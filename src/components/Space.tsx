import React from 'react';

interface SpaceProps {
  width?: number;
  height?: number;
}

export const Space: React.FC<SpaceProps> = ({ width, height }) => {
  const style: React.CSSProperties = {
    width: width ? `${width}px` : undefined,
    height: height ? `${height}px` : undefined,
  };

  return <div style={style}></div>;
};
