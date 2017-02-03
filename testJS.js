/*Написать объект с геттерами и сеттерами


Напишите конструктор User для создания объектов:

С приватными свойствами имя firstName и фамилия surname.
С сеттерами для этих свойств.
С геттером getFullName(), который возвращает полное имя.
Должен работать так:*/

function User() {
  /* ваш код */
  var firstName = "";
  var surname = "";

  this.setFirstName = function(Name){
    firstName = Name;
  }

  this.setSurname = function(Name){
    surname = Name;
  }

  this.getFullName = function(){
    return firstName + " " + surname;
  }
}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

alert( user.getFullName() ); // Петя Иванов