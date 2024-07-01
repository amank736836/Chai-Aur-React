import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  // const {products, loading, error } = CustomReactQuery('/api/products')
  // const [products, loading, error ] = CustomReactQuery('/api/products')

  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const [search, setSearch] = useState("");
  const [urlPath, setUrlPath] = useState("/api/products");


  useEffect(() => {

    const controller = new AbortController();

    async function fetchData() {
      if (search) {
        setUrlPath(`/api/products?search=${search}`);
      }else{
        setUrlPath('/api/products');
      }

      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(urlPath, {
          signal: controller.signal,
        })
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if(axios.isCancel(error)){
          console.log('Request Cancelled', error.message);
          return;
        }
        // console.error(error);
        setError(true);
        setLoading(false);
      }
    }
    fetchData();

    // Cleanup
    return () => {
      controller.abort();
    }

  }, [search])

  // if (error) {
  //   return <h1>Something went wrong</h1>
  // }

  // if (loading) {
  //   return <h1>Loading...</h1>
  // }

  return (
    <>
      <h1>Chai aur Api in react</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      {loading && <h1>Loading...</h1>}
      {error && <h1>Something went wrong</h1>}

      <h2>Number of Products are : {products.length}</h2>
    </>
  );
}

export default App;

const CustomReactQuery = (urlPath) => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get('/api/products')
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        // console.error(error);
        setError(true);
        setLoading(false);
      }
    }
    fetchData();
  }, [])

  // return { products, loading, error }
  return [products, loading, error];
};
