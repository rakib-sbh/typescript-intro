const myFunction: Function = (a: string, b: string, c?: string) => {
  console.log(`Hello ${a} ${b}`);
};

myFunction("Rakib", "Rupom");

let add: (x: number, y: number) => void;

add = (a: number, b: number) => {
  return a + b;
};

console.log(add(10, 20));
