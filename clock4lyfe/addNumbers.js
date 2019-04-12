const readline = require('readline')

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if(numsLeft > 0){
    reader.question("Input some numbers: ", function (number) {
      number = parseInt(number)
      sum += number;
      console.log(`Your running sum is ${sum}`);
      numsLeft--
      addNumbers(sum, numsLeft, completionCallback);
    });
  }
  else{
    completionCallback();
    reader.close();
    console.log(`Your total sum is ${sum}`);
  }
  
}

addNumbers(0, 3, ()=> {console.log(`Yay you're done!`)})



