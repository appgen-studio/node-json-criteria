
import mongo from './mongo'

// Expansions
import array from '../rules/array'
import email from '../rules/email'
import extOid from '../rules/ext-oid'
import hex from '../rules/hex'
import numberInteger from '../rules/number-integer'
import numberNatural from '../rules/number-natural'
import number from '../rules/number'
import stringOid from '../rules/string-oid'
import string from '../rules/string'

// Conditions
import every from '../rules/every'
import isRule from '../rules/is'
import none from '../rules/none'
import some from '../rules/some'
import strftimeIso from '../rules/strftime-iso'
import strftime from '../rules/strftime'

// Virtuals
import length from '../rules/length'
import keys from '../rules/keys'

const ext = mongo.clone()
export default ext

export function test (json, query) {
  return ext.test(json, query)
}

// Expansions
ext.append2(array)
ext.append2(email)
ext.append2(extOid)
ext.append2(hex)
ext.append2(numberInteger)
ext.append2(numberNatural)
ext.append2(number)
ext.append2(stringOid)
ext.append2(string)

// Conditions
ext.append2(every)
ext.append2(isRule)
ext.append2(none)
ext.append2(some)
ext.append2(strftimeIso)
ext.append2(strftime)

// Virtuals
ext.append2(length)
ext.append2(keys)

// console.log(JSON.stringify(ext, null, '  '))

// console.log(ext.test({ foo: 1 }, { foo: { $is: 'number' } }))

// console.log(ext.test({ foo: { $oid: '54d72bbf562d4b42fc4802c' } }, { foo: { '$string:oid': true } }))

// $exact / $iff
// $creditcard
// $guid
// $hostname http://tools.ietf.org/html/rfc1123
// $downcase
// $upcase
// $trim
