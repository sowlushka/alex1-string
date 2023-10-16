import { stringSolution1 } from "./task1";
import { stringSolution2 } from "./task2";
import { stringSolution3 } from "./task3";
import { stringSolution4 } from "./task4";

export const tasks=[
    {
        id: 1,
        task: "Спросите у пользователя телефонный номер и выведете его в нормализованном виде.",
        inputText: "Введите номер телефона:",
        inputType: "tel",
        solution: stringSolution1
    },
    {
        id: 2,
        task: "Пользователь вводит строку. Нужно сформировать и вывести массив из всех чисел в этой строке.",
        inputText: "Введите текст с числами:",
        solution: stringSolution2
    },
    {
        id: 3,
        task: "Подсчитайте количество строчных и прописных букв в строке. Считается, что в строке могут быть только английские буквы и пробелы.",
        solution: stringSolution3
    },
    {
        id: 4,
        task: "Выведете самое длинное слово в предложении (слова разбиты пробелами).",
        inputText: "Напишите предложение:",
        solution: stringSolution4
    }
];

