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
var ext_exports = {};
__export(ext_exports, {
  default: () => ext_default,
  test: () => test
});
module.exports = __toCommonJS(ext_exports);
var import_mongo = __toESM(require("./mongo"));
var import_array = __toESM(require("../rules/array"));
var import_email = __toESM(require("../rules/email"));
var import_ext_oid = __toESM(require("../rules/ext-oid"));
var import_hex = __toESM(require("../rules/hex"));
var import_number_integer = __toESM(require("../rules/number-integer"));
var import_number_natural = __toESM(require("../rules/number-natural"));
var import_number = __toESM(require("../rules/number"));
var import_string_oid = __toESM(require("../rules/string-oid"));
var import_string = __toESM(require("../rules/string"));
var import_every = __toESM(require("../rules/every"));
var import_is = __toESM(require("../rules/is"));
var import_none = __toESM(require("../rules/none"));
var import_some = __toESM(require("../rules/some"));
var import_strftime_iso = __toESM(require("../rules/strftime-iso"));
var import_strftime = __toESM(require("../rules/strftime"));
var import_length = __toESM(require("../rules/length"));
var import_keys = __toESM(require("../rules/keys"));
const ext = import_mongo.default.clone();
var ext_default = ext;
function test(json, query) {
  return ext.test(json, query);
}
ext.append2(import_array.default);
ext.append2(import_email.default);
ext.append2(import_ext_oid.default);
ext.append2(import_hex.default);
ext.append2(import_number_integer.default);
ext.append2(import_number_natural.default);
ext.append2(import_number.default);
ext.append2(import_string_oid.default);
ext.append2(import_string.default);
ext.append2(import_every.default);
ext.append2(import_is.default);
ext.append2(import_none.default);
ext.append2(import_some.default);
ext.append2(import_strftime_iso.default);
ext.append2(import_strftime.default);
ext.append2(import_length.default);
ext.append2(import_keys.default);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  test
});
//# sourceMappingURL=ext.js.map
