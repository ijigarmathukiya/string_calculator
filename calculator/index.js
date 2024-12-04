function Add(numbers) {
  if (numbers === "") return 0;

  let delimiter = ',';

  if (numbers.startsWith('//')) {
    const delimiterLineEnd = numbers.indexOf('\n');
    delimiter = numbers.substring(2, delimiterLineEnd);
    numbers = numbers.substring(delimiterLineEnd + 1);
  }

  const nums = numbers.split(new RegExp(`[${delimiter}\n]`)).map(Number);

  const negatives = nums.filter(num => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(', ')}`);
  }

  return nums.reduce((sum, num) => num > 1000 ? sum : sum + Number(num), 0);
}

module.exports = { Add };