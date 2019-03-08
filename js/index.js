function showalert(){
  alert("trying to calculate your BMI......");
  var BMI = (document.getElementById("wgtn").value/document.getElementById("hgtn").value/document.getElementById("hgtn").value).toFixed(2);
  var x =document.createElement("P");
  x.setAttribute("id","BMI");
  var t = document.createTextNode("your BMI is "+String(BMI));
  x.appendChild(t);
  document.body.appendChild(x);
}
function showconfirm(){
  var choice = confirm("calculate your BMI?");
  if (choice){
    showalert();
  }
  else{alert("Are you sure you don't want to know it?");}
}
function dochange(){
  var choice = confirm("An idiot cannot see the text of the webpage. Do you admit you are an idiot?");
  if(choice){
  alert("ok you are very honest");
  var wgt = document.getElementById("wgt");
  var hgt = document.getElementById("hgt");
  wgt.innerHTML = "Your weight(kg): "
  hgt.innerHTML = "Your height(m):"
  var wgtn = document.createElement("INPUT");
  wgtn.setAttribute("type","number");
  wgtn.setAttribute("value","60");
  wgtn.setAttribute("id","wgtn");
  wgt.appendChild(wgtn);
  var hgtn = document.createElement("INPUT");
  hgtn.setAttribute("type","number");
  hgtn.setAttribute("value","1.7");
  hgtn.setAttribute("id","hgtn");
  hgt.appendChild(hgtn);
  }
  else{
    alert("ok let's see if you can find where to input your weight and height")
  }
}
function chinese(){
    var wgt = document.getElementById("wgt");
  var hgt = document.getElementById("hgt");
  var cal = document.getElementById("cal");   var can = document.getElementById("can");
  wgt.innerHTML = "你的体重（千克）：";
  hgt.innerHTML = "你的身高（米）：";
  cal.value = "计算";
  can.value = "看不清";
  
}