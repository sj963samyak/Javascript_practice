const form = document.querySelector('form');
const results = document.querySelector('#results');
//event listener on forms so that input values
form.addEventListener('submit', function (e) {
  e.preventDefault();//line used to prevent default submit action
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
  }
  if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight';
  }
  else{
    let heightSquare=(height*height)
    let finalHeight=(heightSquare)/10000
    const bmi=(weight/finalHeight).toFixed(2)
    results.innerHTML=`<span>Your bmi is ${bmi}</span><br>`
    if(bmi<18.6){
      results.append(document.createTextNode("Under Weight"))
    }
    else if(bmi>18.6 && bmi<24.9){
      results.append(document.createTextNode("Normal Range"))
    }
    else{
      results.append(document.createTextNode("Overweight"))
    }
  }
});

//how to create an md file
//click on calculate button
// //calculate it using a formula
// Under Weight = Less than 18.6

// Normal Range = 18.6 and 24.9

// Overweight = Greater than 24.9
