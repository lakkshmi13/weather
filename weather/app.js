function fetch_data() {
  var cityname = document.getElementById("city").value;
  console.log(cityname);
  if (cityname === "") {
    alert("Enter the city name");
  }
  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityname +
    "&appid=38a12558f448a7ea5d253a8aabafe787&units=metric";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      var resp_code = data["cod"];
      if (resp_code === "404") {
        alert("City not found");
      } else {
        var cityTemp = data["main"]["temp"];
        console.log(cityTemp);
        var icon = data["weather"]["0"]["icon"];
        console.log(icon);
        var icon_url = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.getElementById("result").innerHTML =
          "<img src=" +
          icon_url +
          ">" +
          "<br>" +
          "<h3>Temperature is :" +
          cityTemp +
          "&deg;C</h3>";
      }
    });
}
