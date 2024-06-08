//* Generics

const addID = <T extends object>(obj: T) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

const addID2 = <
  T extends {
    name: string;
    age: number;
    country: string;
  }
>(
  obj: T
) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

let user = addID({
  name: "Rakib",
  age: 25,
  country: "Bangladesh",
});
console.log(user);

let user2 = addID2({
  name: "Rupom",
  age: 25,
  country: "England",
});

console.log(user2);
