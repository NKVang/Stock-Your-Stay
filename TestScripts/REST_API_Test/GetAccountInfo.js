let personID = 1;
   
let fetchlink = "http://localhost:8000/accounts/" + personID
    
const getInfo = async() => {
    const response = await fetch(fetchlink);

    if (response.ok){
        let data = await response.json();
        console.log(data.accounts);

    }
    else {
        throw new Error('error');
    }
}

const runTest = async () => {
    try {
        await getInfo();
        console.log('Get Account Info: Test Passed');
    } catch (error) {
      console.error('Get Account Info: Test Failed');
    }
};


runTest();

