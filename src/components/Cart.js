import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../features/products/cartSlice";

const Cart = () => {
  const productCartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeToCart = (id) => {
    dispatch(remove(id));
  };


  const isCartEmpty = productCartData.length === 0;

  return (
    <>
      <div className="text-center mb-5">
        <h1>Product Dashboard</h1>
      </div>
      <div className="row">
        {isCartEmpty ? (
          <div className="text-center">
            <h2 style={{color:"red"}}>Your Cart is Empty!</h2>
          </div>
        ) : (
          productCartData.map((product) => (
            <div className="col-md-4" key={product.id}>
              <Card style={{ width: "18rem", marginBottom: "10px" }} className="h-100">
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
                    <Button variant="danger" onClick={() => removeToCart(product.id)}>
                      Remove From Cart
                    </Button>
                  </Card.Footer>
                </div>
              </Card>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Cart;
