var userList = [];
function addPerson() {
  let obj = {       // object containing values that are to be displayed on table
    userName: document.sample.username.value,
    name: document.sample.name.value,
    dateBirth: document.sample.dob.value,
    email: document.sample.email.value,
    gender: document.sample.gender.value,
  };
  let obj1 = {    
    language: document.sample.language.value,
    password: document.sample.pwd.value,
    address: document.sample.address.value,
    about: document.sample.about.value,
  };
  let userNameRegex = /^[a-zA-Z0-9]+$/;
  let nameRegex = /^[a-zA-Z][a-zA-Z\s]+$/;
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var nowDate = new Date();
  var inputDate = new Date(obj.dateBirth);
  if (
    Object.keys(obj.userName).length <= 6 ||
    !obj.userName ||
    !userNameRegex.test(sample.username.value)
  ) {
    // username validation
    alert("Invalid Username");
  } else if (
    Object.keys(obj1.password).length < 7 ||
    Object.keys(obj1.password).length > 12 ||
    !obj1.password
  ) {
    // password validation
    alert("Invalid Password");
  } else if (
    Object.keys(obj.name).length < 3 ||
    !obj.name ||
    !nameRegex.test(sample.name.value)
  ) {
    //name validation
    alert("Invalid Name");
  } else if (
    !obj.dateBirth ||
    nowDate.getFullYear() - inputDate.getFullYear() < 18
  ) {
    alert("Invalid Date of Birth");
  } else if (!obj.email) {
    alert("Empty Email Field . Please Enter Email");
  } else if (!obj.gender) {
    alert("Please Choose Gender");
  } else if (!obj1.language) {
    alert("English is default language please select english");
  } else {
    if (emailRegex.test(sample.email.value)) {
      //email validation
      if (userList.includes(obj.userName)) {
        // Bonus 1
        alert("User Name already exists ..");
        //let userName1 = userList;
        let textBox = document.getElementById("textBox");
        textBox.value =
          "New User Name Suggestion :''" +
          obj.userName +
          obj.dateBirth.slice(2, 4);
        ("''"); // Bonus 2
      } else {
        userList.push(obj.userName);
        let tr = document.createElement("tr");
        for (let property in obj) {
          tr.appendChild(document.createElement("td")).innerHTML =
            obj[property];
        }
        // tr.appendChild(document.createElement("td")).innerHTML=obj.name;
        // tr.appendChild(document.createElement("td")).innerHTML=obj.dateBirth;
        // tr.appendChild(document.createElement("td")).innerHTML=obj.address;
        // tr.appendChild(document.createElement("td")).innerHTML=obj.email;
        // tr.appendChild(document.createElement("td")).innerHTML=obj.gender;
        // tr.appendChild(document.createElement("td")).innerHTML=obj.language;
        // tr.appendChild(document.createElement("td")).innerHTML=obj.about;

        document.getElementById("tbl").appendChild(tr);
      }
    } else {
      alert("Enter a valid Email Address");
    }
  }
}
