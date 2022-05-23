const generatePassword = (length, difficulty, countPassword = 1) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    const symbols = '!#$%&()*+,-./:;<=>?@[]^_{|}~';
    let newPassword = '';
    let result = []

    const random = letter => {
    return letter.split('').map(item => [Math.random(), item]).sort().map(item => item[1]).join('')
    }
    
    for(let j = 0; j < countPassword; j++){
      for(let i = 0; i < length; i++){
      if(difficulty === 'easy'){
        newPassword = random(alphabet)
      } else if(difficulty === 'medium'){
        newPassword+=random(alphabet)[i]+random(digits)[i]
        
      } else {
        newPassword+=random(alphabet)[i]+random(digits)[i]+random(symbols)[i]
      }
    }
      result.push((newPassword).slice(0, length))
      newPassword = newPassword.slice(length, -1) + newPassword[-1]
    }
    
      if (countPassword === 1){
      return random(newPassword.slice(0, length))
      } 
  
      result = result.sort()
      for(let y = 0; y < result.length; y++){
        if(result[y] === result[y+1]){
          result[y] = random(result[y])
        }
      }
      return result
  }