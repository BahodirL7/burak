// I-TASK:

// Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4

function majorityElement(arr: number[]): number {
  const count: { [key: number]: number } = {};
  for (let num of arr) {
      count[num] = (count[num] || 0) + 1;
  }
  let maxCount = 0;
  let majorityElement = arr[0];

  for (let num in count) {
      if (count[num] > maxCount) {
          maxCount = count[num];
          majorityElement = Number(num);
      }
  } return majorityElement;
}
const result = majorityElement([1, 2, 3, 4, 5, 4, 3, 4]);
console.log("I-TASK:", result);

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
