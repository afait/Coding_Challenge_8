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
