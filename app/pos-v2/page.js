"use client";
import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../public/styles/pos2-style.css";

const Pos2 = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <div className="customer-info mb-3">
            <div class="card text-center bg-light border-0">
              <img
                src="/assets/aiah.jpg"
                className="card-img-top img-thumbnail mx-auto d-block mt-2"
                alt="bg"
                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
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

          <div class="card overflow-y-scroll" style={{ maxHeight: "20rem" }}>
            <div class="card-body">
              <h5 class="card-title">CART:</h5>
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
                    <tr>
                      <td>BINI ALBUM</td>
                      <td>1001</td>
                      <td>1</td>
                      <td>₱100.00</td>
                    </tr>
                    <tr>
                      <td>BINI ALBUM</td>
                      <td>1001</td>
                      <td>1</td>
                      <td>₱100.00</td>
                    </tr>
                    <tr>
                      <td>BINI ALBUM</td>
                      <td>1001</td>
                      <td>1</td>
                      <td>₱100.00</td>
                    </tr>
                    <tr>
                      <td>BINI ALBUM</td>
                      <td>1001</td>
                      <td>1</td>
                      <td>₱100.00</td>
                    </tr>
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

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">TOTAL BREAKDOWN</h5>
              <div className="total-section">
                <div className="d-flex justify-content-between">
                  <h5 class="card-subtitle mb-2 text-body-secondary">TOTAL</h5>
                  <h5 class="card-subtitle mb-2 text-body-secondary"> <span>₱300.00</span></h5>
                 
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

        <div className="col-md-8">
          <div className="row mb-3">
            <div className="col-2">
              <button className="btn btn-success product-btn-top w-100">
                <i className="bi bi-question-circle-fill"></i>
              </button>
            </div>
            <div className="col-2">
              <button className="btn btn-info product-btn-top w-100 text-center">
                Foods
              </button>
            </div>
            <div className="col-2">
              <button className="btn btn-info product-btn-top w-100">
                Drinks
              </button>
            </div>
            <div className="col-2">
              <button className="btn btn-info product-btn-top w-100">
                Snacks
              </button>
            </div>
          </div>
          <div className="row mb-3 ">
            <div className="col-2 mb-3 me-2">
              <div className="wrapper ">
                <div className="container">
                  <div className="top"></div>
                  <div className="bottom">
                    <div className="left">
                      <div className="details">
                        <h3>Piattos</h3>
                        <p>100.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2 mb-3 ms-2">
              <div className="wrapper">
                <div className="container">
                  <div className="top"></div>
                  <div className="bottom">
                    <div className="left">
                      <div className="details">
                        <h3>Piattos</h3>
                        <p>100.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2 mb-3 ms-3">
              <div className="wrapper">
                <div className="container">
                  <div className="top"></div>
                  <div className="bottom">
                    <div className="left">
                      <div className="details">
                        <h3>Piattos</h3>
                        <p>100.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2 mb-3 ms-3">
              <div className="wrapper">
                <div className="container">
                  <div className="top"></div>
                  <div className="bottom">
                    <div className="left">
                      <div className="details">
                        <h3>Piattos</h3>
                        <p>100.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2 mb-3 ms-3">
              <div className="wrapper">
                <div className="container">
                  <div className="top"></div>
                  <div className="bottom">
                    <div className="left">
                      <div className="details">
                        <h3>Piattos</h3>
                        <p>100.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2 mb-3 me-3">
              <div className="wrapper">
                <div className="container">
                  <div className="top"></div>
                  <div className="bottom">
                    <div className="left">
                      <div className="details">
                        <h3>Piattos</h3>
                        <p>100.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2 mb-3 me-3">
              <div className="wrapper">
                <div className="container">
                  <div className="top"></div>
                  <div className="bottom">
                    <div className="left">
                      <div className="details">
                        <h3>Piattos</h3>
                        <p>100.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2 mb-3 me-3">
              <div className="wrapper">
                <div className="container">
                  <div className="top"></div>
                  <div className="bottom">
                    <div className="left">
                      <div className="details">
                        <h3>Piattos</h3>
                        <p>100.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2 mb-3 me-3">
              <div className="wrapper">
                <div className="container">
                  <div className="top"></div>
                  <div className="bottom">
                    <div className="left">
                      <div className="details">
                        <h3>Piattos</h3>
                        <p>100.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2 mb-3 me-3">
              <div className="wrapper">
                <div className="container">
                  <div className="top"></div>
                  <div className="bottom">
                    <div className="left">
                      <div className="details">
                        <h3>Piattos</h3>
                        <p>100.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-2">
              <button className="btn btn-info action-btn w-100">+</button>
            </div>
            <div className="col-2">
              <button className="btn btn-info action-btn w-100">
                Recent Sales
              </button>
            </div>
            <div className="col-2">
              <button className="btn btn-info action-btn w-100">
                Pending Sales
              </button>
            </div>
            <div className="col-2">
              <button className="btn btn-info action-btn w-100">
                Close Day
              </button>
            </div>
            <div className="col-2">
              <button className="btn btn-info action-btn w-100">
                <div className="row-2">
                  <i className="bi bi-file-earmark-bar-graph-fill"></i>
                  <div>X-Report</div>
                </div>
              </button>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-2">
              <button className="btn btn-info action-btn w-100">
                Cash In / Out
              </button>
            </div>
            <div className="col-2">
              <button className="btn btn-info action-btn w-100">
                Clock In / Out
              </button>
            </div>
            <div className="col-2">
              <button className="btn btn-info action-btn w-100">
                Pending Sales
              </button>
            </div>
            <div className="col-2">
              <button className="btn btn-info action-btn w-100">
                New Sale
              </button>
            </div>
            <div className="col-2">
              <button className="btn btn-info action-btn w-100">
                <div className="row-2">Save Sale</div>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <button className="btn btn-warning btn-product-bottom btn-lg w-100">
                <i className="bi bi-people"></i>
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-danger btn-product-bottom btn-lg w-100">
                <i className="bi bi-lock"></i>
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-danger btn-product-bottom btn-lg w-100">
                Sales
              </button>
            </div>
            <div className="col-3">
              <button className="btn btn-danger btn-product-bottom btn-lg w-100">
                PAY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pos2;
