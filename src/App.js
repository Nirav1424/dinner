import './App.css';
import Card from './components/Card';
import Menu from "./components/menuApi";
import React, { useState } from 'react'
import Buttons from './Buttons';



function App() {

  const uniqeList = [...new Set(Menu.map((currentEle) => {
    return currentEle.category;
})),'All',
]

console.log(uniqeList);


  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setmenuList] = useState(uniqeList);



  return (
    <>
      <Buttons setMenuData={setMenuData} menuList={menuList} />
      <Card menuData={menuData} />
    </>
  );
}

export default App;
