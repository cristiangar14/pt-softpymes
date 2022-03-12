/*
INSTRUCCIONES:

1. Crear una función tomando como parámetro un "id" de "company" y devolver el nombre de la "company".ok

2: Crear una función tomando como parámetro un "id" de "company" y quitar la "company" de la lista.ok

4: Crear una función tomando como parámetro un "id" de "company" y un nuevo "user" cuyo el apelido es "Delgado",
   el nombre "Juan", de 35 años y dueño de un carro.
   El nuevo "user" debe agregarse a la lista de "users" de este "company" y tener un "id" generado automáticamente.
   La función también debe modificar el atributo "usersLength" de "company".ok

5: Crear una función tomando como parámetro un "id" de "company" y un "id" de "user".
   La función debe quitar este "user" de la lista de "users" de "company" y cambiar el atributo "usersLength" de "company".

6: Crear una función tomando como parámetro dos "id" de "company" y un "id" de "user".
   La función debe permitir que el user sea transferido de la primera "company" a la una "company".
   El atributo "usersLength" de cada "company" debe actualizarse. */

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');

const companies = createAll();

const getCompany = (id) => {
   const result = companies.filter(e => e.id === id);
   return result[0].name;
}
const excludeCompany = (id) => {
   const result = companies.filter(e => e.id !== id);
   return result;
}

const juan = {
   'firstName':'Juan',
   'lastName': 'Delgado',
   'age': 35,
   'car':true 
}

function addUser (idCompany, newUser){
   const company = companies.filter(e => e.id === idCompany)
   const users = company[0].users;
   users.sort(((a, b) => a.id > b.id ? -1 : 1))
   newUser.id = users[0].id + 1;
   users.unshift(newUser)
   
   company[0].usersLength= users.length
   return company
}

function removeUser(idCompany, idUser){
   const company = companies.filter(e => e.id === idCompany)
   const users = company[0].users;
   const usersF = users.filter(u => u.id !== idUser)

   company[0].users = usersF;
   company[0].usersLength= users.length
   return company;
}

function trasnFUser(compIni, compFin, idUser){
   
   
   const searchUser = (compIni,idUser)=>{
      let user = {}
      const company = companies.filter(e => e.id === compIni);
      const users = company[0].users;
      const usersF = users.filter(u => u.id === idUser)
      user = usersF;
      return user
   }
   addUser (compFin, searchUser(compIni,idUser));
   removeUser(compIni, idUser);
   return companies
}

cleanConsole(7, companies);

console.log('%c ---- RES 7 --- part 1', 'background: #bada55; color: #222', 'Put here your method: ',getCompany(3));
console.log('%c ---- RES 7 --- part 2', 'background: #bada55; color: #222', 'Put here your method: ', excludeCompany(3));
console.log('%c ---- RES 7 --- part 3', 'background: #bada55; color: #222', 'Put here your method: ', addUser(3, juan));
console.log('%c ---- RES 7 --- part 4', 'background: #bada55; color: #222', 'Put here your method: ', removeUser(3, 10));
console.log('%c ---- RES 7 --- part 5', 'background: #bada55; color: #222', 'Put here your method: ', trasnFUser(0,1,6));
console.log('%c ---- RES 7 --- part 6', 'background: #bada55; color: #222', 'Put here your method: ');


