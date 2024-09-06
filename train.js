// H-TASK:

// Shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

function getPositive(arr) {
  const total = arr.filter((num) => num > 0).join("");
  return total;
}

const result = getPositive([1, -4, 2]);
console.log("H-TASK:", result);

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
