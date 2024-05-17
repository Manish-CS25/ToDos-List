// import logo from "./logo.svg";
import "./App.css";
import Header from "./myComponent/header";
import ToDositem from "./myComponent/ToDositem";
import Footer from "./myComponent/Footer";

function App() {
  // let myName = "John Doe";
  return (
    <>
      <Header title="My ToDos List" searchBar={false} />
      <ToDositem />
      <Footer />
    </>
  );
}

export default App;
