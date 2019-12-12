$(document).ready(function () {

    $("#appSubmit").on("click", function (event) {
        event.preventDefault()

        var name = $("#name").val().trim();
        var address = $("#address").val().trim();
        var owner = $("#owner").val().trim();
        var phoneNumber = $("#phoneNumber").val().trim();
        var email = $("#email").val().trim();
        var businessType = $("#businessType").val();
        var password = $("#password").val().trim();
        var state = $("#state").val();
        var zip = $("#zip").val().trim();
        var businessURL = $("#businessURL").val().trim();
        var twitterURL = $("#twitterURL").val().trim();
        var linkedinURL = $("#linkedinURL").val().trim();
        var facebookURL = $("#facebookURL").val().trim();
        var img = $("#img").val().trim();

        var userTable = {
            email: email,
            password: password
        };

        if (!userTable.email || !userTable.password) {
            return;
        };

        var signUpInfo = {
            business_name: name,
            address: address,
            owner: owner,
            agent: businessType,
            phone_number: phoneNumber,
            email: email,
            state: state, 
            zip: zip,
            image : img,
            dealer_site: businessURL,
            twitter: twitterURL,
            linkedin: linkedinURL,
            facebook: facebookURL
        };
        userData(userTable, signUpInfo);

        if (name == "" || address == "" || owner == "" || businessType == ""|| state== "" || email  == "" || zip== ""){
        $("#p").html("Error: form is missing a field")}
    
        function userData(userTable, signUpInfo) {
            $.post("/api/signup", userTable).then(data => {
            $.get("/api/user_data", alldata => {
                var idVariable = alldata.id;
            $.post("/api/contact", signUpInfo).then(userdata => {
                window.location.replace("/member?id="+idVariable);
            });
        });
            });
        };
    });
});