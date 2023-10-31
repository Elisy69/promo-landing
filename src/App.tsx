import Cover from "./components/cover/Cover";
import Gifts from "./components/gifts/Gifts";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Cover />
      <Gifts />
    </div>
  );
}

export default App;
