function myFunction() {
    
    var user = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;
    var hashpass = stringToHash(pass);
    if(user == "Sarthak" && hashpass =="Sarthak1001"){
      location.replace("http://localhost/Sarthak/")
    }
    else if(user == "Gulati" && hashpass =="Gulati1001"){
      location.replace("http://localhost/Gulati/")
    }
	else if(user == "19BCT0119" && hashpass =="19BCT01191001"){
      location.replace("http://localhost/19BCT0119/")
    }
    else if(user == "Admin" && hashpass =="Admin1001"){
      location.replace("http://localhost/Admin/")
  }
  function stringToHash(string) {
                  
                var hash = 0;
                  
                if (string.length == 0) return hash;
                  
                for (i = 0; i < string.length; i++) {
                    char = string.charCodeAt(i);
                    hash = ((hash << 5) - hash) + char;
                    hash = hash & hash;
                }
                
                return hash;
            }
