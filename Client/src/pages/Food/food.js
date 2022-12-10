import React, {useState, useEffect} from 'react'
import FoodCart from '../../component/food/foodCart'
import FoodCategories from '../../component/food/foodCategories'
import FoodList from '../../component/food/foodList'

const Food = (props) => {
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

    const uniqCategory = [];
    const filterCategory = foodList.filter((item)=>{
        const duplicateItem = uniqCategory.includes(item.foodCategory)
        if(!duplicateItem){
            uniqCategory.push(item.foodCategory)
            return item
        }
    })

    useEffect(()=>{
        fetchFood()
    }, [])
    return (
        <>
            <div id ="food">
                <div className='container'>
                    <div className='food_block'>
                        <FoodCategories filterCategory={filterCategory}/>
                        <FoodList foodList={props.filterFood}/>
                        <FoodCart/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Food