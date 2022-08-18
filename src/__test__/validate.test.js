const validate = require("../validate")

describe('Password Validation', ()=>{
  test('only alphabet will be false', ()=>{
    expect(validate('dfdjlff')).toBe(false)
  })
  test('only number will be false', ()=>{
    expect(validate('348348')).toBe(false)
  })
  test('only character will be false', ()=>{
    expect(validate('%^^%')).toBe(false)
  })
  test('number and character will be false', ()=>{
    expect(validate('2323%^^%')).toBe(false)
  })
  test('number and alphabet will be false', ()=>{
    expect(validate('2323dfdf')).toBe(false)
  })
  test('alphabet and character will be false', ()=>{
    expect(validate('##dfdf')).toBe(false)
  })
  test('alphabet, character and number will be true', ()=>{
    expect(validate('##dfdf232')).toBe(true)
  })
})