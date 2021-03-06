import functions from './syntax'

test('What is the type of input?', () => {
    expect(functions.defineType(1)).toBe("number"); 
    expect(functions.defineType(true)).toBe("boolean"); 
    expect(functions.defineType("Hello")).toBe("string"); 
    expect(functions.defineType({1: "House"})).toBe("object");  
    expect(functions.defineType([][3])).toBe("undefined");  
    expect(functions.defineArray([1, 2, 3])).toBe(true); 
});

test('Is number negative or positive?', () => {
    expect(functions.isNegative(-1)).toBe(true); 
    expect(functions.isNegative(2)).toBe(false); 
});

test('Add two numbers', () => {
    expect(functions.addTwoNumbers(1, 1)).toBe(2); 
    expect(functions.addTwoNumbers(1, 34)).not.toBe(7); 
});

test('Add letter to the front', () => {
    expect(functions.addToFront(1)).toEqual([1, 2, 3]); 
    expect(functions.addToFront(9)).toEqual([9, 2, 3]); 
});

test('Add letter to the end', () => {
    expect(functions.addToEnd(4)).toEqual([1, 2, 3, 4]); 
    expect(functions.addToEnd(5)).not.toEqual([1, 2, 3, 4]); 
});

test('Update the first value in an array', () => {
    expect(functions.updateFirstValue(["Chinamans Peak", "East End of Rundle", "Grotto Mountain", "Mount Lady McDonald"], "Ha Ling Peak")).toEqual(["Ha Ling Peak", "East End of Rundle", "Grotto Mountain", "Mount Lady McDonald"]); 
    expect(functions.updateFirstValue([7, 2, 3], 1)).toEqual([1, 2, 3]); 
});

test('Change verb tense', () => {
    expect(functions.loopFor(["start", "work", "finish"], "ed")).toEqual(["started", "worked", "finished"]); 
    expect(functions.loopFor(["help", "look"], "ing")).toEqual(["helping", "looking"]); 
});

test('Check how many items in basket', () => {
    expect(functions.loopForIn({apples: 5, oranges: 3, kiwis: 1})).toEqual(9);
    expect(functions.loopForIn({men: 23, women: 35})).toEqual(58);
});

test('Array from MIN to MAX', () => {
    expect(functions.whileLoop(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(functions.whileLoop(-1, 3)).toEqual([-1, 0, 1, 2, 3]);
});

test('Add ! to words in array', () => {
    expect(functions.doWhileLoop(["First", "Second"])).toEqual(["First!", "Second!"]);
    expect(functions.doWhileLoop(["Wow", "Amazing", "Well done"])).toEqual(["Wow!", "Amazing!", "Well done!"]);
});

test('Turn words into UPPERCASE', () => {
    expect(functions.dummyFunction(["First", "Second"])).toEqual(["FIRST", "SECOND"]);
    expect(functions.dummyFunction(["camelCase", "lower", "UPPER"])).toEqual(["CAMELCASE", "LOWER", "UPPER"]);
});

test('Access values of an object', () => {
    expect(functions.lookupKey({firstName: "John", lastName: "Smith"})).toEqual(["John", "Smith"]);
    expect(functions.lookupKey({Calgary: 200, Edmonton: 150})).toEqual([200, 150]);
});

