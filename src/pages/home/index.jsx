import React, { useState, useEffect, useCallback } from "react";
import Layout from "../../layout";
import ProductCards from "../../components/Cards";
import Panel from "../../components/Panel";
import { fetchProducts } from "../../utils/fetchProducts";
import useCart from "../../hooks/useCart"

const Home = () => {
  const [cart, setCart] = useCart()
  const [products, setProducts] = useState([])


  const addToCart = useCallback((product) => {
    setCart((currentCart) => currentCart.concat(product))
  }, [setProducts]);

  

  useEffect(() => {
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
    <Panel/>
      <ProductCards products={products} addToCart={addToCart}/>
    </Layout>
  );
};

export default Home;

