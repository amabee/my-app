import { useState, useRef } from "react";

const usePosState = () => {
  // MODALS
  const [showInfoModal, setShowInfoModal] = useState(false);
  const handleShow = () => setShowInfoModal(true);
  const handleClose = () => setShowInfoModal(false);

  // ITEM SEARCH INPUT MODAL
  const [showInputItemModal, setShowInputItemModal] = useState(false);
  const handleShowInputModal = () => setShowInputItemModal(true);
  const handleCloseInputModal = () => setShowInputItemModal(false);

  // PREVIEW HELD TRANSACTIONS
  const [showHeldTransactions, setShowHeldTransactions] = useState(false);
  const handleShowHeldTransactions = () => setShowHeldTransactions(true);
  const handleCloseHeldTransactions = () => setShowHeldTransactions(false);

  // HOLDING TRANSACTIONS CUSTOMER ID / NAME
  const [showCustomerIDInput, setShowCustomerIDInput] = useState(false);
  const handleShowCustomerIDInput = () => setShowCustomerIDInput(true);
  const handleCloseCustomerIDInput = () => setShowCustomerIDInput(false);

  // PAYMENT MODAL
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const handleShowPaymentModal = () => setShowPaymentModal(true);
  const handleClosePaymentModal = () => setShowPaymentModal(false);

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

  // HOLDING ITEMS
  const [heldTransactions, setHeldTransactions] = useState([]);
  const [customerID, setCustomerID] = useState("");

  const [msg, setMsg] = useState("");
  return {
    barcode,
    setBarcode,
    product,
    setProduct,
    quantity,
    setQuantity,
    orders,
    setOrders,
    totalAmount,
    setTotalAmount,
    cash,
    setCash,
    totalChange,
    setTotalChange,
    previousSales,
    setPreviousSales,
    quantityInputRef,
    nextRef,
    textColor,
    setTextColor,
    showInfoModal,
    setShowInfoModal,
    showInputItemModal,
    setShowInputItemModal,
    handleShow,
    handleClose,
    handleShowInputModal,
    handleCloseInputModal,
    heldTransactions,
    setHeldTransactions,
    msg,
    setMsg,
    showHeldTransactions,
    setShowHeldTransactions,
    handleShowHeldTransactions,
    handleCloseHeldTransactions,
    customerID,
    setCustomerID,
    showCustomerIDInput,
    setShowCustomerIDInput,
    handleShowCustomerIDInput,
    handleCloseCustomerIDInput,
    showPaymentModal,
    setShowPaymentModal,
    handleShowPaymentModal,
    handleClosePaymentModal,
  };
};

export default usePosState;
