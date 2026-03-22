// A bank evaluates loan applicants based on the following criteria:
// 1. Credit Score:
    // o If the credit score is above 750, the loan is automatically approved.
    // o If the credit score is between 650 and 750, additional checks are performed.
    // o If the credit score is below 650, the loan is denied.
// 2. Income:
    // o For credit scores between 650 and 750, the customer’s income must be at least $50,000 for the loan to be considered.

// 3. Employment Status:
    // o If the customeJohn Doer’s income is at least 50,000, the system checks whether the customer is employed.
    // o If the customer is unemployed, the loan is denied.
// 4. Debt-to-Income Ratio:
    // o If the customer is employed, the system checks the debt-to-income (DTI) ratio.
    // o If the DTI ratio is less than 40%, the loan is approved.
    // o If the DTI ratio is 40% or greater, the loan is denied.

// Create common function and then based on below details, print whether user is eligible to get the loan or not
    // customerName = "";
    // creditScore = 720;
    // income = 55000.0;
    // isEmployed = true;
    // debtToIncomeRatio = 35.0;


    interface custTemplate {
        custName        : string,
        creditScore     : number,
        custIncome      : number,
        isEmployed      : boolean,
        dtiRatio        : number
    }

    let customer : custTemplate = {
        
        custName            : "John Doe",
        creditScore         : 720,
        custIncome          : 55000,
        isEmployed          : true,
        dtiRatio            : 35

    }

    function loanEligibilityCheck(customer: custTemplate): void
    {
        if (customer.creditScore > 750)
        {
            console.log(`Customer Name           : ${customer.custName}`)
            console.log(`Credit Score            : ${customer.creditScore}`)
            console.log(`Loan Eligibility Status : Eligible`);
        }
        else if (customer.creditScore >= 650 && customer.creditScore <= 750) 
        {
            if (customer.custIncome >= 55000) 
            {
                if (customer.isEmployed == true) 
                {
                    if (customer.dtiRatio < 40) 
                    {
                         console.log(`Customer Name           : ${customer.custName}`)
                         console.log(`Credit Score            : ${customer.creditScore}`)
                         console.log(`Employment Status       : ${customer.isEmployed}`)
                         console.log(`Income Ratio            : ${customer.dtiRatio}`)
                         console.log(`Loan Eligibility Status : Eligible`);
                    }
                    
                    else
                    {
                         console.log(`Customer Name           : ${customer.custName}`)
                         console.log(`Credit Score            : ${customer.creditScore}`)
                         console.log(`Employment Status       : ${customer.isEmployed}`)
                         console.log(`Income Ratio            : ${customer.dtiRatio}`)
                         console.log("Loan Eligibility Status : Not Eligible(DTI ratio greater than 40%)");
                    }
                }
                else
                {
                     console.log(`Customer Name           : ${customer.custName}`)
                     console.log(`Credit Score            : ${customer.creditScore}`)
                     console.log(`Employment Status       : ${customer.isEmployed}`)
                     console.log("Loan Eligibility Status : Not Eligible(customer is not employed)");
                }
            }
            else
            {
                console.log(`Customer Name           : ${customer.custName}`)
                console.log(`Credit Score            : ${customer.creditScore}`)
                console.log(`Customer Income         : ${customer.custIncome}`)
                console.log("Loan Eligibility Status : Not Eligible(income is less than 55000)");
            }
        }
        else if (customer.creditScore < 650) {
            console.log(`Customer Name           : ${customer.custName}`)
            console.log(`Credit Score            : ${customer.creditScore}`)
            console.log(`Loan Eligibility Status : Not Eligible(credit score is less than 650)`);
        }
    }

    loanEligibilityCheck(customer);