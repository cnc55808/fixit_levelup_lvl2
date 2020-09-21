//declares variables
let userName = prompt("What is your name?")
let userState = prompt("What state do you live in? Please abbreviate to 2 capitalized letters.")
let userTemp = prompt("What is your temperature? Please type as a number.")
let allMessages = [${userName}, ${userState}, ${userTemp}]


//creates switch to give correct output for user
switch (true) {
  case (userState = "NE" && userTemp < 32):
    NSB.MsgBox(`${userName}, wear a warm coat, hat, scarf and gloves.`)
    break;
  case (userState = "NE" && userTemp >= 32 && userTemp <= 50):
    NSB.MsgBox(`${userName}, wear a warm coat but you won't need a hat, scarf or gloves.`)
    break;
  case (userState = "FL" && userTemp >= 32 && userTemp <= 50):
    NSB.MsgBox(`${userName}, wear your warmest coat, a warm hat, a scarf, and warm gloves.`)
    break;
  case (userState = "FL" && userTemp > 50 && userTemp <= 70):
    NSB.MsgBox(`${userName}, wear a warm coat, hat and gloves. Maybe a scarf too.`)
    break;
  default:
    NSB.MsgBox(`Have a nice day!`)
  }
  
    
  


