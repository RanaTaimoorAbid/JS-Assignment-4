// Q1
var arr=[];

//Q2
var arr = new Array();

//Q3
var arr=["a","b"];

//Q4
var arr=[1,2,3];

//Q5
var arr=[true,false];

//Q6
var arr=[1,true,"a"];

//Q7
var qualifications=["SSC","HSC","BCS","BS","BCOM","MS","M.PHIL","PhD"];
var number =1;
var num = 0;
document.write(number++ +") "+qualifications[num++]+"<br>")
document.write(number++ +") "+qualifications[num++]+"<br>")
document.write(number++ +") "+qualifications[num++]+"<br>")
document.write(number++ +") "+qualifications[num++]+"<br>")
document.write(number++ +") "+qualifications[num++]+"<br>")
document.write(number++ +") "+qualifications[num++]+"<br>")
document.write(number++ +") "+qualifications[num++]+"<br>")
document.write(number++ +") "+qualifications[num++]+"<br>")

//Q8
var names=["Taimoor","Sarim","Abid"];
var scores= [340,200,400];
var total = 500;

document.write("<br>Score of " +names[0] +" is " + scores[0] +". Percentage: " +(scores[0] / total) * 100 +"%" );
document.write("<br>Score of " +names[1] +" is " + scores[1] +". Percentage: " +(scores[1] / total) * 100 +"%" );
document.write("<br>Score of " +names[2] +" is " + scores[2] +". Percentage: " +(scores[2] / total) * 100 +"%" );

// Q9
var colors=["black","blue"];
document.write(colors);
//a
var add = prompt("what color you want to add in the start of the array? ");
colors.unshift(add);
document.write("<br>Array after adding color in start"+colors);

//b
var add1 = prompt("what color you want to add in the end of the array? ");
colors.push(add1);
document.write("<br>Array after adding color in end"+colors);

//c
colors.unshift("yellow","white");
document.write("<br>Array after adding 2 colors in start "+colors);

//d
colors.shift();
document.write("<br>Array after removing color from start"+colors);


//e
colors.pop();
document.write("<br>Array after removing color from end"+colors);

//f
var index = +prompt("Enter index where you want to add color");
inputColor = prompt("Enter color you want to add");
colors.splice(index, 0, inputColor);
document.write("<br>Array after adding color at specific index: " + color);

//g
var index1 = +prompt("Enter index where you want to delete color");
var deleteCount = +prompt("Enter how many colors you want to delete");
colors.splice(index1, deleteCount);
document.write("<br>Array after deleting color at specific index: " + color);


//Q10
var arr =[320,230,480,120];
document.write("Array Before sorting"+arr);
document.write("<br>Array After sorting"+arr.sort());

//Q11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2, 4);

document.write("<br><br>Cities list: <br>" + cities);
document.write("<br>Selected cities list: <br>" + selectedCities);

//Q12
var arr = ["This", "is", "my", "cat"];

document.write(" Array:  <br>" + arr + "<br>");
document.write("String:  <br>" + arr.join(" "));

// Q13
var devices = [];
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");

document.write("<b>Devices: </b> <br>" + devices);
document.write("<br><br>Out: <br>" + devices.shift());
document.write("<br>Out: <br>" + devices.shift());
document.write("<br>Out: <br>" + devices.shift());
document.write("<br>Out: <br>" + devices.shift());

//Q14
var devices = [];
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");

document.write("<b>Devices: </b> <br>" + devices);
document.write("<br><br>Out: <br>" + devices.pop());
document.write("<br>Out: <br>" + devices.pop());
document.write("<br>Out: <br>" + devices.pop());
document.write("<br>Out: <br>" + devices.pop());

//Q15
var phoneman=[ "Apple","Samsung","Motorola","Nokia","Sony","Haier"]

document.write("<select><br> <option>" +phoneman[0] +"</option><option>" +phoneman[1] +"</option><option>" +phoneman[2] +"</option><option>" +phoneman[3] +"</option><option>" +phoneman[4] +"</option><option>" +phoneman[5] +"</option></select> ")


