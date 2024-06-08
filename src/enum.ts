// ENUMS

enum RTypes {
  SUCCESS,
  FAILURE,
  UNATHENTICATED,
  FORBIDDEN,
}

interface APIResponse2<T> {
  status: number;
  type: RTypes;
  data: T;
}

const response2: APIResponse2<string> = {
  status: 200,
  type: RTypes.SUCCESS,
  data: "test",
};

console.log(response2);
