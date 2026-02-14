function toggleTheme(){
  document.body.classList.toggle("dark-theme");
}

document.querySelectorAll(".card").forEach(card=>{
  card.addEventListener("click", function(){
    alert(this.getAttribute("data-message"));
  });
});

function openModal(){
  document.getElementById("signupModal").style.display="flex";
}

function closeModal(){
  document.getElementById("signupModal").style.display="none";
}

document.getElementById("signupForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name=document.getElementById("name").value.trim();
  let email=document.getElementById("email").value.trim();
  let password=document.getElementById("password").value.trim();

  document.getElementById("nameError").textContent="";
  document.getElementById("emailError").textContent="";
  document.getElementById("passError").textContent="";

  let valid=true;

  if(name===""){
    document.getElementById("nameError").textContent="Name required";
    valid=false;
  }

  if(email===""){
    document.getElementById("emailError").textContent="Email required";
    valid=false;
  }
  else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    document.getElementById("emailError").textContent="Invalid email";
    valid=false;
  }

  if(password===""){
    document.getElementById("passError").textContent="Password required";
    valid=false;
  }
  else if(password.length<6){
    document.getElementById("passError").textContent="Minimum 6 characters";
    valid=false;
  }

  if(valid){
    alert("Account Created Successfully!");
    closeModal();
    document.getElementById("signupForm").reset();
  }
});
