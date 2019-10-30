import '../../../../setupTests.js';
import loop from './loop';

describe('the loop function', () => {
    it('it correctly passes the callback function on to requestAnimationFrame', () => {
        const mockCallback = jest.fn();
        loop(mockCallback);
        expect(requestAnimationFrame).toHaveBeenCalledWith(mockCallback);
    })
})