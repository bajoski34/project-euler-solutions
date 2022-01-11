//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//Find the sum of all the multiples of 3 or 5 below 1000.

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
