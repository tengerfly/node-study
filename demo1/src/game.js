module.exports = function (player) {
  const computePlayerAction = computePlayer()
  console.log(`电脑：${computePlayerAction} --- 人： ${player}`)
  if(player == computePlayerAction){
    console.log('平局')
    return 0
  } else if(
    (player == 'rock' && computePlayerAction == 'scissors')
    ||(player == 'scissors' && computePlayerAction == 'paper') 
    || (player == 'paper' && computePlayerAction == 'rock')) {
      console.log('你赢了')
      return -1
  } else {
    console.log('电脑赢了')
    return 1
  }
}

function computePlayer() {
  const num = Math.floor(Math.random() * 3) + 1
  let result = ''
  // rock 石头 , paper 步 ,scissors 剪刀
  if(num % 3 == 0) {
    result = 'rock'
  } else if(num % 3 == 1) {
    result = 'paper'
  } else if (num % 3 == 2) {
    result = 'scissors'
  }
  
  return result
}