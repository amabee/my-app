"use client";
import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const products = [
  { barcode: "1001", p_name: "Bulad", price: 10 },
  { barcode: "1002", p_name: "Mantika", price: 30 },
  { barcode: "1003", p_name: "Noodles", price: 20 },
  { barcode: "1004", p_name: "Sabon", price: 35 },
  { barcode: "1005", p_name: "Shampoo", price: 15 },
];

export default function Home() {
  const [barcode, setBarcode] = useState("");
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [orders, setOrders] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [cash, setCash] = useState("");
  const [totalChange, setTotalChange] = useState(0);
  const [previousSales, setPreviousSales] = useState(0);
  const quantityInputRef = useRef(null);
  const nextRef = useRef(null);
  const [textColor, setTextColor] = useState({ color: "red" });


  const handleBarcodeChange = (e) => {
    const enteredBarcode = e.target.value;
    setBarcode(enteredBarcode);
    const foundProduct = products.find((p) => p.barcode === enteredBarcode);
    setProduct(foundProduct || {});
  };

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (product.p_name) {
        const newOrder = {
          ...product,
          quantity,
          amount: product.price * quantity,
        };
        setOrders([...orders, newOrder]);
        setBarcode("");
        setProduct({});
        setQuantity(1);
        quantityInputRef.current.focus();
      }
    }
  };

  const handlePlusKeyPress = (e) => {
    if (e.key === "+") {
      e.preventDefault();
      nextRef.current.focus();
    }
  };

  const handleCashChange = (e) => {
    const enteredCash = Number(e.target.value);
    setCash(enteredCash);
    setTotalChange(enteredCash - totalAmount);

    if(enteredCash > totalAmount){
        setTextColor({color: "green"});
    }
    
    if(enteredCash < totalAmount){
        setTextColor({color: "red"});
    }

    if(enteredCash == totalAmount){
        setTextColor({color: "black"});
    }

  };

  useEffect(() => {
    const total = orders.reduce((acc, order) => acc + order.amount, 0);
    setTotalAmount(total);
  }, [orders]);

  const handleF2Press = (e) => {
    if (e.key === "F2") {
      setPreviousSales(previousSales + totalAmount);
      setOrders([]);
      setTotalAmount(0);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleF2Press);
    return () => {
      window.removeEventListener("keydown", handleF2Press);
      setCash(0);
    };
  }, [previousSales, totalAmount]);

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="card">
        <div className="card-body">
          <div className="row w-100">
            <h1 className="text-end">TOTAL: {totalAmount}.00</h1>
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">ITEMS:</h5>
                  <form>
                    <div className="form-group">
                      <label htmlFor="quantity">Quantity</label>
                      <input
                        type="number"
                        className="form-control"
                        id="quantity"
                        value={quantity}
                        onChange={handleQuantityChange}
                        placeholder="Enter quantity"
                        ref={quantityInputRef}
                        onKeyPress={handlePlusKeyPress}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="barcode">Barcode</label>
                      <input
                        type="text"
                        className="form-control"
                        id="barcode"
                        value={barcode}
                        onChange={handleBarcodeChange}
                        onKeyPress={handleKeyPress}
                        placeholder="Enter barcode"
                        ref={nextRef}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="product">Product</label>
                      <input
                        type="text"
                        className="form-control"
                        id="product"
                        value={product.p_name || ""}
                        readOnly
                        placeholder="Product name"
                        disabled
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="price">Price</label>
                      <input
                        type="text"
                        className="form-control"
                        id="price"
                        value={product.price || ""}
                        readOnly
                        placeholder="Price"
                        disabled
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive mb-3">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>QTY</th>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((order, index) => (
                          <tr key={index}>
                            <td>{order.quantity}</td>
                            <td>{order.p_name}</td>
                            <td>{order.price}</td>
                            <td>{order.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <form>
                    <div className="form-group row">
                      <label
                        htmlFor="cash"
                        className="col-sm-2 col-form-label mb-4"
                      >
                        Cash
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="number"
                          className="form-control"
                          id="cash"
                          placeholder="Enter cash amount"
                          value={cash}
                          onChange={handleCashChange}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="change"
                        className="col-sm-3 col-form-label"
                      >
                        Change
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="number"
                          className="form-control"
                          id="change"
                          placeholder="Enter change amount"
                          value={totalChange}
                          readOnly
                          style={textColor}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="card mt-4">
                <div className="card-body">
                  <h1 className="card-title">SALES OF THE DAY:</h1>
                  <h4 className="card-text mt-3">Cashier Name: Aiahkins</h4>
                  <h4 className="card-text mt-3">
                    Total Sales: {previousSales}.00
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
