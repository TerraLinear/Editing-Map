function resetFormunit()
{
    document.getElementById("form1").reset();
}
function resetFormopening()
{
    document.getElementById("form2").reset();
}

function submitInfo() 
{
   
    $(document).ready(function() {
      $("#unit").click(function(){
        $("#form1").toggle('slow');
        //console.log(document.getElementById("form1").style.display);
      });
    });
    $(document).ready(function() {
      $("#opening").click(function(){
        $("#form2").toggle('slow');
      });
    });


    $("#form1").submit(function(e){
      e.preventDefault();
    })
    $("#form2").submit(function(e){
      e.preventDefault();
    })

    let unitName = document.getElementById('unitname');
    let openingName = document.getElementById('openingname');
    let unitId = document.getElementById('unitid');
    let openingId = document.getElementById('openingid');
    console.log(unitName.value);
    console.log(unitId.value);
    console.log(openingName.value);
    console.log(openingId.value);
}

function logOut()
{
  document.getElementById("logout").addEventListener("click", (e) =>
  {
    alert("You have been logged out!")
  });
}