import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodListCard from './FoodListCard';
const FoodList = ({category, setCategory}) => {
    const {foodList} = useContext(StoreContext);
  return (
    <>
      <h3 className='text-4xl font-bold text-center my-10'>Best Dishes From The Every Corner Of The World</h3>
      <div className="list-container mb-16 flex gap-8 flex-wrap justify-between items-center">
        {foodList.map((item, index) => {
          if(category === 'All' || category===item.category){
          return ( 
            <FoodListCard
              key={index}
              img={item.img}
              name={item.name}
              price={item.price}
              category={item.category}
              desc={item.desc}
              rating={item.rating}
              id={item.id}
            ></FoodListCard>
          );}
        })}
      </div>
    </>
  );
}

export default FoodList