/*
INSTRUCCIONES:

1. Use la función creada en el ejemplo 4 para crear una nueva función tomando como parámetro
   la variable "companies" y devolver un nuevo objeto con los siguientes atributos:

    'size' => total de "users"
    'average' => edad promedio de "users"
    'hasCar' => total de "users" propietarios de un carro
    'averageWithCar' => edad promedio de los "users" con un carro
 */
const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');
const {listUsers} = require('./exer-4');
const companies = createAll();

const resume = (list) => {
   const resUsers = {
      'size':0,
      'overage': 0,
      'hasCar':0,
      'averageWithCar':0,
   }

   const average = (users)=>{
      let ages = [];
      users.map(u => ages.push(u.age));
      let sum = ages.reduce((previous, current) => current += previous);
      return Math.round(sum / ages.length);
   }

   const userCar =(users)=>{
      let listUsersWithCart = [];
      users.map(u => u.car ? listUsersWithCart.push(u) : null);
      const usersWithCart = listUsersWithCart.length;
      return usersWithCart;
   }
   
   const averageCar = (users)=>{
      let ages = [];
      users.map(u => u.car ? ages.push(u.age) : null);
      let sum = ages.reduce((previous, current) => current += previous);
      return Math.round(sum / ages.length);
   }

   


   resUsers.size = list.length;
   resUsers.overage = average(list);
   resUsers.hasCar = userCar(list);
   resUsers.averageWithCar = averageCar(list);


   return resUsers;
}

cleanConsole(5, companies);
console.log('%c ---- RES 5 --- ', 'background: #bada55; color: #222', 'Put here your method: ',resume(listUsers(companies)));
