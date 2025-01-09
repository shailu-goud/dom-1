var unordered = document.createElement("ul");
var list1 = document.createElement("li");
list1.innerText = "html";
var list2 = document.createElement("li");
list2.innerText = "css";
var list3 = document.createElement("li");
list3.innerText = "javascript";
var list4 = document.createElement("li");
list4.innerText = "node js";
var list5 = document.createElement("li");
list5.innerText = "react js";
unordered.append(list1, list2, list3, list4, list5);
document.body.appendChild(unordered);
//create a paragraph inside a div  and append it to the body
var div1 = document.createElement("div")
div1.className = "div1"
var para = document.createElement("para");
para.innerText = "javaScript is a cross-platform, object-oriented programming language used by developers to make web pages interactive javaScriptjavascript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty both";
div1.appendChild(para);
document.body.appendChild(div1);
//build a nested structure  and append to the body
var div2 = document.createElement("div");
div2.className = "div2"
var h1 = document.createElement("h1");
h1.innerText = "About javascript";
var para = document.createElement("para");
para.innerText = "javaScriptjavascript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.).js is a versatile,dynamically typed programming language for interactive web applications,supporting both and server side";
div2.append(h1, para);
document.body.appendChild(div2);
// generate a table row and append body
var table = document.createElement("table");
var tr = document.createElement("tr");
var td1 = document.createElement("td");
td1.innerText = "html";
var td2 = document.createElement("td");
td2.innerText = "css";
var td3 = document.createElement("td");
td3.innerText = "javascript";
tr.append(td1, td2, td3);
table.appendChild(tr);
document.body.appendChild(table);
//create a <div> and append five<buttons>

var div3 = document.createElement("div");
div3.className = "div3";
var btn1 = document.createElement("button");
btn1.innerText = "button1";
var btn2 = document.createElement("button");
btn2.innerText = "button2";
var btn3 = document.createElement("button");
btn3.innerText = "button3";
var btn4 = document.createElement("button");
btn4.innerText = "button4";
var btn5 = document.createElement("button");
btn5.innerText = "button5";
btn1.addEventListener("click", () => {
    console.log("sfsdfd")
})

div3.append(btn1, btn2, btn3, btn4, btn5)
document.body.appendChild(div3)