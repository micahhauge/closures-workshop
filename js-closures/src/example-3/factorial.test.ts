import { memoizedFactorial } from './factorial';

describe('memoizedFactorial', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  it('computes 0! = 1', () => {
    const f = memoizedFactorial();

    expect(f(0)).toEqual(1);
  });

  it('computes 1! = 1', () => {
    const f = memoizedFactorial();

    expect(f(1)).toEqual(1);
  });

  it('computes 2! = 2', () => {
    const f = memoizedFactorial();

    expect(f(2)).toEqual(2);
  });

  it('computes 3! = 6', () => {
    const f = memoizedFactorial();

    expect(f(3)).toEqual(6);
  });

  it('computes 4! = 24', () => {
    const f = memoizedFactorial();

    expect(f(4)).toEqual(24);
  });

  it('memoizes', () => {
    const f = memoizedFactorial();

    f(3);
    expect(console.log).toHaveBeenCalledWith('Cache miss: 3');
    expect(console.log).toHaveBeenCalledWith('Cache miss: 2');
    expect(console.log).toHaveBeenCalledWith('Cache miss: 1');

    f(5);
    expect(console.log).toHaveBeenCalledWith('Cache miss: 5');
    expect(console.log).toHaveBeenCalledWith('Cache miss: 4');
    expect(console.log).toHaveBeenCalledWith('Cache hit: 3');

    f(8);
    expect(console.log).toHaveBeenCalledWith('Cache miss: 8');
    expect(console.log).toHaveBeenCalledWith('Cache miss: 7');
    expect(console.log).toHaveBeenCalledWith('Cache miss: 6');
    expect(console.log).toHaveBeenCalledWith('Cache hit: 5');
  });
});
