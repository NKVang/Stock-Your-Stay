# Stock Your Stay
CSC 190/191 Project for our client, Mint House

![alt text](/src/components/assets/mhlogo.png "Mint House")

Mint House is a startup business that converts apartments to hotel rooms without the need for receptionists to access the customer's rooms. Mint House combines the use of automation and smart locks to allow customers to access hotel rooms with digital codes. They seek to provide the customer an excellent service through easy-to-access rooms along with their requested groceries delivered prior to arrival.

# Summary
Mint House currently has a system where customers can have their rooms pre-stocked with groceries ordered through their Shopify website. The issue is, customers are required to enter information such the location of stay, check-in dates, and name on the reservation. This raises concerns because the customer can mistakenly enter the wrong information, causing the groceries to be stocked in the incorrect room or not stocked at all. We will be building an entirely new website in which customers can order their groceries and it will address the issue above by automatically associating the purchased groceries with the customer's room.

# Current State of Project
* Available frontend UI Pages
  * Shop page (this is the category selection page)
  * Location Stay Page (Confirms the correct location)
  * View All Page (View of items within a category)
  * Sub-category Page
  * Shopping Cart Page (This is the checkout page)
  * Employee Login
* Has a REST API for handling request to the backend

# Tech Stack
* REACT
* Bootstrap
* Express
* MariaDB
* Stripe API
* Auth0

# Table of Contents
* [Timeline](#Timeline)
	* [Sprint 5](#Sprint-5)
	* [Sprint 6](#Sprint-6)
	* [Sprint 7](#Sprint-7)
	* [Sprint 8](#Sprint-8)
	* [Sprint 9](#Sprint-9)
* [Testing](#Testing)
* [Deployment](#Deployment)
* [Deployment](#Deployment)
* [Developer Instructions](#Developer-Instructions)

# Timeline
## Sprint 5 ~ (Jan. 21, 2024 to Feb. 04, 2024)
* Guest Login Page
  * UI - Login Page Background
  * Matching Header and Footer
  * UI - Last name input field
  * UI - Confirmation # input field
  * UI - Shop now button
* Individual Item Page
  * UI Product Page
  * Add Functionality For "Add to Cart" Button
  * Add Functionality to Quantity Button

## Sprint 6 ~ (Feb. 05, 2024 to Feb. 18, 2024)
* Add Univiseral Buttons to each Page
* Add Functionality to Universal Buttons
  * Add Functionality to Shopping Cart Button
  * Add Functionality to Category Buttons
  * Add Functionality to the Logout Button
  * Add Functionality to When Products are Clicked
  * Add functionality to Title Button

## Sprint 7 ~ (Feb. 19, 2024 to Mar. 03, 2024)
* Location Stay Page
  * Get Location, Check-in Date, Room
* Connect Stripe API
* Sort Items funtion

## Sprint 8 ~ (Mar. 04, 2024 to Mar. 17, 2024)
* UI for Employee Order Management Page
* Handle User Login
* Order Handling
* Mobile View for Location Stay Page
* Mobile View for Guest Login Page

## Sprint 9 ~ (Mar. 18, 2024 to Mar. 31, 2024)
* Connect Employee Orders Management to Backend
* Mobile View for Employee Login Page
* Mobile View for Homepage
* Mobile View for Sub-Category Page
* Mobile View for check/Shopping Cart Page

# Testing
CSC 191 placeholder

# Deployment
CSC 191 placeholder

# Developer Instructions
Before running ```npm start```:

1. First, make sure your terminal is in the right directory. You want to be in the directory
that contains the "node_modules", "public", "src" folders.
To change directories run the command: "cd stock-your-stay". I believe the stock-your-stay
should be the right name of the directory, but it could be different when you pull it. You will know your terminal is in the right directory when it looks something like this:
![alt text](/src/components/assets/terminal.JPG)

  
2. In the terminal, run the command ```npm install``` to install all the dependencies and get the "node_modules" folder.

3. Now you should be able to run the ```npm start``` command [^1].

4. Now you should be at a page that looks similar to the image below. From here, you can click on the hamberburger dropdown in the header to navigate to different pages.
![alt text](/src/components/assets/First-Main-Page.JPG)

<!-- This doesn't render correctly on Google Colab but when pushed to GitHub it will render correctly as a footnote -->
[^1]: If you get an error like this: [eslint] Plugin "react" was conflicted between "package.json,
then click on the package-log.json file and press ctrl + s to save it.
Then press on the package.json file and press ctrl + s to save it.

 
# Below are screenshots of some of the pages that we created:
![alt text](/src/components/assets/Category-Selection-Page.JPG)
![alt text](/src/components/assets/ViewAllPage.JPG)
![alt text](/src/components/assets/Shopping-Cart-Page.JPG)

