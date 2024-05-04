async function addAccount() {

    const addAccountToDatabase = await fetch('http://localHost:8000/accounts/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          personID: personID,
          firstName: firstName,
          lastName: lastName,
          email: email
        })
      });

        if (addAccountToDatabase.ok)
        {
            await addAccountToDatabase.json();
        }
        else {
            throw new Error();
        }
  }
  
const runTest = async () => {

    try {
      await addAccount();
      console.log('Adding Account Test: Test Passed');
    } catch (error) {
      console.error('Adding Account Test: Test Failed');
    }
};

let personID= 56 // Note that you will have to change this value if you want to run the test and pass again because each personID in the database must be unique
let firstName = "Bill"
let lastName = "Gates"
let email = "microsoft@gmail.com"

runTest();