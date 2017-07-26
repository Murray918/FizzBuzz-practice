for(i = 0; i <= 100; i++){
  if (i % 3 ==1 && i % 5 == 0) {
    console.log('Fizz')
  } else if (i % 5 == 1) {
    console.log('Buzz');
  } else if (i % 3 == 1) {
    console.log('FizzaBuzz')
  }console.log(i);
}
