var input = document.getElementById("input");
var list = document.getElementById("list");
var add = document.getElementById("add");
var remov = document.getElementById("remove");

function firebaseData() {
  
}

function add_item() {
  var li = document.createElement("li");
  var inp = document.createElement("input");
  if (input.value !== "") {
    inp.setAttribute("value", input.value);
    inp.setAttribute("disabled", "");
    inp.setAttribute("class","input2")
    inp.setAttribute("class","item_input")
    li.appendChild(inp);
    var small = document.createElement("small")
    var txt = document.createTextNode(new Date().toDateString())
    small.setAttribute("class","date")
    li.appendChild(small)
    small.appendChild(txt)
    li.setAttribute("class", "listItem");
    var btn = document.createElement("button");
    var btnTxt = document.createTextNode("Delete");
    btn.setAttribute("class","rem")
    btn.appendChild(btnTxt);
    btn.setAttribute("onclick", "remove(this)");

    li.appendChild(btn);

    var btn2 = document.createElement("button");
    var btnTxt2 = document.createTextNode("Edit");
    btn2.setAttribute("onclick", "editItem(this)");
    btn2.appendChild(btnTxt2);
    li.appendChild(btn2);

    list.appendChild(li);

    input.value = "";
  } else {
    alert("Enter value!");
  }
}

function remove(e) {
  e.parentNode.remove();
}
function del() {
  var list = document.getElementById("list");
  list.innerHTML = "";
  input.value = "";
}
function editItem(e) {
  var li = e.parentNode;
  var inp = e.parentNode.childNodes[0];
  var inpVal = inp.value;
  var btn1 = document.createElement("button");
  var btn1Text = document.createTextNode("Update");
  btn1.setAttribute("onclick", "update(this)");
  btn1.appendChild(btn1Text);
  li.appendChild(btn1);
  var btn2 = document.createElement("button");
  var btn2Text = document.createTextNode("Cancel");
  btn2.setAttribute("onclick", "cancel(this)");
  btn2.setAttribute("class","rem")
  btn2.appendChild(btn2Text);
  li.appendChild(btn2);
  list.appendChild(li);
  e.previousSibling.remove();
  e.remove();
  add.disabled = true;
  remov.disabled = true;
  add.className += " bold";
  remov.className += " bold";
  
}
function update(e) {
  var inp = e.parentNode.childNodes[0];
  if (input.value == "") {
    alert("Enter value!");
  } else {
    var li = e.parentNode;
    inp.value = input.value;
    input.value = "";
    var btn = document.createElement("button");
    var btnTxt = document.createTextNode("Delete");
    btn.setAttribute("class","rem")
    btn.appendChild(btnTxt);
    btn.setAttribute("onclick", "remove(this)");

    li.appendChild(btn);

    var btn2 = document.createElement("button");

    var btnTxt2 = document.createTextNode("Edit");

    btn2.setAttribute("onclick", "editItem(this)");
    btn2.appendChild(btnTxt2);
    li.appendChild(btn2);
    e.nextSibling.remove();
    e.remove();
    add.disabled = false;
    remov.disabled = false;
    
  }
}
function cancel(e) {
  var li = e.parentNode;
  var inp = e.parentNode.childNodes[0];
  var inpVal = inp.value;
  inp.value = inpVal;
  input.value = "";
  e.parentNode.childNodes[2].remove();
  e.parentNode.childNodes[2].remove();
  var btn = document.createElement("button");
  var btnTxt = document.createTextNode("Delete");
  btn.setAttribute("class","rem")
  btn.appendChild(btnTxt);
  btn.setAttribute("onclick", "remove(this)");

  li.appendChild(btn);

  var btn2 = document.createElement("button");

  var btnTxt2 = document.createTextNode("Edit");

  btn2.setAttribute("onclick", "editItem(this)");
  btn2.appendChild(btnTxt2);
  li.appendChild(btn2);
  input.value = "";
  add.disabled = false;
  remov.disabled = false;
  
}
var inputText = document.getElementById("input");
inputText.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("add").click();
  }
});
