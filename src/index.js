let weather = {};
console.log(weather);

weather = {
  temp: 20,
  humidity: 80
};

console.log(weather);

console.log(weather.temp);
console.log(weather.humidity);

weather = {
  temp: 20,
  humidity: 80,
  windSpeed: 100
};
console.log(weather);

console.log(weather["windSpeed"]);
console.log(weather["temp"]);
console.log(weather["humidity"]);

let forecast = [
  {
    day: "Monday",
    temp: 20
  },
  {
    day: "Tuesday",
    temp: 22
  },
  {
    day: "Wednesday",
    temp: 27
  },
  {
    day: "Thursday",
    temp: 23
  },
  {
    day: "Friday",
    temp: 20
  },
  {
    day: "Saturday",
    temp: 18
  },
  {
    day: "Sunday",
    temp: 15
  }
];

console.log(forecast);
