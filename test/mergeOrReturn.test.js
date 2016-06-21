import expect from 'expect';
import mergeOrReturn from '../src/mergeOrReturn';

describe('mergeOrReturn', () => {
    it('переданный объект строго равен результату, если ни один ключ не изменился', () => {
        const obj = {a: 'a', b: 'b'};
        const newObj = mergeOrReturn(obj, {a: 'a'});

        expect(obj).toBe(newObj);
    });

    it('возвращает новый объект, если хоть один ключ изменился и не изменяет переданный', () => {
        const obj = {a: 'a', b: 'b'};
        const newObj = mergeOrReturn(obj, {a: 'a2'});

        expect(obj).toNotBe(newObj);
        expect(obj).toEqual({a: 'a', b: 'b'});
    });

    it('правильно мержит объекты', () => {
        const obj = mergeOrReturn({
            a: 'a',
            b: 'b',
        }, {
            a: 'a2',
            c: undefined,
        });

        expect(obj).toEqual({
            a: 'a2',
            b: 'b',
            c: undefined,
        });
    });
});
