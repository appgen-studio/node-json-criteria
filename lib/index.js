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
var index_exports = {};
__export(index_exports, {
  default: () => index_default,
  ext: () => ext,
  minimize: () => import_utils.minimize,
  mongo: () => mongo,
  test: () => test
});
module.exports = __toCommonJS(index_exports);
var import_ext = __toESM(require("./engine/ext"));
var import_mongo = __toESM(require("./engine/mongo"));
var import_utils = require("./utils");
var index_default = import_mongo.default;
function test(a, q) {
  return import_mongo.default.test(a, q);
}
const ext = import_ext.default;
const mongo = import_mongo.default;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ext,
  minimize,
  mongo,
  test
});
//# sourceMappingURL=index.js.map
