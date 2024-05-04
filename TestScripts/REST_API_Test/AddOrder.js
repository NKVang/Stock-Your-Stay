async function addOrder() {

  const response = await fetch('http://localHost:8000/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          orderNum: orderNum,
          PersonID: PersonID,
          ReservationID: ReservationID,
          date: date,
          totalPrice: totalPrice,
          status: test,
          Instructions: Instructions
        })
      });

        if (response.ok)
        {
            await response.json();
        }
        else {
            throw new Error();
        }
  }

  const runTest = async () => {
    try {
        await addOrder();
        console.log('Add Order: Test Passed');
    } catch (error) {
      console.error('Add Order: Test Failed');
    }
};

orderNum = "123d" //Must change order number each time you run test as each order in the database msut have unique values
PersonID = 1
ReservationID = 4242
date = "2024-05-03"
totalPrice = 12.42
test = "In Progress"
Instructions = ""

runTest();
