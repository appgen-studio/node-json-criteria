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
var number_integer_exports = {};
__export(number_integer_exports, {
  default: () => number_integer_default
});
module.exports = __toCommonJS(number_integer_exports);
var number_integer_default = {
  expansions: {
    // Matches integer numbers (..., -2, -1, 0, 1, 2, ...)
    "$number:integer": {
      $type: "number",
      $mod: [1, 0]
    }
  }
};
//# sourceMappingURL=number-integer.js.map
