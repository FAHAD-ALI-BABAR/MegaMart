import React from 'react'

const Bagitem = ({bagitems}) => {
  return (
    <>
    <div className="bag-item-container">
    <div className="item-left-part">
      <img className="bag-item-img" src={bagitems.image}/>
    </div>
    <div className="item-right-part">
      <div className="company">${bagitems.company}</div>
      <div className="item-name">${bagitems.item_name}</div>
      <div className="price-container">
        <span className="current-price">Rs ${bagitems.current_price}</span>
        <span className="original-price">Rs ${bagitems.original_price}</span>
        <span className="discount-percentage">(${bagitems.discount_percentage}% OFF)</span>
      </div>
      <div className="return-period">
        <span className="return-period-days">${bagitems.return_period} days</span> return available
      </div>
      <div className="delivery-details">
        Delivery by
        <span className="delivery-details-days">${bagitems.delivery_date}</span>
      </div>
    </div>

    <div className="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
  </div>
    </>
  )
}

export default Bagitem