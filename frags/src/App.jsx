import ErrorMessage from "./components/errorMessage";
import FoodItems from "./components/foodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItems = ["Dal", "Paneer", "Milk", "Dry Fruit", "Curd", "Ghee"];

  return (
    <>
      <center>
        <h1 className="foodHeading GH-span">Healthy Food</h1>
      </center>
      <ErrorMessage foodArray={foodItems} />
      <FoodItems foodArray={foodItems} />
    </>
  );
}

export default App;
