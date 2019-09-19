import onStart from './onStart';
import '../../../setupTests.js';

jest.useFakeTimers();

const mockSetTime = jest.fn();

describe('onStart', () => {
    it('it calls the correct timeout', () => {
        onStart(mockSetTime, 0, 0, 0);

        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 0);

        jest.runOnlyPendingTimers();

        expect(mockSetTime).toHaveBeenCalledTimes(1);
        expect(cancelAnimationFrame).toHaveBeenCalledTimes(1);
    });
});
