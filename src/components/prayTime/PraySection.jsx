import { useState } from "react";

function PraySection() {
  const [location, setLocation] = useState(null);
  const [prayTime, setPrayTime] = useState(null);

  function handleClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longtitude = position.coords.longitude;
    const year = 2023;
    console.log(latitude + " " + longtitude);

    fetch(`https://namaz.muftyat.kz/kk/api/times/2023/43.238293/76.945465`)
      .then((response) => response.json())
      .then((data) => {
        setPrayTime(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  return (
    <div className="time-container">
      {!location ? <button onClick={handleClick}>Get Location</button> : null}
      {location && !prayTime ? <p>Loading weather data...</p> : null}
      <p>{prayTime}</p>
    </div>
  );
}

export default PraySection;
