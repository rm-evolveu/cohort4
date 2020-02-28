
const functions = {
    
    size: (num) => {
        if (num < 10) return "small";
        if (num < 20) return "medium";
        if (num < 100) return "large";
        return "extra large";
    },

    add: (num1, num2) => {
        return num1 + num2;
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    },

    isEven: (num) => {
        if (num % 2 === 0) {return true};
        return false;
    }, 

    calculateTax: (income) => {
        if (income < 48535.01) {
            return income * 0.15 
        } else if (income < 97069.01) {
            return 7280.25 + ((income - 48535) * 0.205) 
        } else if (income < 150473.01) {
            return 17229.72 + ((income - 97069) * 0.26) 
        } else if (income < 214368.01) {
            return 35759.27 + ((income - 150473) * 0.29) 
        } else {
            return 54288.82 + ((income - 214368) * 0.33)
        }
    }

    
};

export default functions;
