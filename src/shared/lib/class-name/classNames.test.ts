import { classNames } from './classNames';

describe('className', () => {
    test('test', () => {
        expect(classNames('someClass', { hov: true }, ['class'])).toBe(
            'someClass class hov',
        );
    });
});
