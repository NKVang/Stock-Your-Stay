# Stock Your Stay
CSC 190/191 Project for our client, Mint House

![Mint House](/src/components/assets/mhlogo.png "Mint House")

Mint House is a startup business that converts apartments to hotel rooms without the need for receptionists to access the customer's rooms. Mint House combines the use of automation and smart locks to allow customers to access hotel rooms with digital codes. They seek to provide the customer an excellent service through easy-to-access rooms along with their requested groceries delivered prior to arrival.

# Table of Contents
* [Summary](#Summary)
* [Current State of Project](#Current-State-of-Project)
* [Tech Stack](#Tech-Stack)
* [Testing](#Testing)
* [Deployment](#Deployment)
* [Developer Instructions](#Developer-Instructions)
* [Screenshots](#Screenshots)

# Summary
Mint House currently has a system where customers can have their rooms pre-stocked with groceries ordered through their Shopify website. The issue is, customers are required to enter information such the location of stay, check-in dates, and name on the reservation. This raises concerns because the customer can mistakenly enter the wrong information, causing the groceries to be stocked in the incorrect room or not stocked at all. We will be building an entirely new website in which customers can order their groceries and it will address the issue above by automatically associating the purchased groceries with the customer's room.

# Current State of Project
<!-- TO DO -->
<!-- Everything works in development/test mode -->
* Available frontend UI Pages
  * Shop page (this is the category selection page)
  * Location Stay Page (Confirms the correct location)
  * View All Page (View of items within a category)
  * Sub-category Page
  * Shopping Cart Page (This is the checkout page)
  * Employee Login
* Has a REST API for handling request to the backend

# Tech Stack
* React.Js
* React Bootstrap
* Node.js
* Express
* MariaDB
* Stripe API
* Auth0
* Git & Github
* Airtable

# Testing
1. Testing was done with [Jest](https://jestjs.io/), to start testing functions used, navigate to the ```\tests``` directory from the project root with command ```cd src/tests```

2. Once in the correct directory, run ```npm install``` to install required testing dependencies.

3. Runnable tests include Decrementing/Incrementing Item Quantity, Handling Manual Quantity Adjustments, Pascal Casing for Item Names, and Truncating Item Names. Each of these functions are in their respective ```.js``` files. The ```test.js``` files contain code that verifies the functionality and correctness of the functions defined in the ```.js``` files.

4. To run the test suites, just run the command ```npm run test``` in the terminal and all test cases will pass. If more testing is needed, adjust the ```.test.js``` files and provide the expected outputs for each input.

![Passed all test cases](/src/components/assets/jest_test.png "Passed all test cases")

<!-- TO DO -->
# Deployment
CSC 191 placeholder

# Developer Instructions
1. First, make sure your terminal is in the right directory. You want to be in the directory that contains the "node_modules", "public", "src" folders also known as the root directory. You will know your terminal is in the right directory when it looks something like this:
![Root directory of Project](/src/components/assets/terminal.JPG "Root directory of Project")

2. Make sure to add a ```.env``` file in the project root with this inside of it
```STRIPE_API_KEY=YOUR_STRIPE_API_KEY```<br>
```STRIPE_WEBHOOK_SECRET=YOUR_STRIPE_WEBHOOK_SECRET_KEY```<br>
```JWT_KEY=YOUR_JWT_KEY```
  
3. In the terminal, run the command ```npm install``` to install all the dependencies and get the "node_modules" folder. 

4. Open up another terminal and navigate to the API directory using command ```cd API```. Once inside the API directory, run ```npm install``` once again to install dependencies for the server side.

5. Download the [Stripe CLI](https://docs.stripe.com/stripe-cli), grab the .exe file from the zip and store it inside ```C:\Stripe CLI```.
  * Update your PATH environment to include the .exe file.
  * ```Windows + S``` and search for “environment variables” and open “Edit the system environment variables”
  * Click **Environment Variables…** on the bottom right
  * Under **System Variables** scroll down until you see the **PATH** variable and double click it
  * Add a new environment variable by clicking **New**
  * Paste the path of the .exe file inside of ```C:\Stripe CLI``` and it should look similar to this
  ![PATH in Environment Variables](/src/components/assets/env_var.png "PATH in Environment Variables")

5. Listening for Stripe Webhooks:
  * After setting everything up and successful installation and setup of the Stripe CLI, we will need to listen to the Stripe Webhook Events.
  * Login to [Stripe](https://stripe.com), we will need this for the next step.
  * Open up a Command Prompt Terminal (```Windows + S``` and search for cmd) inside the Terminal, enter the command stripe login and this will redirect you to authenticate your Stripe account via your browser.
  * Once authenticated with your Stripe account via your browser, enter the command ```stripe listen --forward-to localhost:5000/checkout-session-completed``` and we are now ready to listen for Stripe Webhooks.

6. Now you should be able to run the ```npm start``` command in the project root[^1]. This will start running the development server on your browser.

7. Inside the terminal with ```\API``` as the current working directory, run the command ```npm run both``` to run both the Stripe and REST API servers. We are now finished with setting up for development!

8. Now you should be at a page that looks similar to the image below. The test account data credentials are:
<!-- Leave or remove? -->
* Email: test@gmail.com
* Last name: Parker
<!-- End leave or remove? -->

![Log in page](/src/components/assets/login_page.png)

# Screenshots:
![Main shop page](/src/components/assets/main_shop.png "Main shop page")
*The main shop page which displays items from different categories*

![Individual item page](/src/components/assets/individual_page.png "Individual item page")
*The individual item page after clicking on an item via the carousel*

![Shopping cart](/src/components/assets/shopping_cart.png "Shopping cart")
*Shopping cart view, here the customer will be able to adjust/remove item quantity*

![Order successful](/src/components/assets/order_success.png "Order successful")
*Once checkout is complete, a receipt like page will show, with order details*

<!-- This doesn't render correctly on Google Colab but when pushed to GitHub it will render correctly as a footnote -->
[^1]: If you get an error like this: [eslint] Plugin "react" was conflicted between "package.json,
then click on the package-log.json file and press ctrl + s to save it.
Then press on the package.json file and press ctrl + s to save it.
