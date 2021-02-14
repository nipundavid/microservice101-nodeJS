import { useEffect, useState } from "react";
import axios from "axios";
import { ProductsCard } from "./layout/ProductsCard";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    const result = await axios.get("http://localhost:5000/");
    setProducts(result.data);
  }, []);
  return (
    <div className="App">
      {products.map((p) => {
        return (
          <div>
            <ProductsCard product={p} />
            <p />
          </div>
        );
      })}
    </div>
  );
}

export default App;
