import React from "react";
import Layout from "../../layout";
import ProductCards from "../../components/Cards";
import { fetchProducts } from "../../utils/fetchProducts";
import Panel from "../../components/Panel";

// Import necessary dependencies

const Home = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <Panel />
      <ProductCards products={products} />
    </Layout>
  );
};

export default Home;
