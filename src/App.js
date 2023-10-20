import { useState } from "react";

function App() {
  var [input, inputSet] = useState("");
  var [main, mainSet] = useState("Clouds");
  var [description, descriptionSet] = useState("Broken Clouds");
  var [temp, tempset] = useState("0");
  function getData() {
    console.log();
    var fetchstatus = fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        input +
        "&appid=ee949cc184264765ad2f53c854eb1a81"
    ).then(function (res) {
      return res.json();
    });
    fetchstatus.then(function (data) {
      var f = data.main.temp;
      var c = f - 273.15;
      mainSet(data.weather[0]["main"]);
      descriptionSet(data.weather[0]["description"]);
      tempset(Math.floor(c));
    });
  }
  function inputVal(e) {
    inputSet(e.target.value);
  }
  return (
    <div className="background">
      <div className="container">
        <h1 className="weather">WEATHER</h1>
        <input
          type="text"
          className="Inputcls"
          placeholder="City Name"
          id="inputid"
          onChange={inputVal}
          value={input}
        />
        <br />
        <br />
        <button type="button" className=" submit" onClick={getData}>
          {" "}
          submit
        </button>
        <br />

        <span className="getdata">{temp}°C </span>
        <span className="textdata">
          {main}, {description}
        </span>
      </div>
      
    </div>
  );
}

export default App;
