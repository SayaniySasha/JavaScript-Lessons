// ---------- Начало изучения языка JavaScript ---------- 


// ---------- Урок № 1 - Типы данных и переменные ---------- 

// var - инструкция обьявлений (Declaration Statement)

var name;
var x =30;

// JavaScript чувствительный к регистру.
// var name; / var Name; две разные переменные.
// Типы данных можно разделить на простые(primitive) и обьектные(object).
// Прстых в JS 5 штук :
// - Числа
// - Строки
// - логические значения (true / false)
// - Null
// - Undefined

// --- Простые типы ---
var myNumber = 123,
	myString = "Hello, JS",
	myBool	= true,
	myNull = null,
	myUndefined;

// CamelCase - стиль написания в JS , все новые слова начинаются с большой буквы " var myNamy"

console.log(myNumber);
console.log(myString);
console.log(myBool);
console.log(myNull);
console.log(myUndefined);


console.log("");

// typeof - чтобы вывести тип переменной 
console.log(typeof myNumber);
console.log(typeof myString);
console.log(typeof myBool);
console.log(typeof myNull); // ошибка в JS выводит тип object
console.log(typeof myUndefined);


//чтобы привести строковый литерал в верхний регистр можно вызвать его метод  |"toUpperCase()"|

console.log("sasha".toUpperCase());

console.log("");
// --- обьектные типы --- 
// К обьектным типам относятся любые значиния какие не относятся к первый 5 примитивным типам

var obj = {name: "sasha"}, //обьекты
	array = [1,2,3], // массивы
	regexp = /w+/g; // регулярные выражения
	//func = fuction(){}; // функции

	console.log(typeof obj);
	console.log(typeof array );
	console.log(typeof regexp);
	//console.log(typeof func);

	console.log("");

	//  Типы в JS можно так же разделить на  изменяемые (mutable) и не изменяемые (immutable) 
	// Все простые типы в js не изменяемыеы !
	// Обьектные типы мы можем легко изменять  

	obj.name = "new string"; // строка это простой массив символов.
	array[1] = 32;
	console.log(array);



