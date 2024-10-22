import React from 'react'

const Displayitems = ({items}) => {
  return (
    <>
    {items.map((items,key)=>(
       
        <div key={key} className ="item-container">
      <img className="item-image" src={items.image} alt="item image"/>
      <div className="rating">
          {items.rating.stars} ⭐ | {items.rating.count}
      </div>
      <div className="company-name">{items.company}</div>
      <div className="item-name">{items.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {items.current_price}</span>
          <span className="original-price">Rs {items.original_price}</span>
          <span className="discount">({items.discount_percentage}% OFF)</span>
      </div>
      <button className="btn-add-bag" onClick={()=>console.log("products")}
      >Add to Bag</button>
    </div>
        
    ))}
    
    </>
  )
}

export default Displayitems