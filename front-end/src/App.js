import { useEffect, useState } from "react";
import axios from "axios";
import { ProductsCard } from "./layout/ProductsCard";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    const result = await axios.get("http://localhost:5000/");
    setProducts(result.data);
    console.log("Data received from PRODUCT-SERVICE and populated on page");
  }, []);
  return (
    <div className="App">
      {products.map((p) => {
        return (
          <div key={p.id}>
            <ProductsCard product={p} />
            <p />
          </div>
        );
      })}
    </div>
  );
}

export default App;
