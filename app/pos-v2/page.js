"use client";
import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../public/styles/pos2-style.css";
import InformationModal from "@/components/modal";
import axios from "axios";

const Pos2 = () => {
  // MODALS
  const [showInfoModal, setShowInfoModal] = useState(false);
  const handleShow = () => setShowInfoModal(true);
  const handleClose = () => setShowInfoModal(false);

  const [showInputItemModal, setShowInputItemModal] = useState(false);
  const handleShowInputModal = () => setShowInputItemModal(true);
  const handleCloseInputModal = () => setShowInputItemModal(false);

  // POS FUNCTIONS
  const [barcode, setBarcode] = useState(1);
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

  const [msg, setMsg] = useState("");

  const getProductsFromAPI = async (barCode) => {
    const url = "http://localhost/pos-api/api.php";
    try {
      const response = await axios.get(url, {
        params: {
          op: "getItem",
          barCode: barCode,
        },
      });

      if (response.data && response.data !== "") {
        setProduct(response.data);
        setMsg("");
      } else {
        setProduct({});
        setMsg("No Data");
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
      setProduct({});
      setMsg("Error fetching data");
    }
  };

  const handleBarcodeChange = (e) => {
    const enteredBarcode = e.target.value;
    setBarcode(enteredBarcode);
    if (enteredBarcode) {
      getProductsFromAPI(enteredBarcode);
    } else {
      setProduct({});
      setMsg("Please enter a barcode");
    }
  };

  const handleEscKeyPress = (e) => {
    if (e.key === "Escape") {
      if (handleShow) {
        handleClose();
      }

      if (handleShowInputModal) {
        handleCloseInputModal();
      }
    }
  };

  const handleFunctionsPress = (e) => {
    switch (e.key) {
      case "F1":
        e.preventDefault();
        handleShow();
        break;

      case "F2":
        e.preventDefault();
        handleShowInputModal();
        break;

      case "F3":
        e.preventDefault();
        getDataFromAPI();
        break;

      case "Escape":
        e.preventDefault();
        handleEscKeyPress(e);
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleFunctionsPress);
    return () => {
      window.removeEventListener("keydown", handleFunctionsPress);
    };
  }, []);

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="container-fluid">
        <h1 className="text-center fw-bold">ROBINSONS GALLERIA MALL</h1>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title text-end">Total: 0.00</h1>
            <div className="row">
              <div className="col-md-4">
                <div className="customer-info mb-3">
                  <div className="card text-center bg-light border-0">
                    <img
                      src="/assets/aiah.jpg"
                      className="card-img-top img-thumbnail mx-auto d-block mt-2"
                      alt="bg"
                      style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                      }}
                    />

                    <div className="card-body">
                      <h4>Aiahkins</h4>
                      <p>Cashier No: 143</p>

                      <div className="row">
                        <div className="col-4">
                          STORE SALES
                          <br />
                          ₱0.00
                        </div>
                        <div className="col-4">
                          STORE REWARDS
                          <br />0
                        </div>
                        <div className="col-4">
                          CUSTOMER COUNT
                          <br />0
                        </div>
                      </div>

                      <div className="row mt-3 align-items-center justify-content-center">
                        <div className="col-4">
                          <button className="btn btn-warning btn-lg w-100">
                            <i className="bi bi-credit-card-2-back"></i>
                          </button>
                        </div>
                        <div className="col-4">
                          <button className="btn btn-success btn-lg">
                            <span className="fs-6">PURCHASES</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                <div className="row mb-2">
                  <div
                    className="card overflow-y-scroll"
                    style={{ maxHeight: "20rem" }}
                  >
                    <div className="card-body">
                      <h5 className="card-title text-center fs-4 fw-bold">
                        MY CART
                      </h5>
                      <div className="purchases mb-3">
                        <table className="table table-striped table-hover">
                          <thead>
                            <tr>
                              <th scope="col">Item Name</th>
                              <th scope="col">Item Code</th>
                              <th scope="col">Quantity</th>
                              <th scope="col">Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>BINI ALBUM</td>
                              <td>1001</td>
                              <td>1</td>
                              <td>₱100.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="card mt-2">
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
                            // onChange={handleQuantityChange}
                            placeholder="Enter quantity"
                            // ref={quantityInputRef}
                            // onKeyPress={handlePlusKeyPress}
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
              </div>
            </div>
          </div>
        </div>
        <InformationModal
          show={showInfoModal}
          handleClose={handleClose}
          centered={true}
          className="modal-lg"
          style={{ width: "100%" }}
          title="ROBINSONS POS SYSTEM SHORTCUT KEYS"
          animation={true}
        >
          <div className="row justify-content-evenly">
            <div className="col-md-2">
              General
              <div className="row-cols-2 mt-2 justify-content-evenly">
                <span className="spacing">
                  <span className="square">F1</span> - Help
                </span>
              </div>
              <div className="row-cols-2 mt-2 justify-content-evenly">
                <span className="spacing">
                  <span className="square">F2</span> - New Sale
                </span>
              </div>
              <div className="row-cols-2 mt-2 justify-content-evenly">
                <span className="spacing">
                  <span className="square">F3</span> - Save Order
                </span>
              </div>
              <div className="row-cols-2 mt-2 justify-content-evenly">
                <span className="spacing">
                  <span className="square">F4</span> - Retake Save Order
                </span>
              </div>
              <div className="row-cols-2 mt-2 justify-content-evenly">
                <span className="spacing">
                  <span className="square">F6</span> - Pending Sales
                </span>
              </div>
              <div className="row-cols-2 mt-2 justify-content-evenly">
                <span className="spacing">
                  <span className="square">F7</span> - Void
                </span>
              </div>
              <div className="row-cols-2 mt-2 justify-content-evenly">
                <span className="spacing">
                  <span className="square">F8</span> - Cash Drawer
                </span>
              </div>
              <div className="row-cols-2 mt-2 justify-content-evenly">
                <span className="spacing">
                  <span className="square">F9</span> - X Report
                </span>
              </div>
              <div className="row-cols-2 mt-2 justify-content-evenly">
                <span className="spacing">
                  <span className="square">F10</span> - Clock In / Out
                </span>
              </div>
            </div>
            <div className="col-md-2">Global</div>
            <div className="col-md-2">Global</div>
          </div>
        </InformationModal>
        <InformationModal
          show={showInputItemModal}
          handleClose={handleCloseInputModal}
          centered={false}
          title="Search Item"
          animation={true}
          className="modal-lg"
        >
          <div className="row">
            <div className="input-group">
              <span className="input-group-text">Search Item</span>
              <input
                className="form-control"
                aria-label="Search Item"
                type="number"
                value={barcode}
                onChange={handleBarcodeChange}
                autoFocus={true}
              ></input>
            </div>
          </div>
        </InformationModal>
        ;
      </div>
    </div>
  );
};

export default Pos2;
