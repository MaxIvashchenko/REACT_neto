import React, { useState } from 'react';
import ListView from './ListView';
import CardsView from './CardsView';
import IconSwitch from './IconSwitch';

const products = [{
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "blue",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
  name: "Nike Metcon 3",
  price: "150",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];

const VIEW_LIST = 'view_list';
const VIEW_MODULE = 'view_module';


function Store(props) {
  const [icon, setIcon] = useState(VIEW_LIST);
  const onSwitch = () => { icon === VIEW_LIST ? setIcon(VIEW_MODULE) : setIcon(VIEW_LIST) };


  return (
    <div>
      <IconSwitch icon={icon} onSwitch={onSwitch} />
      {icon === VIEW_LIST
        ? <CardsView items={products} />
        : <ListView items={products} />
      }
    </div>
  )
}

export default Store
