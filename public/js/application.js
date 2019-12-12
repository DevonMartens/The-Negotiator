$(document).ready(function () {

    var url = window.location.search;
    console.log(url)
    console.log(window.location.href)

    if (url.indexOf("?dealer=") !== -1) {
        id = url.split("=")[1];
        console.log(id)
    } else {
    }
});


$(".btn").on("click", function (event) {
    event.preventDefault();
    var year_business = $("#year_business").val().trim();
    var yearDealer = $("#yearDealer").val();
    var address = $("#address").val().trim();
    var prev_names = $("#prev_names").val().trim();
    var prev_years = $("#prev_years").val().trim();
    var claims = $("#claims").val().trim();
    var employee = $("#employee").val().trim();
    var license = $("#license").val().trim();
    var dob = $("#dob").val();
    var furnished = $("#furnished").val();
    var employee = $("#employee").val();
    var accidents = $("#accidents").val();
    var business_type = $("#business_type").val();
    var insurance = $("#insurance").val();
    var miles = $("#miles").val().trim();
    var time = $("#time").val();
    var lot = $("#lot").val().trim();
    var worth = $("#worth").val().trim();
    var plates = $("#plates").val().trim();
    var security = $("#security").val();
    var dealerId = id

    var postApp = {
        years_inBusiness: year_business,
        businessOpen_years: yearDealer,
        additional_addresses: address,
        previous_insuranceName: prev_names,
        previous_insuranceYears: prev_years,
        lot_protection: security,
        num_employees: employee,
        previous_insuranceClaims: claims,
        drivers_license: license,
        dob_employees: dob,
        furnished: furnished,
        employee_title: time,
        recent_accidents: accidents,
        business_nature: business_type,
        insurance_type: insurance,
        miles_driven: miles,
        num_lotCars: lot,
        lot_worth: worth,
        num_plates: plates,
        dealerId : dealerId
    }
    console.log(postApp);

    $.post("/api/applications/:id", postApp).then(data => {
        alert("You made it")
        window.location.replace("/service?="+id);
    });
});
