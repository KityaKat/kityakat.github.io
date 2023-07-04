const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const d = new Date();
let day = weekday[d.getDay()];
let name = month[d.getMonth()];
document.write(
  day + ", " + name + " " + new Date().getDate() + ", " + new Date().getFullYear()
);

if (day == "Monday") {
  document.writeln(
    " 🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
  );
} else if (day == "Tuesday") {
  document.writeln(
    " 🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
  );
} else {
  document.writeln(" ");
}
