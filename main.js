function processArray(array, callback) {
    let result = [];
    for (let element of array) {
        result.push(callback(element));
    }
    return result;
}
function doubleElement(element) {
    return element * 2;
}
function reverseElement(element) {
    return element.split("").reverse().join("");
}
console.log("Завдання 1:");
console.log(processArray([1, 2, 3, 4, 5], doubleElement));
console.log(processArray(["hello", "world"], reverseElement));

function filterArray(array, callback) {
    let result = [];
    for (let element of array) {
        if (callback(element)) {
            result.push(element);
        }
    }
    return result;
}
function isEven(number) {
    return number % 2 === 0;
}
function isShortWord(word) {
    return word.length <= 4;
}
console.log("Завдання 2:");
console.log(filterArray([1, 2, 3, 4, 5], isEven));
console.log(filterArray(["cat", "elephant", "dog", "bird"], isShortWord));
function washDishes() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Посуд вимито");
        }, 2000);
    });
}
function cleanRoom() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Кімнату прибрано");
        }, 4000);
    });
}
function makeDinner() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Вечеря приготована");
        }, 7000);
    });
}
console.log("Завдання 3:");

washDishes()
    .then((result) => {
        console.log(result);
        return cleanRoom();
    })
    .then((result) => {
        console.log(result);
        return makeDinner();
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log("Помилка:", error);
    });
function sortArray(array) {
    return new Promise((resolve, reject) => {
        if (array.length === 0) {
            reject("Масив порожній");
        } else {
            setTimeout(() => {
                let sortedArray = [...array].sort((a, b) => a - b);
                resolve(sortedArray);
            }, 2000);
        }
    });
}
console.log("Завдання 4:");

sortArray([5, 2, 8, 1, 3])
    .then((result) => {
        console.log("Відсортований масив:", result);
    })
    .catch((error) => {
        console.log("Помилка:", error);
    });
function multiplyAsync(a, b) {
    return new Promise((resolve, reject) => {
        if (
            typeof a !== "number" ||
            typeof b !== "number" ||
            !Number.isFinite(a) ||
            !Number.isFinite(b)
        ) {
            reject("Некоректні значення");
        } else {
            setTimeout(() => {
                resolve(a * b);
            }, 2000);
        }
    });
}
async function main() {
    try {
        let result = await multiplyAsync(6, 9);
        console.log("Результат множення:", result);
    } catch (error) {
        console.log("Помилка:", error);
    }
}
console.log("Завдання 5:");
main();
function sortArrayAsync(array) {
    return new Promise((resolve, reject) => {
        if (array.length === 0) {
            reject("Масив порожній");
        } else {
            setTimeout(() => {
                let sortedArray = [...array].sort((a, b) => a - b);
                resolve(sortedArray);
            }, 2000);
        }
    });
}
async function mainSort() {
    try {
        let result = await sortArrayAsync([9, 4, 7, 1, 5, 2]);
        console.log("Відсортований масив:", result);
    } catch (error) {
        console.log("Помилка:", error);
    }
}
console.log("Завдання 6:");
mainSort();
