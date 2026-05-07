/*Question 1:

### Question 1: The Flight Booking Data Cleaner
*Problem Statement:*
You are given a list of raw flight strings from a travel agency's database. The data is unformatted and needs to be standardized into objects for a front-end display.
*Requirements:*
1. *Parsing:* Iterate through an array of strings formatted as: "CITY_A-CITY_B:PRICE".
2. *Object Creation:* Convert each string into an object with three properties: from, to, and price.
3. *Validation & Coercion:*
  * The price must be explicitly converted to a *Number.
  * If the price is not a valid number or is missing, set the price to 0.
4. **Filtering:* Create a new array containing only flights where the price is between *$100 and $500* (inclusive).
5. *Sorting:* Sort the final array of objects by price in *ascending order* (cheapest first).
6. *Return:* Return the final array as a *JSON string.
**Input Data Example:*
javascript
const rawFlights = [
 "London-Paris:150",
 "New York-Tokyo:invalid",
 "Dubai-Mumbai:450",
 "Berlin-Rome:95"
];


const rawFlights = [
    "London-Paris:150",
    "New York-Tokyo:invalid",
    "Dubai-Mumbai:450",
    "Berlin-Rome:95"
];

const flights = [];
rawFlights.forEach((d) => { return flights.push(d.split(":")) });

const flightsObject = flights.map((d) => {
    return {
        from: d[0].split("-")[0],
        to: d[0].split("-")[1],
        price: Number(d[1]) || 0
    }
});

const newFlights = flightsObject.filter((d) => { return d.price >= 100 && d.price <= 500 });

const sortedFlights = newFlights.toSorted((a, b) => a.price - b.price);

console.log(JSON.stringify(sortedFlights)); 

2) Question 2: The E-Commerce Discount Applicator
*Problem Statement:*
You are building a promo-code system for a shopping cart. You need to write a function applyPromo(cart, promoCallback) that calculates which items qualify for a specific discount.
*Requirements:*
1. *The Pipeline:* The applyPromo function should accept an array of product objects and a callback function.
2. *The Callback (isEligible):* You must define a separate callback function to be passed in. This callback should return true only if a product belongs to the *"Electronics"* category *AND* has a price greater than *$200.
3. **Transformation:*
  * Use the callback to identify eligible items.
  * For those items, reduce their price by *10%.
  * Add a new property to **all* items in the array called isDiscounted (set to true for eligible items and false for others).
4. *Final Summary:* Once the processing is complete, use a *Template Literal* to log to the console: "Promotion applied! [X] items were discounted for a total saving of $[Y]."
5. *Delayed Return:* Wrap the final return statement in a setTimeout of *1000ms* to simulate a server calculation, returning the updated cart array.
*Input Data Example:*
javascript
const cart = [
 { name: "Smartphone", price: 800, category: "Electronics" },
 { name: "Toaster", price: 50, category: "Home" },
 { name: "Headphones", price: 250, category: "Electronics" },
 { name: "Monitor", price: 150, category: "Electronics" }
];

### Instructions for Candidates:
* Use const and let appropriately.
* Ensure the code is clean and handles potential null or undefined values gracefully.
* The final output for Question 1 must be a valid JSON string.


const cart = [
    { name: "Smartphone", price: 800, category: "Electronics" },
    { name: "Toaster", price: 50, category: "Home" },
    { name: "Headphones", price: 250, category: "Electronics" },
    { name: "Monitor", price: 150, category: "Electronics" }
];


function isEligible(category, price) {
    return ((category === "Electronics" && price > 200)) ? true : false;
}

function applyPromo(cart, promoCallback) {
    let totalPriceBeforeDiscount = 0;
    cart.forEach((d) => {
        if (promoCallback(d.category, d.price)) {
            totalPriceBeforeDiscount += d.price;
            d.price -= (d.price * 0.1);
            d.isDiscounted = true;
        } else {
            d.isDiscounted = false;
        }
    })
    let totalDiscountedItems = cart.reduce((acc, curr) => { return curr.isDiscounted ? acc + 1 : acc; }, 0);
    let totalDistcountedItemsCost = cart.reduce((acc, curr) => { return curr.isDiscounted ? acc + curr.price : acc }, 0)

    console.log(`Promotion applied! ${totalDiscountedItems} items were discounted for a total savings of $ ${totalPriceBeforeDiscount - totalDistcountedItemsCost}`);
}

applyPromo(cart, isEligible);

setTimeout(() => {
    console.log(cart);
}, 1000)


Question 3:
### Question 3: The Movie Stream Analytics

**Problem Statement:**

You are given an array of raw strings representing movie data from a streaming platform. You need to convert this raw data into a structured format to identify top-performing content.

**Requirements:**

 1. Parse strings formatted as: "MOVIE_NAME|GENRE|VIEW_COUNT".

 2. Convert each string into an object with properties for name, genre, and views.

 3. Ensure the views property is an actual Number. If the views data is corrupted or not a number, default it to 0.

 4. Create a new list containing only movies from the "Action" or "Sci-Fi" genres with more than 5,000 views.

 5. Sort the final list by views in descending order (highest views first).

 6. Return the final array as a JSON string.

**Input Data Example:**

```javascript

const rawMovies = [

  "Inception|Sci-Fi|12000",

  "The Lion King|Animation|8000",

  "Mad Max|Action|invalid",

  "The Matrix|Sci-Fi|15000",

  "Gladiator|Action|4500"

];

const rawMovies = [
    "Inception|Sci-Fi|12000",
    "The Lion King|Animation|8000",
    "Mad Max|Action|invalid",
    "The Matrix|Sci-Fi|15000",
    "Gladiator|Action|4500"
];

const movies = [];
rawMovies.forEach((d) => {
    return movies.push(d.split("|"));
})

const moviesObject = movies.map((d) => {
    return { name: d[0], genre: d[1], views: Number(d[2]) || 0 }
})

const newList = moviesObject.filter((d) => {
    return (d.genre === "Action" || d.genre === "Sci-Fi") && d.views > 5000;
})

const sortedNewList = newList.toSorted((a, b) => b.views - a.views);

console.log(JSON.stringify(sortedNewList));

```

### Question 4: The Automated Payroll Processor

**Problem Statement:**

You are developing a payroll system. You need to write a function calculatePayroll(employees, taxCallback) that applies tax deductions and calculates final payouts.

**Requirements:**

 1. Create a callback function (taxLogic) that determines the tax rate: If a salary is > 5000, the tax is 20%. Otherwise, the tax is 10%.

 2. The calculatePayroll function should use this callback to process each employee.

 3. Calculate the netSalary (Salary minus Tax). Add a property status to each employee: If the net salary is > 4000, set status to "Premium", otherwise set it to "Standard".

 4. Use a Template Literal to log: "Payroll Processed: Total Net Payout is $[Z] for [X] employees."

 5. The function must use setTimeout to wait 2000ms before returning the final array of processed employee objects.

**Input Data Example:**

```javascript

const employees = [

  { id: 101, name: "Alice", salary: 6000 },

  { id: 102, name: "Bob", salary: 3500 },

  { id: 103, name: "Charlie", salary: 5200 }

];

*/
const employees = [
  { id: 101, name: "Alice", salary: 6000 },
  { id: 102, name: "Bob", salary: 3500 },
  { id: 103, name: "Charlie", salary: 5200 }
];

function calculatePayroll(emp, taxCallback) {

  let total = 0;

  let result = emp.map(e => {

    let tax = taxCallback(e.salary);
    let netSalary = e.salary - tax;

    total += netSalary;

    return {
      ...e,
      netSalary,
      status: netSalary > 4000 ? "Premium" : "Standard"
    };
  });

  console.log(`Payroll Processed: Total Net Payout is $${total}`);

  setTimeout(() => console.log(result), 2000);
}

calculatePayroll(
  employees,
  salary => salary > 5000 ? salary * 0.2 : salary * 0.1
);
