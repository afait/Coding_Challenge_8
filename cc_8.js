// Task 1 - Employee Salary Calculation

function calculateSalary(baseSalary, bonus, taxRate) { // Created a function that calculates employee salary using base salary, bonus, and tax rate amounts
    let NetSalary = ((baseSalary + bonus) - (baseSalary * taxRate)).toFixed(2);
    console.log(`Net Salary: $${NetSalary}`);
} // Calculates net salary by adding the base salary plus the bonus amount plus the calculated taxrate

calculateSalary(5000, 500, 0.1); // Finds the employee salary given a base salary of 5000, a bonus of 500 and a taxrate of 10%
calculateSalary(7000, 1000, 0.15); // Finds the employee salary given a base salary of 7000, a bonus of 1000 and a taxrate of 15%

// Task 2 - Product Price After Discount

function calculateDiscount(price, discountrate) { // Created a function that calculates discount price based on the price and discount rate
    let FinalPrice = (price - (price *discountrate)).toFixed(2);
    console.log(`Final Price: $${FinalPrice}`)
} // Calculates the price by subtracting the calculated discount rate and rounds to two decimal places

calculateDiscount(100, 0.2); // Calculates the discounted price of a product that costs $100 and has a 20% discount
calculateDiscount(250, 0.15); // Calculates the discounted price of a product that costs $250 and has a 15% discount

// Task 3 - Service Fee Calculation

const calculateServiceFee = (amount, serviceType) => { // Created an arrow function that calculates a service fee based on the amount and the service type
    let fee = 0
    if (serviceType === "Premium") fee = amount * .15; // Applies a 15% fee if the service type is Premium
    else if (serviceType ==="Standard") fee = amount * .10; // Applies a 10% fee if the service type is Standard
    else if (serviceType === "Basic") fee = amount * .05; // Applies a 5% fee if the service type is Basic
    console.log(`Service Fee $${(fee).toFixed(2)}`); // Logs the calculated service fee to two decimal places
};

calculateServiceFee(200, "Premium"); // Calculates the service fee of a $200 amount with Premium service
calculateServiceFee(500, "Standard"); // Calculates the service fee of a $500 amount with Standard service

// Task 4 - Car Rental Cost Calculation

function calculateRentalCost(days, carType, insurance = false) { // Created a function to calculate rental cost based on the number of days, the car type, and if they have insurance
    let rentalcost = 0
    if (carType === "Economy") rentalcost = 40 // If the car type is economy it will cost $40 a day
    else if (carType === "Standard") rentalcost= 60 // If the car type is standard it will cost $60 a day
    else if (carType === "Luxury") rentalcost = 100 // If the car type is luxury it will cost $100 a day

    if (insurance === true) insuranceCost =+ 20
    else insuranceCost =+ 0 // Add on $20 a day for insurance
    console.log(`Total Rental Cost $${((rentalcost + insuranceCost) * days).toFixed(2)}`);
// logs the rental cost by adding the rental and insurance cost and multiplying by the number of days
}

calculateRentalCost(3, "Economy", true); // Calculates the rental cost for a three day rental of an Economy car with insurance
calculateRentalCost(5, "Luxury", false); // Calculates the rental cost for a five day rental of a Luxury car without insurance
