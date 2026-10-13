const countVowels = require('../main.js')

describe ("countVowels", function(){
    //positive
    test("Return the number of vowels in the string.", function(){
        expect("Hello, World").toBe(countVowels(3))
    })
})
    //negative
//     test("Return empty if no vowels are received.", function(){
//         expect( some code ).toBe( some code )
//     })
//     //edge case
//     test("Return every character if only vowels received.", function(){
//         expect( some code ).toBe( some code )
//     })
// })