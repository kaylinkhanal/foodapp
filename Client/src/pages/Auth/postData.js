const postData = async (values, endpoint) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: values.email,
            password: values.password
        })
    };
    const response = await fetch('http://localhost:4000/'+endpoint, requestOptions);
    const data = await response.json();
    return data
}

export default postData
