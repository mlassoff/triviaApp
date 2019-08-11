const btnNext = document.getElementById("btnNext");
let answer = "";

btnNext.addEventListener('click', function(){
  document.getElementById("answer").innerHTML = "<button id='btnDisplayAnswer'>Display Answer</button>";
  fetch('http://jservice.io/api/random')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        //console.log(data);
        answer = data[0].answer;
        const question = data[0].question;
        const category = data[0].category.title;
        console.log(question + ": " + answer);
        document.getElementById("question").innerHTML = question;
        //document.getElementById("answer").innerHTML = answer;
        document.getElementById("category").innerHTML = "<h3>Category: " + category + "</h3>";
        document.getElementById("answer").style.display = "block";
        document.getElementById("btnDisplayAnswer").addEventListener('click', function(){
          document.getElementById("answer").innerHTML = answer;
        });
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
});
