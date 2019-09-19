import loop from '../loop/loop';

function onFrame(start: number, duration: number, setTime: React.Dispatch<React.SetStateAction<number>>): () => void {
    return () => {
        if (Date.now() - start <= duration) {
            setTime(Date.now() - start);
            loop(onFrame(start, duration, setTime));
        }
    };
}

export default onFrame;
