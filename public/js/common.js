$(document).ready(function(event) {

    var url = window.location.search;
  console.log(url)
  console.log(window.location.href)
  
  if (url.indexOf("?id=") !== -1) {
    id = url.split("=")[1];
    console.log(id)
    getid(id);
  }
  });


function getid(id){
$.get("/api/applications/"+ id, appData => {
        var newDiv="";
        for (var i=0; i <appData.length; i++) {
            newDiv += "<div class='appBox'>";
            newDiv += "<h3>"+appData[i].dealer.business_name+"</h3><br><br>";
            newDiv += "owner: "+appData[i].dealer.owner+"<br>";
            newDiv += "contact: "appData[i].dealer.email+"</div>";
            var date = appData[i].dealer.createdAt;
            dateSplit = date.split("T");
            newDiv += "created on " + dateSplit[0] + "<br>"+appData[i].dealer.state+"</div></div>";
        }
    $(".collectApps").prepend(newDiv);
});
}