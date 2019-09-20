import onFrame from './onFrame';
import '../../../../../setupTests';
import loop from '../loop/loop';

jest.useFakeTimers();
jest.mock('../loop/loop');

const mockLoop = jest.fn();
const mockSetTime = jest.fn();

describe('onFrame', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    it('it executes the correct functions when it runs before time has run out', () => {
        onFrame(Date.now(), 1000, mockSetTime)();

        jest.runAllTimers();

        expect(loop).toHaveBeenCalledTimes(1);
        expect(mockSetTime).toHaveBeenCalledTimes(1);
    });

    it('it does not execute the functions after time has run out', () => {
        onFrame(0, 1000, mockSetTime)();

        jest.runAllTimers();

        expect(loop).not.toHaveBeenCalled();
        expect(mockSetTime).not.toHaveBeenCalled();
    });
});
