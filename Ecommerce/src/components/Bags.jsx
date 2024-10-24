import React from 'react'
import Bagsummary from './Bagsummary'
import Bagitem from './Bagitem'
import img1 from "../images/1.jpg"
const Bags = () => {
  const itemss={
      id: '001',
      image: img1,
      company: 'Carlton London',
      item_name: 'Rhodium-Plated CZ Floral Studs',
      original_price: 1045,
      current_price: 606,
      discount_percentage: 42,
      return_period: 14,
      delivery_date: '10 Oct 2023',
      rating: {
          stars: 4.5,
          count: 1400,
      },
  }
  
  return (
    <>

    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          <Bagitem bagitems={itemss}/>
        </div>
        
        <Bagsummary/>
        

      </div>
    </main>

    </>
  )
}

export default Bags