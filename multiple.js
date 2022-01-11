//find the multiples of of two number specifiying a range [1, K]
// a - first number
// b - second number
// K - limit

const solution = (a,b, K) => {
  let N = Array(K);
  let length = N.length;
  let multiples = [];

  for( i = 0; i < length; i++ ){
    if( i % a === 0 || i % b === 0 ){
        multiples.push(i);
    }
  }

  return multiples.reduce( (a,b) => a + b, 0);

}


console.log(solution(3,5,1000))// returns the sum of multiples of 3 and 5 from 1 to 1000
