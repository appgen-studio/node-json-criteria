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
var is_exports = {};
__export(is_exports, {
  default: () => is_default
});
module.exports = __toCommonJS(is_exports);
var is = __toESM(require("../is"));
var is_default = {
  conditions: {
    // Evaluates to true if provided rule name prefixed with $ evaluates to true.
    $is: function(d, q) {
      let r = false;
      switch (true) {
        // Single rule, ie: { foo: { $is: 'number' } }
        case is.string(q):
          r = this.test(d, { [`$${q}`]: true });
          break;
        // Any of provided rules, ie: { foo: { $is: [ 'number', 'string' ] } }
        case is.strings(q):
          r = this.test(d, {
            $or: q.map(function(e) {
              return { [`$${e}`]: true };
            })
          });
          break;
        default:
          throw new Error("$is supports string or strings query only for now.");
      }
      return r;
    }
  }
};
//# sourceMappingURL=is.js.map
