

one.onclick = function() {
   alert('Welcome to Fitness Shenegans')
};

button.addEventListener("click", function() {
    this.style.backgroundColor = "red";
  });

document.body.style.backgroundColor = 'red'; // make the background red
setTimeout(() => document.body.style.backgroundColor = '', 3000); // return back


