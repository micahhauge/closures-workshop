// Run this file with "yarn rectangle"
function createRectangle(length: number, width: number) {
  function getArea() {
    const result = length * width;
    return result;
  }

  function print() {
    console.log(
      `This ${length} x ${width} rectangle has an area of ${getArea()}`
    );
  }

  return { getArea, print };
}

const smallRectangle = createRectangle(3, 4);
const bigRectangle = createRectangle(5, 9);

smallRectangle.print();
bigRectangle.print();
