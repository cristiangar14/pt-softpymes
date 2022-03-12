/*
INSTRUCCIONES:

Crear una función que reciba la variable "companies" como parámetro:

1. Agrupar todos los "users" de todas las "companies" en una sola tabla. ok

2. Cada "user" debe tener un nuevo atributo "company" que tenga como valor el nombre de la "company".ok

3. Los "users" deben ordenarse de acuerdo con su edad (de mayor a menor).ok
*/
const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');

const companies = createAll();

export function listUsers(companies){
  const list =[];
  for (i of companies){
    const nameCompany = i.name 
    const users = i.users
    users.map(u => {
        u.company = nameCompany
        list.push(u)})

  }
  return list.sort(((a, b) => a.age > b.age ? -1 : 1));;
}

cleanConsole(4, companies);
console.log('%c ---- RES 4 --- ', 'background: #bada55; color: #222', 'Put here your method: ', listUsers(companies));
