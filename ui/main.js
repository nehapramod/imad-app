//submit username/password to login
var nameInput=document.getElementById('name');
//var name = nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
     //create a request object
    var request=new XMLHttpRequest();
    
    
    //capture response in a variable
    
    request.onreadystatechange=function(){
        
        if(request.readyState==XMLHttpRequest.DONE){
        //take some action
    
    
        if(request.status==200){
             console.log('userlogged in');
             alert('logged in successfully');
            
        }
         else if (request.status==403)
         {
             alert('username/password is incorrect');
         }
         else if (request.status==500)
         {
             alert('something went wrong on the server');
         }
        
        } 
        
        //not done yet
        
        
    };
    
    var username = document.getElementById('username').value;
     var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    //make the request
    request.open('POST','http://nehapramod27.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username:username,password:password}));
    //Make a request to server and send name
    
    
    };
    