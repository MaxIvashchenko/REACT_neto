import React from 'react';
// import ShopItemFunc from './components/ShopItemFunc';
// import ShopItemClass from './components/ShopItemClass';
import Calendar from './components/Calendar';
import './index.css';
// import Item from './models/Item';


function App() {
  // const item = new Item({
  //   brand: 'Tiger of Sweden',
  //   title: 'Leonard coat',
  //   description: 'Minimalistic coat in cotton-blend',
  //   descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  //   price: 399,
  //   currency: '£'
  // });
  const now = new Date(2017, 2, 8);

  return (
    // <div className="container">
    //   <div className="background-element">
    //   </div>
    //   <div className="highlight-window">
    //     <div className='highlight-overlay'></div>
    //   </div>
    //   <div className="window">
    //     {/* <ShopItemFunc item={item} /> */}

    //     <ShopItemClass item={item} />
    //   </div>
    // </div>

    <Calendar date={now} />

  )
}

export default App;
