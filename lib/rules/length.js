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
var length_exports = {};
__export(length_exports, {
  default: () => length_default
});
module.exports = __toCommonJS(length_exports);
var length_default = {
  virtuals: {
    // Returns length of arrays, strings and all objects with .length property.
    $length: function(d) {
      let r = void 0;
      if (d != null && d.hasOwnProperty("length")) {
        r = d.length;
      }
      return r;
    }
  }
};
//# sourceMappingURL=length.js.map
