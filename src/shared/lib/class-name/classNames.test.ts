import { classNames } from 'shared/lib/class-name/classNames';

describe('className', () => {
    test('test', () => {
        expect(classNames('someClass', { hov: true }, ['class'])).toBe(
            'someClass class hov',
        );
    });
});
