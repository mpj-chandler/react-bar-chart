import React from 'react';
import onStart from '../onStart/onStart';
import loop from '../loop/loop';
import onFrame from '../onFrame/onFrame';

export function setupAnimation(setTime: React.Dispatch<React.SetStateAction<number>>, duration: number, delay: number) {
    let animationFrame: number;
    const start: number = Date.now();

    animationFrame = loop(onFrame(start, duration, setTime));

    const timerStop = onStart(setTime, start, animationFrame, duration);
    const timerDelay = setTimeout(() => onStart(setTime, start, animationFrame, duration), delay);

    return () => {
        clearTimeout(timerStop);
        clearTimeout(timerDelay);
        cancelAnimationFrame(animationFrame);
    };
}


