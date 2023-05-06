const box = document.querySelectorAll(".box")
const btn  = document.querySelector(".btn")
const heading = document.getElementsByTagName('h1')

function getRandomHexColor() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      // Generate a random number between 0 and 15 (inclusive)
      const randomNum = Math.floor(Math.random() * 16);
      // Convert the number to its corresponding hex character
      const hexChar = randomNum.toString(16);
      // Append the hex character to the color code
      hexColor += hexChar;
    }
    return hexColor;
  }

  btn.addEventListener("click", ()=>{
    for(let i=0; i <= box.length; i++){
        boxcolor = getRandomHexColor();
        box[i].style.backgroundColor = boxcolor;
        heading[i].innerText = `${boxcolor}`
    }
  })

  // let colorcode = document.createElement("<p>")
  // colorcode.textContent = hexColor;
  // box[i].append(colorcode);