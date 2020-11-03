// function onSubmit(){
//     var strOne = document.getElementById("Name").value;
//     var strTwo = document.getElementById("Address").value;
//     var strThree = document.getElementById("Email").value;
//     var strFour = document.getElementById("Phone").value;

//     alert(`
//     The Name is :-  ${strOne}
//     The Address is :- ${strTwo}
//     The Email is :- ${strThree}
//     The Phone is :- ${strFour}

//     `);

//     console.log(`
//     The Name is :-  ${strOne}
//     The Address is :- ${strTwo}
//     The Email is :- ${strThree}
//     The Phone is :- ${strFour}

//     `);
//   }

  function onValidate(phone){
      var regex = /^[7-9]\d{9}$/;
      var regex2 = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/;

    var  name1 = document.getElementById("Name").value;
    var  address1 = document.getElementById("Address").value;
    var  mobile1 = document.getElementById("Phone").value;
    var  email1 = document.getElementById("Email").value;

   
    if(name1.trim().length < 3){
        alert("Name Must be atleast 3 characters");
        console.log("Name Must be atleast 3 characters");
        return false;
        
    }
    else if(address1.trim().length < 3  ){
        alert("Address Must be atleast 3 characters");
        console.log("Address Must be atleast 3 characters");
        return false;
        
    }
    else if(address1.trim().length > 50  ){
        alert("Address Must not be more than 50 characters");
        console.log("Address Must not be more than 50 characters");
        return false;
    }

    else if(!regex.test(mobile1)){
        alert("Invalid Phone Number");
        console.log("InValid Mobile No.");
        return false;
        
    }else if(regex2.test(email1)){
     console.log("Valid Email Address");
    }
    else if(!regex2.test(email1)){
        alert("Please Enter a valid email address...");
       return false;   
    }
    

    var strOne = document.getElementById("Name").value;
    var strTwo = document.getElementById("Address").value;
    var strThree = document.getElementById("Email").value;
    var strFour = document.getElementById("Phone").value;

    alert(`
    The Name is :-  ${strOne}
    The Address is :- ${strTwo}
    The Email is :- ${strThree}
    The Phone is :- ${strFour}

    `);

    console.log(`
    The Name is :-  ${strOne}
    The Address is :- ${strTwo}
    The Email is :- ${strThree}
    The Phone is :- ${strFour}

    `);
  }



