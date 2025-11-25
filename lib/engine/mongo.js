var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all2) => {
  for (var name in all2)
    __defProp(target, name, { get: all2[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
  mod2
));
var __toCommonJS = (mod2) => __copyProps(__defProp({}, "__esModule", { value: true }), mod2);
var mongo_exports = {};
__export(mongo_exports, {
  default: () => mongo_default,
  test: () => test
});
module.exports = __toCommonJS(mongo_exports);
var import_engine = __toESM(require("../engine"));
var is = __toESM(require("../is"));
var import_same = __toESM(require("../same"));
var import_utils = require("../utils");
var ensure = __toESM(require("../ensure"));
var import_eq = __toESM(require("../rules/eq"));
var import_ne = __toESM(require("../rules/ne"));
var import_gt = __toESM(require("../rules/gt"));
var import_gte = __toESM(require("../rules/gte"));
var import_lt = __toESM(require("../rules/lt"));
var import_lte = __toESM(require("../rules/lte"));
var import_in = __toESM(require("../rules/in"));
var import_nin = __toESM(require("../rules/nin"));
var import_or = __toESM(require("../rules/or"));
var import_and = __toESM(require("../rules/and"));
var import_nor = __toESM(require("../rules/nor"));
var import_not = __toESM(require("../rules/not"));
var import_exists = __toESM(require("../rules/exists"));
var import_type = __toESM(require("../rules/type"));
var import_mod = __toESM(require("../rules/mod"));
var import_regex = __toESM(require("../rules/regex"));
var import_options = __toESM(require("../rules/options"));
var import_where = __toESM(require("../rules/where"));
var import_all = __toESM(require("../rules/all"));
var import_elem_match = __toESM(require("../rules/elem-match"));
var import_size = __toESM(require("../rules/size"));
const mongo = new import_engine.default();
var mongo_default = mongo;
function test(json, query) {
  return mongo.test(json, query);
}
mongo.append2(import_eq.default);
mongo.append2(import_ne.default);
mongo.append2(import_gt.default);
mongo.append2(import_gte.default);
mongo.append2(import_lt.default);
mongo.append2(import_lte.default);
mongo.append2(import_in.default);
mongo.append2(import_nin.default);
mongo.append2(import_or.default);
mongo.append2(import_and.default);
mongo.append2(import_nor.default);
mongo.append2(import_not.default);
mongo.append2(import_exists.default);
mongo.append2(import_type.default);
mongo.append2(import_mod.default);
mongo.append2(import_regex.default);
mongo.append2(import_options.default);
mongo.append2(import_where.default);
mongo.append2(import_all.default);
mongo.append2(import_elem_match.default);
mongo.append2(import_size.default);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  test
});
//# sourceMappingURL=mongo.js.map
