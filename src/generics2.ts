//* GENERICS

interface APIResponse<T> {
  status: number;
  type: string;
  data: T;
}

const response1: APIResponse<object> = {
  status: 200,
  type: "good",
  data: {
    name: "Test",
    something: 300,
  },
};
