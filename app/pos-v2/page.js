"use client";
import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../public/styles/pos2-style.css";
import InformationModal from "@/components/modal";

const Pos2 = () => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const handleShow = () => setShowInfoModal(true);
  const handleClose = () => setShowInfoModal(false);

  const [showInputItemModal, setShowInputItemModal] = useState(false);
  const handleShowInputModal = () => setShowInputItemModal(true);
  const handleCloseInputModal = () => setShowInputItemModal(false);

  const [barcode, setBarcode] = useState(1);

  const handleEscKeyPress = (e) => {
    if (e.key === "Escape") {
      if (handleShow) {
        handleClose();
        return;
      }

      if (handleShowInputModal) {
        handleCloseInputModal();
        return;
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
        <div className="row">
          <div className="col-md-4">
            <div className="customer-info mb-3">
              <div class="card text-center bg-light border-0">
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

                <div class="card-body">
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
                        <i class="bi bi-credit-card-2-back"></i>
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
                      // value={quantity}
                      // onChange={handleQuantityChange}
                      placeholder="Enter quantity"
                      // ref={quantityInputRef}
                      // onKeyPress={handlePlusKeyPress}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="barcode">Barcode</label>
                    <input
                      type="text"
                      className="form-control"
                      id="barcode"
                      // value={barcode}
                      // onChange={handleBarcodeChange}
                      // onKeyPress={handleKeyPress}
                      placeholder="Enter barcode"
                      // ref={nextRef}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="product">Product</label>
                    <input
                      type="text"
                      className="form-control"
                      id="product"
                      // value={product.p_name || ""}
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
                      // value={product.price || ""}
                      readOnly
                      placeholder="Price"
                      disabled
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="row mb-2">
              <div
                class="card overflow-y-scroll"
                style={{ maxHeight: "20rem" }}
              >
                <div class="card-body">
                  <h5 class="card-title text-center fs-4 fw-bold">MY CART</h5>
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

              <div class="card mt-2">
                <div class="card-body">
                  <h5 class="card-title">TOTAL BREAKDOWN</h5>
                  <div className="total-section">
                    <div className="d-flex justify-content-between">
                      <h5 class="card-subtitle mb-2 text-body-secondary">
                        TOTAL
                      </h5>
                      <h5 class="card-subtitle mb-2 text-body-secondary fw-bold">
                        <span>₱300.00</span>
                      </h5>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>DISCOUNT</span>
                      <span>₱0.00</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>TAX</span>
                      <span>₱76.78</span>
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
            <div class="input-group">
              <span class="input-group-text">Search Item</span>
              <input
                class="form-control"
                aria-label="Search Item"
                type="number"
                value={barcode}
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
