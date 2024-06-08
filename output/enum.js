"use strict";
// ENUMS
var RTypes;
(function (RTypes) {
    RTypes[RTypes["SUCCESS"] = 0] = "SUCCESS";
    RTypes[RTypes["FAILURE"] = 1] = "FAILURE";
    RTypes[RTypes["UNATHENTICATED"] = 2] = "UNATHENTICATED";
    RTypes[RTypes["FORBIDDEN"] = 3] = "FORBIDDEN";
})(RTypes || (RTypes = {}));
const response2 = {
    status: 200,
    type: RTypes.SUCCESS,
    data: "test",
};
console.log(response2);
