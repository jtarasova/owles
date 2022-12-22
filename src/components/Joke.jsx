import React, { useEffect } from 'react';

export default function Joke({ joke }) {
  useEffect(() => {
    const interval = setInterval(() => { console.log('Interval'); }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="color">{joke}</div>
  );
}
