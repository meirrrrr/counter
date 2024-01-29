function getData() {
  const year = 2023;
  const long = 43.238293;
  const lat = 76.945465;

  const inf = null;

  fetch(`https://namaz.muftyat.kz/kk/api/times/${year}/${long}/${lat}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      inf = data;
    })
    .catch((error) => console.log(error));

  console.log(inf);
}
