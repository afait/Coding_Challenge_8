// Task 1 - Employee Salary Calculation

function calculateSalary(baseSalary, bonus, taxRate) { // Created a function that calculates employee salary using base salary, bonus, and tax rate amounts
    let NetSalary = ((baseSalary + bonus) - (baseSalary * taxRate)).toFixed(2);
    console.log(`Net Salary: $${NetSalary}`);
} // Calculates net salary by adding the base salary plus the bonus amount plus the calculated taxrate

calculateSalary(5000, 500, 0.1); // Finds the employee salary given a base salary of 5000, a bonus of 500 and a taxrate of 10%
calculateSalary(7000, 1000, 0.15); // Finds the employee salary given a base salary of 7000, a bonus of 1000 and a taxrate of 15%
