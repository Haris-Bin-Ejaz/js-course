const form = document.querySelector('form');

//gives empty values
//const height = parseInt(document.querySelector('#height').value);

// give value on submit
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Give a Valid Height ${height} `;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Give a Valid Weight ${weight} `;
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);

    //show result
    results.innerHTML = `<span> ${bmi} </spam>`;
  }
  //results.innerHTML = `${height}`;

  //console.log(height);
});
