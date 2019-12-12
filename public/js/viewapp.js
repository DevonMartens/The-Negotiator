$(document).ready(function(event) {

    var url = window.location.search;
  
  if (url.indexOf("?id=") !== -1) {
    id = url.split("=")[1];
    getid(id);
  }
  });

  function getid(id){
      $.get("/api/viewApp/"+id, data =>{
          console.log(data)
          var furnished;
          if(data.furnished){
            furnished = "yes";
          } else {
              furnished = "no";
          }

          var accidents; 
          if(data.recent_accidents){
              accidents = "yes";
          } else {
              accidents = "no"
          }

          var newDiv = "<div class='boxForm'><h3>Car Dealership Insurance Form</h3><br><br>"+
                        "<div class='personalInfo'><h4 style='text-align:center;'>Personal Information</h4><hr><h4>Business Name: "+data.dealer.business_name+"</h4><br>Business Owner:"+
                        data.dealer.owner+"<br><br>Address: "+data.dealer.address+", "+ data.dealer.state+", "+data.dealer.zip+"<br> Additional Addresses:"+data.additional_addresses+
                        "<br><br>Years in Industry: "+data.years_inBusiness+"<br>Dealership Years: "+ data.businessOpen_years+"<br>Phone Number: "+data.dealer.phone_number+ "<br>Email:"+data.dealer.email+
                        "<br>"+
                        "</div>"+
                        "<br><br><div class='businessInfo'><h4 style='text-align:center;'>Business Information</h4><hr><br>"+
                        data.previous_insuranceName+"<br>"+
                        data.previous_insuranceYears+"<br>"+
                        data.previous_insuranceClaims+"<br>"+
                        data.business_nature+
                        
                        "</div>"+
                        "<br><br><div class='employeeInfo'><h4 style='text-align:center;'>Employee Information</h4><hr><br>"+
                        data.dealer.owner+"<br><br>"+
                        data.dob_employees+"<br>"+
                        data.drivers_license+"<br>"+
                        furnished+"<br>"+
                        accidents+"<br>"+
                        data.num_employees+"<br>"+
                        "</div>"+
                        "<br><br><div class='insuranceInfo'><h4 style='text-align:center;'>Insurance Information</h4><hr><br>"+
                        data.insurance_type+"<br>"+
                        data.miles_driven+"<br>"+
                        data.num_plates+"<br>"+
                        data.num_lotCars+"<br>"+
                        data.lot_worth+"<br>"+
                        data.lot_protection+
                        "<hr></div>"
    
        $(".appBody").append(newDiv)
        
      })
  }