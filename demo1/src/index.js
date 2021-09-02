// const prev = process.argv[process.argv.length - 1];
// console.log(prev);

const game = require('./game');
let num = 0

process.stdin.on('data',  (e) => {
  const player = e.toString().trim();
  let result = game(player)
  if(result == -1) {
    num++
  }
  if(num === 3) {
    console.log('我死了')
    process.exit()
  }
})