import React from "react";

const FoodCategories = (props)=>{
    return(
        <>
        <div className="categories_list">
            <h3>Categories</h3>
            {props.categoryList.map((category)=>{
                return(
                    <li key={category.fooName}>{category.foodCategory}</li>
                )
            })}
        </div>
        </>
    )
}

export default FoodCategories