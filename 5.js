const crates = `            [G] [W]         [Q]    
[Z]         [Q] [M]     [J] [F]    
[V]         [V] [S] [F] [N] [R]    
[T]         [F] [C] [H] [F] [W] [P]
[B] [L]     [L] [J] [C] [V] [D] [V]
[J] [V] [F] [N] [T] [T] [C] [Z] [W]
[G] [R] [Q] [H] [Q] [W] [Z] [G] [B]
[R] [J] [S] [Z] [R] [S] [D] [L] [J]
 1   2   3   4   5   6   7   8   9 
`

const instructions = `
move 6 from 5 to 7
move 2 from 9 to 1
move 4 from 8 to 6
move 1 from 8 to 1
move 2 from 9 to 1
move 1 from 6 to 1
move 13 from 7 to 8
move 1 from 2 to 8
move 9 from 1 to 5
move 1 from 3 to 8
move 3 from 6 to 7
move 4 from 4 to 1
move 11 from 5 to 6
move 6 from 6 to 9
move 3 from 4 to 2
move 7 from 8 to 6
move 1 from 7 to 5
move 1 from 4 to 3
move 7 from 1 to 5
move 2 from 2 to 7
move 4 from 9 to 6
move 1 from 3 to 6
move 1 from 1 to 9
move 1 from 3 to 6
move 1 from 5 to 8
move 4 from 6 to 7
move 3 from 8 to 7
move 7 from 5 to 7
move 1 from 3 to 1
move 1 from 2 to 6
move 14 from 6 to 5
move 2 from 5 to 2
move 3 from 9 to 2
move 6 from 2 to 9
move 7 from 8 to 6
move 7 from 7 to 3
move 2 from 8 to 7
move 6 from 3 to 7
move 17 from 7 to 1
move 1 from 3 to 1
move 1 from 2 to 5
move 4 from 5 to 6
move 17 from 6 to 9
move 7 from 9 to 4
move 1 from 2 to 7
move 2 from 5 to 4
move 3 from 7 to 8
move 7 from 5 to 2
move 6 from 2 to 8
move 8 from 9 to 6
move 1 from 2 to 3
move 8 from 4 to 9
move 7 from 6 to 9
move 18 from 1 to 7
move 1 from 1 to 8
move 2 from 6 to 9
move 1 from 3 to 9
move 1 from 4 to 6
move 1 from 8 to 3
move 1 from 3 to 1
move 10 from 7 to 2
move 9 from 8 to 4
move 1 from 6 to 4
move 2 from 7 to 8
move 5 from 4 to 9
move 17 from 9 to 5
move 2 from 7 to 6
move 5 from 9 to 7
move 5 from 4 to 2
move 8 from 2 to 4
move 8 from 4 to 3
move 2 from 6 to 5
move 2 from 8 to 5
move 3 from 9 to 3
move 4 from 7 to 3
move 6 from 9 to 6
move 4 from 6 to 9
move 5 from 9 to 3
move 8 from 5 to 2
move 1 from 1 to 9
move 1 from 6 to 3
move 1 from 9 to 4
move 5 from 7 to 4
move 19 from 3 to 1
move 4 from 2 to 8
move 13 from 5 to 1
move 1 from 6 to 3
move 3 from 3 to 6
move 2 from 8 to 9
move 4 from 2 to 9
move 2 from 2 to 6
move 1 from 1 to 6
move 5 from 1 to 9
move 10 from 9 to 3
move 15 from 1 to 6
move 21 from 6 to 2
move 20 from 2 to 1
move 2 from 8 to 9
move 28 from 1 to 2
move 6 from 4 to 6
move 2 from 1 to 5
move 3 from 3 to 4
move 2 from 5 to 4
move 1 from 4 to 3
move 3 from 4 to 5
move 2 from 5 to 4
move 1 from 1 to 8
move 25 from 2 to 9
move 1 from 4 to 6
move 1 from 3 to 8
move 4 from 3 to 6
move 1 from 4 to 9
move 2 from 6 to 3
move 1 from 5 to 9
move 5 from 2 to 8
move 7 from 9 to 6
move 2 from 9 to 4
move 3 from 2 to 1
move 3 from 3 to 4
move 1 from 3 to 5
move 16 from 6 to 3
move 7 from 8 to 3
move 5 from 4 to 3
move 1 from 1 to 3
move 1 from 2 to 6
move 1 from 5 to 6
move 21 from 3 to 5
move 2 from 1 to 2
move 1 from 6 to 7
move 10 from 9 to 8
move 1 from 6 to 5
move 5 from 8 to 7
move 12 from 5 to 3
move 20 from 3 to 6
move 4 from 7 to 9
move 1 from 7 to 3
move 1 from 2 to 5
move 1 from 3 to 8
move 2 from 8 to 4
move 4 from 8 to 7
move 3 from 6 to 1
move 1 from 1 to 5
move 2 from 9 to 2
move 2 from 1 to 5
move 2 from 5 to 6
move 3 from 7 to 1
move 2 from 1 to 4
move 4 from 6 to 8
move 3 from 4 to 7
move 3 from 2 to 5
move 2 from 7 to 9
move 9 from 9 to 8
move 1 from 4 to 1
move 7 from 5 to 7
move 1 from 7 to 8
move 1 from 3 to 1
move 4 from 7 to 5
move 2 from 1 to 9
move 1 from 1 to 2
move 5 from 5 to 4
move 1 from 2 to 6
move 5 from 7 to 9
move 5 from 4 to 7
move 11 from 9 to 6
move 14 from 8 to 9
move 23 from 6 to 5
move 6 from 9 to 5
move 1 from 6 to 2
move 10 from 5 to 3
move 1 from 4 to 9
move 1 from 2 to 1
move 2 from 7 to 3
move 10 from 5 to 7
move 8 from 5 to 2
move 5 from 3 to 5
move 7 from 5 to 8
move 1 from 2 to 7
move 9 from 7 to 9
move 3 from 2 to 3
move 2 from 6 to 2
move 2 from 3 to 6
move 4 from 7 to 5
move 1 from 1 to 5
move 4 from 3 to 1
move 2 from 5 to 2
move 1 from 3 to 2
move 2 from 6 to 8
move 7 from 5 to 3
move 9 from 2 to 4
move 2 from 1 to 2
move 2 from 5 to 3
move 1 from 4 to 9
move 1 from 6 to 9
move 1 from 4 to 2
move 2 from 1 to 7
move 3 from 2 to 6
move 4 from 8 to 7
move 2 from 8 to 3
move 2 from 3 to 7
move 1 from 6 to 5
move 2 from 8 to 2
move 5 from 4 to 1
move 8 from 9 to 8
move 1 from 5 to 7
move 10 from 9 to 2
move 8 from 8 to 2
move 1 from 1 to 6
move 12 from 3 to 9
move 7 from 7 to 4
move 13 from 2 to 4
move 7 from 2 to 7
move 1 from 6 to 7
move 3 from 9 to 8
move 2 from 6 to 3
move 1 from 3 to 2
move 1 from 3 to 9
move 3 from 1 to 5
move 1 from 1 to 6
move 4 from 7 to 6
move 5 from 7 to 1
move 1 from 2 to 1
move 6 from 9 to 4
move 5 from 9 to 7
move 3 from 8 to 3
move 22 from 4 to 9
move 24 from 9 to 8
move 1 from 9 to 2
move 2 from 4 to 3
move 10 from 8 to 3
move 1 from 2 to 1
move 1 from 3 to 8
move 1 from 6 to 3
move 1 from 1 to 4
move 4 from 3 to 4
move 4 from 6 to 1
move 2 from 4 to 5
move 4 from 7 to 2
move 7 from 4 to 6
move 4 from 6 to 1
move 2 from 6 to 3
move 1 from 6 to 2
move 5 from 5 to 2
move 12 from 3 to 5
move 3 from 7 to 8
move 6 from 2 to 3
move 11 from 1 to 9
move 1 from 1 to 7
move 1 from 7 to 5
move 2 from 3 to 9
move 2 from 9 to 7
move 4 from 2 to 5
move 2 from 7 to 1
move 17 from 8 to 1
move 1 from 3 to 2
move 16 from 1 to 3
move 8 from 3 to 4
move 2 from 8 to 3
move 2 from 1 to 5
move 1 from 2 to 6
move 12 from 5 to 8
move 1 from 6 to 3
move 9 from 3 to 9
move 8 from 4 to 6
move 2 from 1 to 6
move 6 from 8 to 4
move 3 from 4 to 6
move 1 from 1 to 9
move 11 from 6 to 8
move 3 from 4 to 3
move 17 from 9 to 5
move 2 from 6 to 7
move 1 from 9 to 1
move 2 from 8 to 6
move 1 from 7 to 5
move 1 from 8 to 9
move 1 from 1 to 7
move 3 from 9 to 6
move 2 from 7 to 8
move 1 from 9 to 6
move 15 from 5 to 2
move 9 from 3 to 9
move 11 from 8 to 3
move 6 from 9 to 8
move 4 from 6 to 7
move 3 from 3 to 7
move 5 from 5 to 6
move 7 from 7 to 5
move 3 from 6 to 1
move 2 from 1 to 4
move 1 from 9 to 2
move 2 from 9 to 3
move 2 from 6 to 3
move 1 from 1 to 8
move 6 from 5 to 9
move 8 from 2 to 5
move 10 from 8 to 5
move 1 from 2 to 9
move 21 from 5 to 9
move 2 from 8 to 4
move 5 from 9 to 1
move 2 from 5 to 2
move 15 from 9 to 2
move 1 from 5 to 9
move 9 from 9 to 3
move 1 from 1 to 6
move 3 from 4 to 1
move 20 from 3 to 5
move 20 from 5 to 4
move 7 from 4 to 3
move 1 from 1 to 7
move 11 from 4 to 5
move 4 from 3 to 2
move 11 from 5 to 4
move 2 from 6 to 7
move 4 from 3 to 9
move 2 from 2 to 8
move 2 from 9 to 4
move 6 from 4 to 6
move 2 from 7 to 9
move 1 from 7 to 6
move 1 from 4 to 9
move 4 from 4 to 6
move 2 from 8 to 6
move 1 from 4 to 3
move 1 from 4 to 6
move 1 from 3 to 1
move 3 from 4 to 3
move 9 from 2 to 8
move 2 from 3 to 7
move 5 from 6 to 2
move 2 from 7 to 5
move 1 from 5 to 2
move 1 from 9 to 3
move 1 from 5 to 1
move 13 from 2 to 5
move 4 from 9 to 5
move 1 from 3 to 4
move 9 from 2 to 3
move 7 from 3 to 2
move 11 from 5 to 6
move 5 from 8 to 7
move 1 from 3 to 1
move 2 from 8 to 5
move 2 from 8 to 1
move 1 from 4 to 1
move 6 from 2 to 7
move 3 from 5 to 3
move 1 from 2 to 5
move 7 from 7 to 9
move 3 from 3 to 5
move 1 from 2 to 5
move 2 from 3 to 2
move 6 from 1 to 7
move 10 from 7 to 3
move 1 from 2 to 3
move 6 from 9 to 8
move 1 from 2 to 4
move 2 from 6 to 1
move 5 from 1 to 9
move 8 from 5 to 8
move 2 from 1 to 6
move 6 from 3 to 4
move 1 from 5 to 3
move 4 from 9 to 6
move 1 from 1 to 4
move 2 from 9 to 2
move 5 from 6 to 1
move 11 from 6 to 7
move 1 from 2 to 8
move 6 from 7 to 5
move 10 from 8 to 4
move 2 from 3 to 9
move 3 from 3 to 5
move 4 from 7 to 9
move 2 from 1 to 3
move 10 from 5 to 8
move 6 from 6 to 1
move 2 from 6 to 8
move 2 from 9 to 5
move 4 from 9 to 6
move 7 from 4 to 8
move 5 from 6 to 1
move 4 from 8 to 2
move 2 from 5 to 6
move 5 from 4 to 5
move 1 from 7 to 5
move 2 from 3 to 6
move 1 from 3 to 8
move 4 from 6 to 1
move 4 from 2 to 3
move 5 from 5 to 1
move 2 from 3 to 2
move 2 from 3 to 2
move 20 from 8 to 2
move 5 from 4 to 8
move 1 from 4 to 3
move 8 from 2 to 1
move 1 from 5 to 6
move 5 from 2 to 3
move 1 from 6 to 5
move 5 from 3 to 2
move 1 from 3 to 7
move 6 from 8 to 5
move 13 from 2 to 9
move 7 from 9 to 8
move 1 from 7 to 8
move 5 from 8 to 3
move 2 from 2 to 5
move 2 from 8 to 4
move 27 from 1 to 5
move 1 from 2 to 3
move 5 from 3 to 1
move 22 from 5 to 7
move 1 from 8 to 5
move 1 from 3 to 2
move 7 from 1 to 3
move 2 from 3 to 7
move 2 from 2 to 4
move 5 from 9 to 1
move 5 from 3 to 9
move 3 from 1 to 5
move 3 from 1 to 6
move 3 from 6 to 3
move 4 from 4 to 2
move 8 from 5 to 3
move 8 from 7 to 4
move 14 from 7 to 4
move 1 from 1 to 7
move 6 from 9 to 6
move 7 from 5 to 3
move 14 from 3 to 6
move 2 from 2 to 1
move 4 from 3 to 7
move 6 from 7 to 6
move 1 from 7 to 6
move 1 from 5 to 1
move 2 from 1 to 5
move 3 from 5 to 7
move 8 from 6 to 5
move 5 from 5 to 1
move 1 from 7 to 3
move 1 from 3 to 8
move 22 from 4 to 7
move 7 from 6 to 3
move 4 from 3 to 2
move 3 from 1 to 3
move 17 from 7 to 6
move 1 from 8 to 1
move 2 from 2 to 4
move 3 from 7 to 2
move 2 from 2 to 9
move 1 from 1 to 8
move 2 from 3 to 1
move 6 from 6 to 8
move 2 from 9 to 2
move 4 from 5 to 1
move 5 from 8 to 9
move 1 from 7 to 3
move 4 from 3 to 4
move 1 from 7 to 4
move 4 from 9 to 7
move 5 from 7 to 9
move 1 from 7 to 3
move 2 from 2 to 8
move 5 from 4 to 2
move 21 from 6 to 8
move 2 from 3 to 8
move 23 from 8 to 6
move 1 from 2 to 6
move 2 from 9 to 8
move 22 from 6 to 7
move 2 from 9 to 3
move 2 from 3 to 7
move 2 from 1 to 6
move 1 from 2 to 5
move 3 from 1 to 3
move 6 from 7 to 4
move 5 from 8 to 5
move 1 from 3 to 8
move 1 from 9 to 3
move 6 from 4 to 8
move 1 from 5 to 3
move 6 from 2 to 8
move 15 from 7 to 5
move 1 from 7 to 1
move 14 from 5 to 8
move 1 from 4 to 9
move 5 from 1 to 7
move 3 from 6 to 2
move 4 from 5 to 6
move 1 from 4 to 8
move 4 from 3 to 1
move 2 from 9 to 2
move 7 from 7 to 1
move 7 from 2 to 7
move 9 from 8 to 6
move 7 from 7 to 1
move 12 from 6 to 8
move 25 from 8 to 6
move 3 from 8 to 1
move 28 from 6 to 2
move 15 from 2 to 3
move 1 from 5 to 4
move 3 from 2 to 7
move 6 from 2 to 9
`

