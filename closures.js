function outer() {
  let color = "green";
  function inner() {
    console.log(color);
  }
  inner();
}
outer();

// The output of above code will be green, this is because of lexical scoping,
// The inner function has access to the variables of outer function.

const anotherOuter = () => {
  let anotherColor = "blue";
  const anotherInner = () => {
    console.log(anotherColor);
  };
  anotherInner();
};
anotherOuter();

// The above code will print blue, and the reason is lexical scoping.

function inner() {
  let someValue = 90;
  function displayValue() {
    console.log(someValue);
  }
  return displayValue;
}

const func = inner();
func();
