import React from 'react';
import TestRenderer from 'react-test-renderer';
import { useAnimationTimer } from './useAnimationTimer';

import { setupAnimation } from '../../animationUtils/setupAnimation/setupAnimation';

jest.mock('../../animationUtils/setupAnimation/setupAnimation');

const MockUseAnimationExecutor: (props: {useAnimationTimer: (duration: number, delay: number) => number, duration: number, delay: number}) => JSX.Element = (props) => {
    const elapsed = props.useAnimationTimer(props.duration, props.delay);
    return <div>{elapsed}</div>;
}

const mockComponentFactory = (duration: number, delay: number) => {
    return TestRenderer.create(<MockUseAnimationExecutor useAnimationTimer={useAnimationTimer} duration={duration} delay={delay}/>);
};

describe('the useAnimationTimer hook', () => {
    afterEach(jest.resetAllMocks);

    [0, 500, 1000].forEach((duration: number) => {
        it(`it renders consistently with duration: ${duration}`, () => {
            const mockComponent = mockComponentFactory(duration, 0);
            expect(mockComponent).toMatchSnapshot();
        });
    });

    [0, 500, 1000].forEach((delay: number) => {
        it(`it renders consistently with delay: ${delay}`, () => {
            const mockComponent = mockComponentFactory(1000, delay);
            expect(mockComponent).toMatchSnapshot();
        });
    });
    
    it('it responds to changes in the duration prop', () => {
        const mockComponent = mockComponentFactory(0, 0);

        expect(setupAnimation).toHaveBeenCalledTimes(1);
        expect(setupAnimation).toHaveBeenCalledWith(expect.any(Function), 1000, 1000);

        mockComponent.update(<MockUseAnimationExecutor useAnimationTimer={useAnimationTimer} duration={1000} delay={0}/>);

        expect(setupAnimation).toHaveBeenCalledTimes(2);
        expect(setupAnimation).toHaveBeenCalledWith(expect.any(Function), 0, 0);
    })

});