var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var sorted_exports = {};
__export(sorted_exports, {
  default: () => sorted_default
});
module.exports = __toCommonJS(sorted_exports);
var import_is = __toESM(require("../is"));
var sorted_default = {
  conditions: {
    // Evaluates to true if value is sorted array.
    //
    // TODO: q true, false, 1, -1
    $sorted: function(d, q) {
      let r = false;
      let cmp = void 0;
      switch (q) {
        case -1:
          cmp = function(a, b) {
            return a >= b;
          };
          break;
        default:
          cmp = function(a, b) {
            return a <= b;
          };
          break;
      }
      let rm = void 0;
      switch (q) {
        case false:
          rm = function(r2) {
            return !r2;
          };
          break;
        default:
          rm = function(r2) {
            return r2;
          };
          break;
      }
      if (import_is.default.array(d)) {
        r = true;
        let n = d.length;
        for (let i = 1; i < n; i++) {
          if (!cmp(d[i - 1], d[i])) {
            r = false;
            break;
          }
        }
      }
      return rm(r);
    }
  }
};
//# sourceMappingURL=sorted.js.map
