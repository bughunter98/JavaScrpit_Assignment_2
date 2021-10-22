var userList =[];
function addPerson()
    { 
        var userName=document.sample.username.value; 
        var password=document.sample.pwd.value; 
        var name = document.sample.name.value;
        var dateBirth = document.sample.dob.value;
        var address = document.sample.address.value;
        var email = document.sample.email.value;
        var gender = document.sample.gender.value;
        var language = document.sample.language.value;
        var about = document.sample.about.value;

            if(userName.length<3 || !userName)
            {
                alert("Invalid Username");
            }
            else if(password.length<6 || !password)
            {
                alert("Invalid Password");
            }
            else if(name.length<3 || !name)
            {
                alert("Invalid Name");
            }
            else if(!dateBirth)
            {
                alert("Please Enter Date of Birth");
            }
            else if(!email)
            {
                alert("Empty Email Field . Please Enter Email");
            }
            else if(!gender)
            {
                alert("Please Choose Gender");
            }
            else
            {
                
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(sample.email.value))
                {
                    if(userList.includes(userName)){  // Bonus 1
                        alert("User Name already exists ..");
                        var userName1 = userList;
                        var textBox = document.getElementById("textBox");
                        textBox.value = "New User Name Suggestion  ''"+userName1+dateBirth+"''";// Bonus 2 

                    }
                    else
                    {
                       userList.push(userName); 
                       var tr = document.createElement('tr');
        
                        var td1 = tr.appendChild(document.createElement('td'));
                        //var td2 = tr.appendChild(document.createElement('td'));
                        var td3 = tr.appendChild(document.createElement('td'));
                        var td4 = tr.appendChild(document.createElement('td'));
                        var td5 = tr.appendChild(document.createElement('td'));
                        var td6 = tr.appendChild(document.createElement('td'));
                        var td7 = tr.appendChild(document.createElement('td'));
                        var td8 = tr.appendChild(document.createElement('td'));
                        var td9 = tr.appendChild(document.createElement('td'));
            
            
                        td1.innerHTML=userName;
                        //td2.innerHTML=password;
                        td3.innerHTML=name;
                        td4.innerHTML=dateBirth;
                        td5.innerHTML=address;
                        td6.innerHTML=email;
                        td7.innerHTML=gender;
                        td8.innerHTML=language;
                        td9.innerHTML=about;
    
                        document.getElementById("tbl").appendChild(tr);         
                                    
                    }      
                }
                else
                {
                    alert("Enter a valid Email Address");
                }

            }

            
    
    }
