// 1) chiedi all'utente il suo nome
const userName = prompt('Dimmi il tuo nome');
console.log('userName', userName, typeof userName);

// 2) chiedi all'utente il suo cognome
const userLastName = prompt('Dimmi il tuo cognome');
console.log('userLastName', userLastName, typeof userLastName);

// 3) chiedi all'utente il suo colore preferito
const userColor = prompt('Dimmi il tuo colore preferito');
console.log('uuserColor', userColor, typeof userColor);

// 4) infine scrivili sulla pagina
const pwdContainerElement = document.getElementById('pwd-container');
console.log('pwdContainerElement', pwdContainerElement, typeof pwdContainerElement);

const pwdContainerElementWithQuerySelector = document.querySelector('body > p');
console.log('pwdContainerElementWithQuerySelector', pwdContainerElementWithQuerySelector, typeof pwdContainerElementWithQuerySelector);

console.log(pwdContainerElementWithQuerySelector.innerHTML);

pwdContainerElementWithQuerySelector.innerHTML = userName + userLastName + userColor + '114';