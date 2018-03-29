// Author of the project - SAYANI SASHA

// ---------- Урок № 5 - Null and undefined ---------- 

// Null and undefined это 2 типа данных которые обозначают отсутсвие значение
// Про Null можно думать как про пустое значение , в то время как  undefined обозначает вообще полное отсутсвие какого либо значение.

// Тип литерала Null  опеределяется как обьект 
console.log(typeof null);
// Тип литерала undefined   опеределяется как undefined  
console.log(typeof undefined);

// Несколько примеров где можно встретить значение undefined
var temp;
console.log(temp); // значение не инициализирована

var obj={};
console.log(obj.property); //обращение к не существующему свойству

var a=[1,2,3,4];
console.log(a[5]); //обращение к не существующему елементу массива

// И еще пару примеров относятся к использыванию функций

function funct(name) {
	return "Hello" + name;
}
console.log(funct("World")); // все работает нормально
 // но если мы вызовем функцию без аргумента, то выдаст Hello undefined
 function funct(name) {
	return "Hello" + name;
}
console.log(funct()); 