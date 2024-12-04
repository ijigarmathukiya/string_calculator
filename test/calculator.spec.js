const { Add } = require('../calculator');

describe('String Calculator', () => {
  it('should return 0 for an empty string', async () => {
    const chai = await import('chai');
    const { expect } = chai;
    expect(Add('')).to.equal(0);
  });

  it('should return the number itself for a single number', async () => {
    const chai = await import('chai');
    const { expect } = chai;
    expect(Add('1')).to.equal(1);
  });

  it('should return the sum for two numbers separated by a comma', async () => {
    const chai = await import('chai');
    const { expect } = chai;
    expect(Add('1,5')).to.equal(6);
  });

  it('should return the sum for multiple numbers', async () => {
    const chai = await import('chai');
    const { expect } = chai;
    expect(Add('1,2,3,4')).to.equal(10);
  });

  it('should handle newlines as delimiters', async () => {
    const chai = await import('chai');
    const { expect } = chai;
    expect(Add('1\n2,3')).to.equal(6);
  });

  it('should support custom delimiter at the beginning', async () => {
    const chai = await import('chai');
    const { expect } = chai;
    expect(Add('//;\n1;2')).to.equal(3);
  });

  it('should throw an error for negative numbers', async () => {
    const chai = await import('chai');
    const { expect } = chai;
    expect(() => Add('1,-2')).to.throw('negatives not allowed: -2');
    expect(() => Add('1,-2,-3')).to.throw('negatives not allowed: -2, -3');
  });
});