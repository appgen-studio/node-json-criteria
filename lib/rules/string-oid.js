var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var string_oid_exports = {};
__export(string_oid_exports, {
  default: () => string_oid_default
});
module.exports = __toCommonJS(string_oid_exports);
var string_oid_default = {
  expansions: {
    // Matches ObjectId string.
    "$string:oid": {
      $type: "string",
      $regex: /^[0-9A-Fa-f]{24}$/
    }
  }
};
//# sourceMappingURL=string-oid.js.map