// const crates =  `    [D]    
// [N] [C]    
// [Z] [M] [P]
//  1   2   3 
//  `
// const instructions = `
// move 1 from 2 to 1
// move 3 from 1 to 3
// move 2 from 2 to 1
// move 1 from 1 to 2
//  `

const regex = /[A-Z]/
const cratesArray = () => {
  let column = 0;
  let line = 0;
  let lineWidth = crates.split('\n')[0].length;
  let columns = Math.ceil(crates.split('\n')[2].length/4);
  console.log("🚀 ~ cratesArray ~ columns:", columns)
  //https://stackoverflow.com/questions/69245372/how-do-i-fill-a-new-array-with-n-distinct-empty-arrays-in-a-concise-one-line-in
  let cratesArr =  Array.from({length: columns}, () => [])

  for(let i = 0; i < crates.length; i++){
    curr = crates.charAt(i)

    if(regex.test(curr)){
      cratesArr[column].push(crates.charAt(i))
      column++
    }

    if(column === 0 && (((i+1)/(3*(column+1)))-lineWidth*line) >= 1){
      column += 1; 
    } else if(column > 0 && (((i+1)/(4*(column+1)))-lineWidth*line) >= 1){
      console.log((((i+1)/(4*(column+1)))-lineWidth*line))
     column += 1; 
    }
    if(crates.charCodeAt(i) === 10) {
      console.log('lf')
      column = 0;
      line += 1;
    }
  }

  // for(let i = 0; i < crates.length; i++){
  //   if(regex.test(crates.charAt(i))){
  //     console.log("🚀 ~ file: 5.js:542 ~ cratesArray ~ column:", column)
  //     console.log("🚀 ~ file: 5.js:543 ~ cratesArray ~ cratesArr:", cratesArr)
  //     cratesArr[column].push(crates.charAt(i))
  //     column += 1;
  //   }
  //   if((Math.ceil(i / line + 1)/4) > column + 1){
  //     column += 1;
  //   }
  //   if(i/line + 1 === cratesArr.length * 4 -1) {
  //      column = 0;
  //      line += 1
  //   }
  // }
  return cratesArr;
}
console.log("🚀 ~ file: 5.js:535 ~ cratesArray ~ cratesArray:", cratesArray())


const codifiedInstructions = () => (
 instructions.split('\n').map(item => 
  [...item.matchAll(/[0-9]+/gm)].map(item => Number(item[0]))
 )
)

const result = codifiedInstructions().reduce((acc, [qty, from, to]) => {
    if(!qty || !from || !to) return acc;
    const move = acc[from-1].slice(0, qty).reverse();
    acc[from-1].splice(0, qty)
    acc[to-1].unshift(...move)
    return acc;
}, cratesArray()).reduce((acc, curr) => {
  acc = acc + curr[0]
  return acc;
}, '')

console.log(result)
