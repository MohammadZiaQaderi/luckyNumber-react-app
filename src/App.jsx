function App() {
  const name="Zia";
  const luckyNumber=Math.floor(Math.random()*10);
   return (<div>
    <h1>Hello, {name}</h1>
    <p>Your lucky number is {luckyNumber}</p>
   </div>);
}
export default App;