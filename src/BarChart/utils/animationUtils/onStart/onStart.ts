import React from 'react';

function onStart(
    setTime: React.Dispatch<React.SetStateAction<number>>,
    start: number,
    animationFrame: number,
    duration: number) {

    return setTimeout(() => {
            cancelAnimationFrame(animationFrame);
            setTime(Date.now() - start);
    }, duration);
}

export default onStart;
