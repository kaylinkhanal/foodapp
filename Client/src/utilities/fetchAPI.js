const fetchAPI = async (values, action) => {
    const formData = new FormData();
    formData.append('file', foodImg);
    formData.append('foodType', values.foodType);
    formData.append('restaurant', values.restaurant);
    formData.append('foodCategory', values.foodCategory);
    formData.append('FoodName', values.FoodName);
    formData.append('FoodPrice', values.FoodPrice);

    let requestOptions
    if(props.flag==="edit_food"){
       requestOptions = {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      };
    }else{
      requestOptions = {
        method:  "POST",
        body:formData
      };
    }
    const response = await fetch(
      "http://localhost:4000/foods/",
      requestOptions
    );
    const data = await response.json();
    if (data) {
        message.success(data.message)
        props.fetchFood()
        action.resetForm()
      }else{
        message.success(data.errDetail)
      }

    }
  
    export default fetchAPI