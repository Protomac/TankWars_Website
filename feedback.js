var email;
var name;
var score;
var review;
//var submit= document.querySelector("#submit");
var emot1=document.querySelector("#emot1");
var emot2=document.querySelector("#emot2");
var emot3=document.querySelector("#emot3");
var emot4=document.querySelector("#emot4");

function checkValid()
{
	 email = document.getElementById('Email');
     name = document.getElementById('NAME').value;
     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(!filter.test(email.value))
		{
    		alert('Please provide a valid email address');
    		email.focus;
    		return false;
    	}	
    else if(name.length<=2 || name.length=="" || name.length>20)		
    	{
    		alert("Please enter a valid Name!");
    	}
	else
	{
		emot1.addEventListener("click",function()
				{ score=1;

				});
		emot2.addEventListener("click",function()
				{ score=2;

				});
		emot3.addEventListener("click",function()
				{ score=3;

				});
		emot4.addEventListener("click",function()
				{ score=4;

				});
	}	
 }
 function display()
	  {   	email=document.getElementById('Email').value;
    		name=document.getElementById('NAME').value;
    		review=document.getElementById('review').value;
    		
			console.log("Name of the customer:"+name);
			console.log("Email of customer:"+email);
			console.log("honest review of customer:"+review);
			console.log("honest score of customer:"+score);

	  }