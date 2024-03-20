import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { places } from "../available-meals";

export default function Product() {
  const [data, setData] = useState(places);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch("http://localhost:3000/meals");
  //       const data = await response.json();
  //       setData(data);
  //       setLoading(false);
  //     } catch (error) {
  //       setLoading(false);
  //       console.log(error);
  //     }
  //   }
  //   fetchData();
  // }, []);
  // if (loading) {
  //   return <h2>Loading...</h2>;
  // }
  return (
    <section id="meals">
      {data.map((item) => {
        return <ProductItem key={item.id} item={item} />;
      })}
    </section>
  );
}
