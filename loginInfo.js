function passwordTest()
{
  let myinput = document.getElementById("psw");
  let letter = document.getElementById("letter");
  let capital = document.getElementById("capital");
  let number = document.getElementById("number");
  let length = document.getElementById("length");
      
  myinput.onfocus = function()
    {
      document.getElementById("message").style.display = "block";
    }

  myinput.onblur = function()
    {
      document.getElementById("message").style.display = "none";
    }

  myinput.onkeyup = function()
    {
      var lowerCaseLetters = /[a-z]/g;
      if (myinput.value.match(lowerCaseLetters))
      {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
      }
      else
      {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
      }

      var upperCaseLetters = /[A-Z]/g;
      if (myinput.value.match(upperCaseLetters))
      {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
      }
      else
      {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
      }

      var numbers = /[0-9]/g;
      if(myinput.value.match(numbers))
      {
        number.classList.remove("invalid");
        number.classList.add("valid");
      }
      else
      {
        number.classList.remove("valid");
        number.classList.add("invalid");
      }

      if (myinput.value.length >= 8)
      {
        length.classList.remove("invalid");
        length.classList.add("valid");
      }
      else
      {
        length.classList.remove("valid");
        length.classList.add("invalid");
      }
    }
    
    document.getElementById("loginSubmit").addEventListener("click",(e) => 
    {
      const newUsername = document.getElementById("loginForm").username.value;
      const newPassword = document.getElementById("loginForm").password.value;
      e.preventDefault();
      //modules.exports = { newUsername, newPassword };
      if (newUsername == "test" && newPassword == "helloS1234")
      {
        alert("Successful Login!")
        location.assign("app.html");
        
      }
      else
      {
        alert("Invalid Username and/or password");
       // loadServer();
      }
      
    });
}