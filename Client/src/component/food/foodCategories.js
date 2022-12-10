import React from "react";

const FoodCategories = (props)=>{
    return(
        <>
        <div className="categories_list">
            <h3>Categories</h3>
            <ul>
                {props.categoryList.map((category,id)=>{
                    return(
                        <li key={id}>{category.foodCategory}</li>
                    )
                })}
            </ul>
        </div>
        </>
    )
}

export default FoodCategories