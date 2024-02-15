let username = window.prompt("Enter your username");

//username = username.trim();
//let letter = username.charAt(0);
//letter = letter.toUpperCase();

//let extraChars = username.slice(1);
//extraChars = extraChars.toLocaleLowerCase();
//username = letter + extraChars;
//console.log(username);

username = username.trim().charAt(0).toLocaleUpperCase() + username.trim().slice(1).toLocaleLowerCase();
console.log(username);