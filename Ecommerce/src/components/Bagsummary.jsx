import React from 'react'

const Bagsummary = () => {
    const bagitems={
        totalitem:20,
        totalmrp:40,
        totaldiscount:100,
        finalpayment:400
    }
  return (
    <div classNameName="bag-summary">
       
    <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS (${bagitems.totalitem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹${bagitems.totalmrp}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹${bagitems.totaldiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹99</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹${bagitems.finalpayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
  </div>
  )
}

export default Bagsummary