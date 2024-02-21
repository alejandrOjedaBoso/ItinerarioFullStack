"use strict";
var Roles;
(function (Roles) {
    Roles[Roles["User"] = 1] = "User";
    Roles[Roles["Admin"] = 2] = "Admin";
    Roles[Roles["SuperAdmin"] = 3] = "SuperAdmin";
})(Roles || (Roles = {}));
;
console.log(Roles.Admin);
//Object
const roles = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2
};
console.log(roles.Admin);
