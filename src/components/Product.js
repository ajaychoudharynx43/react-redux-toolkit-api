import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../features/products/cartSlice";
import { getProducts } from "../features/products/productApiSlice";
import { ColorRing } from 'react-loader-spinner';

const Product = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const { data: products, status, error } = useSelector((state) => state.products);
  const [showProducts, setShowProducts] = useState(false);



  // const {data: products} = useSelector(state => state.products)
  // const getProductsData = async () => {
    // try {
    //   const response = await fetch("https://fakestoreapi.com/products");
    //   const data = await response.json();
    //   console.log(data, "myData");
    //   setProducts(data);
    // } catch (error) {
    //   console.log(error);
    // }
   


  // };

  useEffect(() => {
    dispatch(getProducts())
    const timer = setTimeout(() => {
      setShowProducts(true);
    }, 10000);

  return () => clearTimeout(timer);
  }, [dispatch]);

  if(status === 'loading'){
    return  <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '65vh'
    }}>
  <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#0d6efd', '#0d6efd', '#0d6efd', '#0d6efd', '#0d6efd']}
  />
    </div> 
    
  }




  const addToCart = (product) => {
    const isProductinCart = cartItems.some((item) => item.id === product.id);
    if (isProductinCart) {
      alert("This item is alerdy in your cart!");
    } else {
      dispatch(add(product));
    }
  };

  const cards = products.map((product, id) => {
    return (
      <>
        <div className="col-md-3">
          <Card
            style={{ width: "18rem", marginBottom: "10px" }}
            key={product.id}
            className="h-100"
          >
            <div className="text-center">
              <Card.Img
                variant="top"
                src={product.image}
                style={{ width: "100px", height: "130px" }}
              />
            </div>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>INR - {product.price}</Card.Text>
            </Card.Body>
            <div className="text-center">
              <Card.Footer>
                <Button variant="primary" onClick={() => addToCart(product)}>
                  Add To Cart
                </Button>
              </Card.Footer>
            </div>
          </Card>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="text-center mb-5">
        <h1>Product Dashboard</h1>
      </div>
      <div className="row">{cards}</div>
    </>
  );
};

export default Product;
