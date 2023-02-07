var arrlists = [];
function AddTask() {
  var task = document.getElementById("inputVaule").value;
  if (task == "") {
    alert("please enter value");
    return;
  }
  var item = {
    id: arrlists.length == 0 ? 1 : arrlists[arrlists.length - 1].id + 1,
    text: task,
    checked: false,
  };
  arrlists.push(item);
  document.getElementById("inputVaule").value = "";
  drawTabs();
}

function drawTabs() {
  document.getElementById("pills-home").innerHTML = drawItems(arrlists);

  document.getElementById("pills-profile").innerHTML = drawItems(
    arrlists.filter((x) => x.checked != true)
  );

  document.getElementById("pills-contact").innerHTML = drawItems(
    arrlists.filter((x) => x.checked == true)
  );
}

function drawItems(list) {
  var items = ``;
  for (var i = 0; i < list.length; i++) {
    if (list[i].checked == true) {
      items += `<div class="list">
       <input class="form-check-input checked" type="checkbox" checked onchange="checkItem(${list[i].id})"  >
      <label class="form-check-label done" >
         ${list[i].text}
       </label> </div>
       `;
    } else {
      items += `<div class="list"> <input class="form-check-input" type="checkbox" onchange="checkItem(${list[i].id})" >
      <label class="form-check-label">
         ${list[i].text}
       </label>
       </div>
       `;
    }
  }

  return items;
}

function checkItem(id) {
  var index = arrlists.findIndex((x) => x.id == id);
  if (arrlists[index].checked) {
    arrlists[index].checked = false;
  } else {
    arrlists[index].checked = true;
  }

  console.log(arrlists);
  drawTabs();
}
