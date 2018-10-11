window.onload = function(){
	var phoneIcon = document.getElementById('phoneIcon')
	var phoneNumberBox = document.getElementById('phoneNumberBox')
	var profileBox = document.getElementById('profileBox')
	profileBox.style.opacity = "1";
	console.log("done")
}

phoneClicked = false;
function phoneClick(event){
	event.stopPropagation()
	if(phoneClicked){
		closePhone()
	}else{
		openPhone()
	}
}

function openPhone(){
	phoneNumberBox.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";
	phoneNumberBox.style.width = "126px";
	phoneNumberBox.style.right = "44";
	phoneIcon.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";
	phoneIcon.style.backgroundColor = "#5764b5";
	phoneClicked = true;
}

function closePhone(){
	phoneNumberBox.style.boxShadow = ""
	phoneNumberBox.style.width = "0px";
	phoneNumberBox.style.right = "20";
	phoneIcon.style.boxShadow = ""
	phoneIcon.style.backgroundColor = "#69a2b0";
	phoneClicked = false;
}

function stopPropagation(event){
	event.stopPropagation();
}

window.onclick = function(){
	if(phoneClicked){
		closePhone()
	}
}