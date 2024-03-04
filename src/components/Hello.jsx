function display() {
  return "wow!";
}

function Hello() {
  return <h1>Hello from a component! {display()}</h1>;
}

export default Hello;
