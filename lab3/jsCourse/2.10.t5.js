let login = prompt("enter who are you", "")
let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' :  (login == '') ? 'No login' : '';

alert(message)
