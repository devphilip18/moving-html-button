var flag=1;
var right=1;
var left=0;
var texts = ["Not Now!","Not Yet!","Try Again!","You Noob!","Keep trying!"];


function myFunction(){
	validate();
}

function validate(){
	
	var username=document.getElementById("uname").value; 
	var passwd=document.getElementById("pwd").value;
	var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	
	if ( username==null || username=="" || passwd==null || passwd=="" || !(username.toLowerCase().match(emailRegex)) || passwd.length<8 ){  
		flag=1;
	}
	
	else{
		flag=0;
	}
	moveButton();
  
}


function random_item(i){ 
	return i[Math.floor(Math.random()*i.length)];    
}

function moveButton(){
	
	if(flag==0){
		document.getElementById("btn").value="Submit";
		right=0;
		left=0;
	}
	else{
		document.getElementById("btn").value=random_item(texts);
		if(right==1){
			document.getElementById("btn").style.left = "120px";
			right=0;
			left=1;
		}
		else{
			document.getElementById("btn").style.left = "-120px";
			left=0;
			right=1;
		}	
	}	
}

function success(){
	alert("Hooray!");
}
