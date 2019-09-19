import { useEffect, useState } from 'react';
import { setupAnimation } from '../../animationUtils/setupAnimation/setupAnimation';

export function useAnimationTimer(duration: number, delay: number) {

    const [elapsed, setTime] = useState(0);

    useEffect(() => {
        setupAnimation(setTime, duration, delay);
    },
    [duration, delay],
    );

    return  elapsed;
}
