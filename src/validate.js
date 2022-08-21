const validate = (pass) => {
  if(!pass) return null
  const alphabet = pass.match(/[a-zA-Z]+/g)
  const number = pass.match(/\d+/g)
  const character = pass.match(/\W+/g)
  if(!alphabet) return false
  if(!number) return false
  if(!character) return false
  
  if(alphabet && number && character){
    return true
  }
  
}
module.exports = validate