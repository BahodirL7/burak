// P-TASK:

// Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

function objectToArray(obj: object):any[] {
    // case 1
    // return Object.entries(obj);

    // case 2
    let arr = Array.from(Object.entries(obj), ([key, value]) => [key, value]);
    return arr;

};

const result = objectToArray({a: 10, b: 20});
console.log("P-TASK:", result);


// O-TASK:

// Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

// function calculateSumOfNumbers(numbers: any[]) {

//     let array = 0;
//     for (let num of numbers) {
//         if (typeof num === "number") {
//             array += num;
//         }
//     } return array;
// }

// const result = calculateSumOfNumbers([10, "10", {son: 10}, true, 35]);
// console.log("O-TASK:", result);

// N-TASK:

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

// function palindromCheck(str: string) {
//     const palindrom = str.split('').reverse().join('');
//     console.log(palindrom);
//     return palindrom === str ? true : false;
// }

// const result = palindromCheck('dad');
// console.log("N-TASK:", result);

// M-TASK:

// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
// MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

// case 1
// function getSquareNumbers1(numbers: number[]): any[] {
//     return numbers.map((num: number) => ({number: num, square: num * num}));

// };

// const result1 = getSquareNumbers1([1, 2, 3]);
// console.log("M-TASK1", result1);

// // case 2
// function getSquareNumbers2(numbers: number[]) {
//     return numbers.reduce((acc, num) => {
//         acc.push({
//             number: num,
//             square: num * num
//         });
//         return acc
//     }, [] as { number: number, square: number }[]);
// };

// const result2 = getSquareNumbers2([4, 5, 6]);
// console.log("M-TASK2", result2);

// // case 3
// function getSquareNumbers3(numbers: number[]) {
//     const result: any[] = [];
//     for (let num of numbers) {
//         result.push({
//             number: num,
//             square: num * num
//         })
//     } return result;
// }

// const result3 = getSquareNumbers3([7, 8, 9]);
// console.log("M-TASK3", result3);

// L-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

// function reverseSentence(str: string) {
//     const words = str.split(" ");
//     // console.log(words);
//     const reversedWords = words.map(word => word.split("").reverse().join(''));
//     // console.log(reversedWords);
//     return reversedWords.join(' ');
// }

// const result = reverseSentence("we like coding!");
// console.log("L-TASK", result);

// K-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;

// case 1
// function countVowels1(str: string) {
//     let vowelsCcount = 0;
    // console.log(str.length);
    
//     const array = str.split("");
    // console.log(array.length);
    
//     for (let i = 0; i <= array.length; i++) {
//         if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
//             vowelsCcount += 1
//         }
//     } return vowelsCcount;
// }

// const result1 = countVowels1("striiing");
// console.log("K-TASK:", result1);

// // case 2
// function countVowels2(str: string) {
//     const array = str.split("");
//     return array.filter(letter => "aeiou".includes(letter)).length;
// }

// const result2 = countVowels2("string");
// console.log("K-TASK:", result2);

// J-TASK:

// Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
// MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"

// case 1 
// let findLongestWord1 = (str: string) => {
//     let longestWord = "";
//     const arr = str.split(" ");

//     for (let i of arr) {
//         if (i.length > longestWord.length) {
//             longestWord = i;
//         }
//     } return longestWord
// }

// const result1 = findLongestWord1("I came from Uzbekistan");
// console.log("J-TASK-1:", result1);

// case 2
// let findLongestWord2 = (str: string) => {

//    const words = str.split(" ");

//    const lengthes = words.map(word => word.length);

//    const maxIndex = lengthes.indexOf(Math.max(...lengthes));

//    return words[maxIndex]; 
// }

// const result2 = findLongestWord2("I came from Germany");
// console.log("J-TASK-2:", result2);

// I-TASK:

// Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4

// function majorityElement(arr: number[]): number {
//   const count: { [key: number]: number } = {};
//   for (let num of arr) {
//       count[num] = (count[num] || 0) + 1;
//   }
//   let maxCount = 0;
//   let majorityElement = arr[0];

//   for (let num in count) {
//       if (count[num] > maxCount) {
//           maxCount = count[num];
//           majorityElement = Number(num);
//       }
//   } return majorityElement;
// }
// const result = majorityElement([1, 2, 3, 4, 5, 4, 3, 4]);
// console.log("I-TASK:", result);

// H2-TASK: 

/*
Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: getDigits("m14i1t") return qiladi "141"
*/

// // case 1
// function getDigits(str: string): string {
//   let digits = '';
//   for (let s of str) {
//     if(!isNaN(Number(s))) {
//       digits += s;
//     }
//   } return digits;
// }

// const result = getDigits("m14i71t")
// console.log("H2-TASK:", result);

// // case 2
// function getDigits2(str: string) {
//   return str.split("").filter(char => !isNaN(Number(char))).join("");
// }

// const result2 = getDigits2("m14i71t6")
// console.log("H2-TASK-1:", result2);

// H-TASK:

// Shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

// function getPositive(arr: number[]): string {
//   const total = arr.filter((num: number) => num > 0).join("");
//   return total;
// }

// const result = getPositive([1, -4, 2]);
// console.log("H-TASK:", result);

// G-TASK:

/*
Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.
*/

// function getHighestIndex(arr) {
//   let maxValue = Math.max(...arr);
//   return arr.indexOf(maxValue);
// }

// let array = [7, 11, 12, 22, 8];
// let result = getHighestIndex(array);
// console.log("G-TASK:", result);
