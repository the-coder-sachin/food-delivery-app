import React from 'react'
import Header from '../../Components/Navbar/Header/Header'
import MenuList from '../../Components/MenuList/MenuList'
import { useState } from 'react'
import FoodList from '../../Components/FoodListCard/FoodList'
const Home = () => {
  const [category, setCategory] = useState('All');
  return (
    <div>
        <Header/>
        <MenuList category={category} setCategory={setCategory} />
        <FoodList category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home
