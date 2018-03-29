// Author of the project - SAYANI SASHA

// ---------- Урок № 4 - Логические значения ---------- 
 
// Булевый или логический это еще 1 простой тип данных в языке JS
// Логический тип может принимать только 1 из двух значений true or false
console.log(true);
console.log(false); 

console.log(5===5);
console.log(5===6);
// Абсолютно любое значение в языке js может быть преобразовано в логическое
// для этого будем использовать конструктор булевого типа (Boolean)
console.log(Boolean(5));
// истинное значение будут принимать всё кроме :
console.log(Boolean(undefined));// false
console.log(Boolean(null));// false
console.log(Boolean(0));// false
console.log(Boolean(NaN));// false
console.log(Boolean(""));// false

console.log("");

// Для преобразования в булевый тип можно использовать более короткую запись:
 
// --- Логические операторы
// Оператор логического И записывается при помощи двух аперсантов (&&) и этот оператор возвращает истину только тогда когда оба его опернда истины
console.log(true&&false);
console.log(true&&true); // вернет true

// Логическая ИЛИ записываеться при помощи двух вертикальных линий (||) и этот оператор возвращает истину тогда когда хотябы 1 оператор из операндов истинный

console.log(true||false);//вернет true
console.log(false||false); // вернет false

// Унарный оператор - это оператор логического отрицания
console.log(!true); //вернет false
console.log(!false); //вернет true


console.log('');

// выражение && выражение

// выражение которое стоит с права будет вычислятся только в том случаи когда левый операнд истинный
// и по этой причине можно использовать такую запись:

var a =0,
	isTrue =true;
	isTrue && (a=5);
	console.log(a); // вернет 5 потому что левое значение true
// а если isTrue будет false
	var a =0,
	isTrue =false;
	isTrue && (a=5);
	console.log(a);// вернет 0 потому что левое значение false

	// также можно сделать с оператором ИЛИ (||)
	var someStr = "some string";
	var newStr = someStr||"Default String";
	console.log(someStr); //вернет some string потому что левая сторона рaвна true;

	// если левая сторона будет равна false вернет Default String
	var someStr = "";
	var newStr = someStr||"Default String";
	console.log(newStr); 