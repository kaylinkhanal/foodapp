import React, {useState, useEffect} from 'react'
import FoodCart from '../../component/food/foodCart'
import FoodCategories from '../../component/food/foodCategories'
import FoodList from '../../component/food/foodList'

const Food = () => {
    const [foodList, setFoodList] = useState([])

    const fetchFood = async()=>{
        const response = await fetch('http://localhost:4000/food')
        const data = await response.json()

        if(data){
            setFoodList(data.foodList)
        }else{
			console.log('Data not available')
		}
    }

  const categoryList = foodList.filter((item, index)=>{
    if(foodList.indexOf(item.foodCategory) === foodList[index]){
        return item.foodCategory
    }
  })
  console.log(categoryList)

    useEffect(()=>{
        fetchFood()
    }, [])
    return (
        <>
            <div id ="food">
                <div className='container'>
                    <div className='food_block'>
                        <FoodCategories categoryList={categoryList}/>
                        <FoodList foodList={foodList}/>
                        <FoodCart/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Food