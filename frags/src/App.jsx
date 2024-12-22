
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {

  let foodItems =["Dal","Paneer","Milk","Dry Fruit","Curd","Ghee"];
  let emptyMessage=foodItems.length===0?<h3>I am still Hungry</h3>:null;
  return (
    <>
      <h1>Healthy Food</h1>
      {emptyMessage}
      <ul className="list-group">
        {foodItems.map((item) => ( 
          <li key={item} className="list-group-item">{item}</li>
          ))}  
      </ul>
    </>
  );
}

export default App;
