
import Engine from '../engine'
import * as is from '../is'
import same from '../same'
import { arrize } from '../utils'
import * as ensure from '../ensure'

// Comparison rules
import eq from '../rules/eq'
import ne from '../rules/ne'
import gt from '../rules/gt'
import gte from '../rules/gte'
import lt from '../rules/lt'
import lte from '../rules/lte'
import inRule from '../rules/in'
import nin from '../rules/nin'

// Logical rules
import or from '../rules/or'
import and from '../rules/and'
import nor from '../rules/nor'
import not from '../rules/not'

// Element rules
import exists from '../rules/exists'
import type from '../rules/type'

// Evaluation rules
import mod from '../rules/mod'
import regex from '../rules/regex'
import options from '../rules/options'
import where from '../rules/where'

// Array rules
import all from '../rules/all'
import elemMatch from '../rules/elem-match'
import size from '../rules/size'

const mongo = new Engine()
export default mongo

export function test (json, query) {
  return mongo.test(json, query)
}

// Comparison
mongo.append2(eq)
mongo.append2(ne)
mongo.append2(gt)
mongo.append2(gte)
mongo.append2(lt)
mongo.append2(lte)
mongo.append2(inRule)
mongo.append2(nin)

// Logical
mongo.append2(or)
mongo.append2(and)
mongo.append2(nor)
mongo.append2(not)

// Element
mongo.append2(exists)
mongo.append2(type)

// Evaluation
mongo.append2(mod)
mongo.append2(regex)
mongo.append2(options) // HACK
mongo.append2(where) // TODO: Is it safe?

// Array
mongo.append2(all)
mongo.append2(elemMatch)
mongo.append2(size)
