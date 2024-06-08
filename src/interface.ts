// use of interface in TypeScript
interface ReactangleOptions {
  width: number;
  length: number;
}

function drawRectangle(options: ReactangleOptions) {
  let width = options.width;
  let length = options.length;
}

let threeDOptions = {
  width: 30,
  length: 20,
  height: 10,
};

drawRectangle(threeDOptions);
