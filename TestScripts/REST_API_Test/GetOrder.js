let orderNum = 1;
   
let fetchlink = "http://localhost:8000/orders/" + orderNum
    
const getOrder = async() => {
    const response = await fetch(fetchlink);

    if (response.ok){
        let data = await response.json();
        console.log(data.order);

    }
    else {
        throw new Error('error');
    }
}

const runTest = async () => {
    try {
        await getOrder();
        console.log('Get Order: Test Passed');
    } catch (error) {
      console.error('Get Order: Test Failed');
    }
};


runTest();

