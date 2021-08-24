const MyTemperatureConversion = require('../src/process.js');
let MyTemperatureConversionObj=new MyTemperatureConversion();
describe("Testing input check function, input origin unit-destination unit-temperature", ()=>{
    test("Input origin and destination unit only accept these code C, F, R, K in string. temperature unit accept input as number", ()=>{
        
        expect(MyTemperatureConversionObj.inputCheck(1, null, null)).toEqual({
            ret: false, err: "Please pass origin temperature unit such as (C, R, K, F)"
        });

        expect(MyTemperatureConversionObj.inputCheck("L", null, null)).toEqual({
            ret: false, err: "Please pass origin temperature unit such as (C, R, K, F)"
        });

        expect(MyTemperatureConversionObj.inputCheck("", "F", 37)).toEqual({
            ret: false, err: "Please pass origin temperature unit such as (C, R, K, F)"
        });

        expect(MyTemperatureConversionObj.inputCheck("C", 0, null)).toEqual({
            ret: false, err: "Please pass destination temperature unit such as (C, R, K, F)"
        });

        expect(MyTemperatureConversionObj.inputCheck("C", "P", null)).toEqual({
            ret: false, err: "Please pass destination temperature unit such as (C, R, K, F)"
        });

        expect(MyTemperatureConversionObj.inputCheck("C", "P", 37)).toEqual({
            ret: false, err: "Please pass destination temperature unit such as (C, R, K, F)"
        });

        expect(MyTemperatureConversionObj.inputCheck("C", "K", "O")).toEqual({
            ret: false, err: "Please pass origin temperature as number"
        });

        expect(MyTemperatureConversionObj.inputCheck("C", "K", 36)).toEqual({
            ret: true, err: null
        });

        expect(MyTemperatureConversionObj.inputCheck("C", "K", 36.5)).toEqual({
            ret: true, err: null
        });
    })
});

describe("Testing temperatureConversion function, input origin unit-destination unit-temperature", ()=>{
    test("Convert C to R. Input 36 C and expected 28.8 R", ()=>{
        expect(MyTemperatureConversionObj.temperatureConversion("C", "R", 36)).toEqual({
            temperature: 28.8, ret: true, err: null
        });
    })

    test("Convert C to K. Input 36 C and expected 309.15 K", ()=>{
        expect(MyTemperatureConversionObj.temperatureConversion("C", "K", 36)).toEqual({
            temperature: 309.15, ret: true, err: null
        });
    })

    test("Convert C to F. Input 36 C and expected 96.8 F", ()=>{
        expect(MyTemperatureConversionObj.temperatureConversion("C", "F", 36)).toEqual({
            temperature: 96.8, ret: true, err: null
        });
    })

    test("Convert C to C. Input 36 C and expected 36 C", ()=>{
        expect(MyTemperatureConversionObj.temperatureConversion("C", "C", 36)).toEqual({
            temperature: 36.0, ret: true, err: null
        });
    })

    test("Convert R to C. Input 28.8 R and expected 36 C", ()=>{
        expect(MyTemperatureConversionObj.temperatureConversion("R", "C", 28.8)).toEqual({
            temperature: 36.0, ret: true, err: null
        });
    })

    test("Convert R to K. Input 50 R and expected 335.65 K", ()=>{
        expect(MyTemperatureConversionObj.temperatureConversion("R", "K", 50)).toEqual({
            temperature: 335.65, ret: true, err: null
        });
    })

    test("Convert R to F. Input 50 R and expected 144.5 F", ()=>{
        expect(MyTemperatureConversionObj.temperatureConversion("R", "F", 50)).toEqual({
            temperature: 144.5, ret: true, err: null
        });
    })

    test("Convert R to R. Input 50 R and expected 50 R", ()=>{
        expect(MyTemperatureConversionObj.temperatureConversion("R", "R", 50)).toEqual({
            temperature: 50.0, ret: true, err: null
        });
    })

    test("Convert K to C. Input 309.5 K and expected 36 C", ()=>{
        expect(MyTemperatureConversionObj.temperatureConversion("K", "C", 309.15)).toEqual({
            temperature: 36.0, ret: true, err: null
        });
    })

    test("Convert K to R. Input 335.65 K and expected 50 R", ()=>{
        expect(MyTemperatureConversionObj.temperatureConversion("K", "R", 335.65)).toEqual({
            temperature: 50.0, ret: true, err: null
        });
    })

    test("Convert K to F. Input 300 K and expected 80.33 F", ()=>{
        expect(MyTemperatureConversionObj.temperatureConversion("K", "F", 300).temperature).toBeCloseTo(80.33, 10);
    })

    test("Convert K to K. Input 335.65 K and expected 335.65 K", ()=>{
        expect(MyTemperatureConversionObj.temperatureConversion("K", "K", 335.65)).toEqual({
            temperature: 335.65, ret: true, err: null
        });
    })

    test("Convert F to C. Input 96.8 F and expected 36 K", ()=>{
        expect(MyTemperatureConversionObj.temperatureConversion("F", "C", 96.8)).toEqual({
            temperature: 36, ret: true, err: null
        });
    })

    test("Convert F to R. Input 144.5 F and expected 50 R", ()=>{
        expect(MyTemperatureConversionObj.temperatureConversion("F", "R", 144.5)).toEqual({
            temperature: 50, ret: true, err: null
        });
    })

    test("Convert F to K. Input 80.33 F and expected 300 K", ()=>{
        expect(MyTemperatureConversionObj.temperatureConversion("F", "K", 80.33)).toEqual({
            temperature: 300, ret: true, err: null
        });
    })

    test("Convert F to F. Input 80.33 F and expected 80.33 F", ()=>{
        expect(MyTemperatureConversionObj.temperatureConversion("F", "F", 80.33)).toEqual({
            temperature: 80.33, ret: true, err: null
        });
    })

});

// describe("Testing change", () => {

//     test("When making change for amount 0, return 1 regardless of the coins passed", () => {
//         const coins1 = [];
//         const coins2 = [1, 3, 19];
//         const coins3 = [5, 100];

//         expect(change(0, coins1)).toEqual(1);
//         expect(change(0, coins2)).toEqual(1);
//         expect(change(0, coins3)).toEqual(1);
//     });

//     test("When making change for 8, with coins [1, 2, 3] return  10", () => {
//         const coins = [1, 2, 3];

//         expect(change(8, coins)).toEqual(10);
//     });

// });

// describe("Testing fib", () => {

//     test("Return 0 as the fibonacci number of 0", () => {
//         expect(fib(0)).toEqual(0);
//     });

//     test("Return 1 as the fibonacci number of 1", () => {
//         expect(fib(1)).toEqual(1);
//     });

//     test("Return 21 as the fibonacci number of 8", () => {
//         expect(fib(8)).toEqual(21);
//     });

// });