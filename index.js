const submitBtn = document.getElementById('input_btn');

const validate = (e) => {
  e.preventDefault();
  const firstName = document.getElementById('f_name');
  const lastName = document.getElementById('l_name');
  const mail = document.getElementById('email');
  const code = document.getElementById('password');

  if (firstName.value === "" && lastName.value === "" && mail.value === "" && code.value === "") {
    document.getElementById('label_a').innerHTML = "First name cannot be empty";
    document.getElementById('label_b').innerHTML = "Last name cannot be empty";
    document.getElementById('label_c').innerHTML = "Email cannot be empty";
    document.getElementById('label_d').innerHTML = "Password cannot be empty";


    label_a.classList.add('label');
    label_b.classList.add('label');
    label_c.classList.add('label');
    label_d.classList.add('label');

    setTimeout ( "setClear_a()", 4000 );
    setTimeout ( "setClear_b()", 4000 );
    setTimeout ( "setClear_c()", 4000 );
    setTimeout ( "setClear_d()", 4000 );
    firstName.focus();
    lastName.focus();
    mail.focus();
    code.focus();

    return false;
  }
    
  
  return true;
}

submitBtn.addEventListener('click', validate);


function setClear_a ( )
{
   document.getElementById("label_a").innerHTML = "";
   label_a.classList.remove("label");
}
function setClear_b ( )
{
   document.getElementById("label_b").innerHTML = "";
   label_b.classList.remove("label");
}
function setClear_c ( )
{
   document.getElementById("label_c").innerHTML = "";
   label_c.classList.remove("label");
}
function setClear_d ( )
{
   document.getElementById("label_d").innerHTML = "";
   label_d.classList.remove("label");
}
