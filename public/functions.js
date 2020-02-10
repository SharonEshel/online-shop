// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

async function logout() {
try{
	let response=await fetch("/", {
		body: "",
		method: 'GET',
		headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json; charset=utf-8'
            }
		});
	}
	catch (error) { console.error('Error: ', error); }
}


async function login() {
	
	try{	
		let response=await fetch("/users/login", {
		body: JSON.stringify({userName:document.getElementById("userName").value,userPassword:document.getElementById("userPassword").value}),
		method: 'POST',
		headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json; charset=utf-8'
            }
		});
		let answer = await response.text();
		if (answer!='OK')
			alert(answer);
		else
		{
			document.getElementById('id01').style.display='none';
			let premissionsResponse=await fetch("/users/premissions", {
			body: JSON.stringify({userName:document.getElementById("userName").value}),
			method: 'POST',
			headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json; charset=utf-8'
            }
			});
			let premissionsAnswer = await premissionsResponse.text();
			//alert(premissionsAnswer);
			if (premissionsAnswer=="manager")
			{
				$("li:hidden").show();
				$(".login").hide();
			}
			if (premissionsAnswer=="worker")
			{
				$("li.logout,li.users,li.cart,li.chat").show();
				$(".login").hide();
			}
			if (premissionsAnswer=="client" || premissionsAnswer=="supplier")
			{
				$("li.logout,li.cart,li.chat").show();
				$(".login").hide();
			}
		
		let url= "?userName=" +document.getElementById("userName").value;
		window.history.replaceState(null, null, url);
			
		}
	}
	catch (error) { console.error('Error: ', error); }
}
		


async function products() {
  $( "#body" ).load( "/products" );
}

async function about() {
  $( "#body" ).load( "/about" );
}

async function contactUs() {
  $( "#body" ).load( "/contactUs" );
}

async function users() {
  var urlParams = new URLSearchParams(window.location.search);
  userNameParam = urlParams.get('userName');
  //alert(userNameParam);
  let premissionsResponse=await fetch("/users/premissions", {
			body: JSON.stringify({userName:userNameParam}),
			method: 'POST',
			headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json; charset=utf-8'
            }
			});
			let premissionsAnswer = await premissionsResponse.text();
			if (premissionsAnswer=="manager")
				$( "#body" ).load( "/users" );
			if (premissionsAnswer=="worker")
				$( "#body" ).load( "/users/forWorker" );
}

async function branches() {
  $( "#body" ).load( "/branches" );
}

async function cart() {
	var urlParams = new URLSearchParams(window.location.search);
	userNameParam = urlParams.get('userName');
	//alert(userNameParam);
	let url= "/cart/" +userNameParam;
	//alert("url from cart "+url);
	$( "#body" ).load( url );
  }

async function chat() {
	var urlParams = new URLSearchParams(window.location.search);
	userNameParam = urlParams.get('userName');
	//alert(userNameParam);
	let url= "/chat/" +userNameParam;
	//alert("url from chat "+url);
	$( "#body" ).load(url);
  }


async function loadNav() {
	var urlParams = new URLSearchParams(window.location.search);
	userNameParam = urlParams.get('userName');
	let premissionsResponse=await fetch("/users/premissions", {
			body: JSON.stringify({userName:userNameParam}),
			method: 'POST',
			headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json; charset=utf-8'
            }
			});
			let premissionsAnswer = await premissionsResponse.text();
			//alert(premissionsAnswer);
			if (premissionsAnswer=="manager")
			{
				$("li:hidden").show();
				$(".login").hide();
			}
			if (premissionsAnswer=="worker")
			{
				$("li.logout,li.users,li.cart,li.chat").show();
				$(".login").hide();
			}
			if (premissionsAnswer=="client" || premissionsAnswer=="supplier")
			{
				$("li.logout,li.cart,li.chat").show();
				$(".login").hide();
			}
}


async function onLoad() {
	//alert("אנחנו באון לואוד");
    if (window.location.href.includes('#')) {
        let choose = window.location.href.substr(window.location.href.indexOf('#') + 1);
		if(choose== "about")
			about();
		else if(choose== "catalog")
			products();
		else if(choose== "contactUs")
			contactUs();
		else if(choose== "users")
			users();
		else if(choose== "branches")
			branches();
		else if(choose== "cart")
			cart();
		else if(choose== "chat")
			chat();

	}
	loadNav();
}

let myTimeout;
let timeout;
	
function waiting()
{
    $("#id06").modal('show');

	timeout = setTimeout(() => {
		$("#id06").modal('hide');
        $("#id07").modal({backdrop : 'static', keyboard : false, show : true});

        clearTimeout(timeout)
    }, 5000);
	
	//myVar = setTimeout(function(){ $("#id06").modal('hide'); $("#id07").modal('show'); clearTimeout(myTimeout);}, 5000);

	//clearTimeout(myTimeout);
	
}

function stopWaiting()
{
    $("#id06").modal('hide');

    clearTimeout(timeout);
}
		
		
		
		
		
		