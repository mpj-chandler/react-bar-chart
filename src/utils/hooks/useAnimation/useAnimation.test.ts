import { useAnimation } from './useAnimation';
import { useAnimationTimer } from '../useAnimationTimer/useAnimationTimer';
import getEasingFunction from '../../animationUtils/getEasingFunction/getEasingFunction';

jest.mock('../useAnimationTimer/useAnimationTimer');
jest.mock('../../animationUtils/getEasingFunction/getEasingFunction');

describe('useAnimation', () => {
    describe('when called', () => {

        it('it executes its methods correctly', () => {
            useAnimation('linear', 500, 0);

            expect(useAnimationTimer).toHaveBeenCalledWith(500, 0);
            expect(getEasingFunction).toHaveBeenCalledWith('linear');
        });
    });
});
