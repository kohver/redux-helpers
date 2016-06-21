import expect from 'expect';
import mapOrReturn from '../src/mapOrReturn';

describe('mapOrReturn', () => {
    it('переданный массив строго равен результату, если ни один элемент массива не изменился', () => {
        const array = [1, 2, 3];
        const newArray = mapOrReturn(array, item => item);

        expect(array).toBe(newArray);
    });

    it('возвращает новый массив, если хоть один из элеменов поменялся и не изменяет переданный', () => {
        const array = [1, 2, 3];
        const newArray = mapOrReturn(array, item => item * 2);

        expect(array).toNotBe(newArray);
        expect(array).toEqual([1, 2, 3]);
    });

    it('правильно маппит массив', () => {
        const array = mapOrReturn([1, 2, 3], item => item * 2);

        expect(array).toEqual([2, 4, 6]);
    });
});
