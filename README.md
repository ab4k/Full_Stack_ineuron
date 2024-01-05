# Full_Stack_ineuron
## Closure Application project
A simple background changer is implemented using the concept of JS closure.
 
```JavaScript
function changeColor(color) {
  return function () {
    document.body.style.backgroundColor = `${color}`;
  };
}
function painter(color) {
  document.getElementById(color).onclick = changeColor(color);
}
const colors = [
  "violet",
  "indigo",
  "blue",
  "green",
  "yellow",
  "orange",
  "red",
];
colors.map(painter);
```

Live Link : [Click Here](https://closure-application.netlify.app/) 
