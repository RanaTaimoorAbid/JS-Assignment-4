//=====================Chapter 15(Array I)======================
//Q1
var arr=[];

//Q2
var arr=[1];

//Q3
var alphabet=["h","i","j","k"];
alert(alphabet[2])

//Q4
var alphabet=["h","i","j","k","l","m","n","o"];
document.write(alphabet.length);

//Q5
var arr=[1];
arr[1]=2;
document.write(arr[1]);


//===================Chapter 16(Array II)=======================
//Q1
var arr=[1];
arr.push(2);
alert(arr[1])

//Q2
var alphabet=["h","i","j","k"];
alphabet.pop();
alert(alphabet);

//Q3
var alphabet=["h","i","j","k"];
alphabet.push("m");
alert(alphabet);

//===================Chapter 16(Array III)======================
//Q1
var sizes=["S","M","XL","XXL","XXXL"];
sizes.shift();
alert(sizes);

//Q2
var sizes=["S","M","XL","XXL","XXXL"];
sizes.unshift(1,2,3);
alert(sizes);

//Q3
var arr=["one"];
arr.unshift("two");
alert(arr[0]);

//Q4
var sizes=["S","M","XL","XXL","XXXL"];
sizes.splice(2,0,"L");
alert(sizes);

//Q5
var sizes=["S","M","XL","XXL","XXXL"];
var newsize=sizes.slice (0,3);
alert(newsize);

//Q6
var pets=["dog","cat","ox","duck","frog"];
pets.splice(1,3,"cow","goat");
alert(pets);

//Q7
var pets=["dog","cat","ox","duck","frog"];
pets.splice(1,2);
alert(pets);

 //Q8
var pets=["dog","cat","ox","duck","frog","flea"];
var pets=pets.slice(3,5);
alert(pets);

