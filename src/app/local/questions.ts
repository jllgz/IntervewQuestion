import { IQuestion } from "../interfaces/IQuestion";

export let questions: IQuestion[] = [
    {
        id: 1,
        categoryId: 1,
        question: 'sdfs',
        answer: '',
        image: ''
    },
    {
        id: 2,
        categoryId: 1,
        question: 'Differenciate a char vs a string in C#',
        answer: 'Character refers to a single letter, number, space, punctuation mark or a symbol that can be represented using a computer while String refers to a set of characters.',
        image: null
    },
    {
        id: 3,
        categoryId: 1,
        question: 'What is null?',
        answer: 'Null is a special value that represents an empty or unknown value',
        image: null
    },
    {
        id: 4,
        categoryId: 1,
        question: 'What is the difference between =, == and ===?',
        answer: '= in JavaScript is used for assigning values to a variable, == converts the variable values to the same type before performing comparison. This is called type coercion. === does not do any type conversion (coercion) and returns true only if both values and types are identical for the two variables being compared.',
        image: null
    },
    {
        id: 5,
        categoryId: 1,
        question: 'How do you install node packages?',
        answer: 'npm install',
        image: null
    },
    {
        id: 6,
        categoryId: 1,
        question: 'How do you combine 2 strings together?',
        answer: 'string concatination. can use + operator, array.join(), string.concat()',
        image: null
    },
    {
        id: 7,
        categoryId: 1,
        question: 'What is the difference between a prop and a state?',
        answer: 'props get passed to the component (similar to function parameters) whereas state is managed within the component',
        image: null
    },
    {
        id: 8,
        categoryId: 1,
        question: 'What does API stand for and why would you use it?',
        answer: 'API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other.',
        image: null
    },
    {
        id: 9,
        categoryId: 1,
        question: 'How would you push an item to the beginning of an array in JavaScript?',
        answer: '.unshift',
        image: null
    },
    {
        id: 10,
        categoryId: 1,
        question: 'How do you represent AND, OR, and NOT in JS',
        answer: '&&, ||, !',
        image: null
    },
    {
        id: 11,
        categoryId: 1,
        question: 'Give me examples of ternary, binary, and unary(At least 1 of each)?',
        answer: 'ternary: condition ? answer1 : answer2, binary: 1+1, == , unary: !, ++, --',
        image: null
    },
    {
        id: 12,
        categoryId: 1,
        question: 'What is the difference between Shift vs Pop in JS?',
        answer: 'shift() method removes the first element and whereas the pop() method removes the last element from an array.',
        image: null
    },
    {
        id: 13,
        categoryId: 1,
        question: 'Using JS, what does console.log(10+7+”5”) print out?',
        answer: '"175"',
        image: null
    },
    {
        id: 14,
        categoryId: 1,
        question: 'Let a = b = 5; what will this result in?',
        answer: '5',
        image: null
    },
    {
        id: 15,
        categoryId: 1,
        question: 'What is the difference between and int and a double in C#?',
        answer: "int stores whole numbers from -2,147,483,648 to 2,147,483,647 while double stores fractional numbers or floating points numbers. Sufficient for storing 15 decimal digits",
        image: null
    },
    {
        id: 16,
        categoryId: 1,
        question: 'How do you enable strict mode in Javascript?',
        answer: '"use strict";',
        image: null
    },
    {
        id: 17,
        categoryId: 1,
        question: 'What is the difference between Function Declaration and Function Expression?',
        answer: 'The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions. Function expressions in JavaScript are not hoisted, unlike function declarations',
        image: null
    },
    {
        id: 18,
        categoryId: 1,
        question: 'What is JSX?',
        answer: "JSX stands for JavaScript XML. JSX is a JavaScript Extension Syntax used in React to easily write HTML and JavaScript together. It enables developer to create virtual DOM using XML syntax.",
        image: null
    },
    {
        id: 19,
        categoryId: 1,
        question: 'How do you enable strict mode in Javascript?',
        answer: '"use strict";',
        image: null
    },
    {
        id: 20,
        categoryId: 1,
        question: 'Why would you use a Guard Clause in Javascript?',
        answer: 'A guard clause is simply a single piece of conditional logic at the beginning of a function which will return from the function early if a certain condition is met.',
        image: null
    },
    {
        id: 21,
        categoryId: 1,
        question: 'What does a debugger do in Javascript?',
        answer: "Debuggers set breakpoints (places where code execution can be stopped), and examine variables while the code is executing.",
        image: null
    },
    {
        id: 22,
        categoryId: 1,
        question: 'Define and code a string interpolation.',
        answer: 'String interpolation in JavaScript is performed by template literals (strings wrapped in backticks `) and ${expression} as a placeholder.',
        image: null
    },
    {
        id: 23,
        categoryId: 3,
        question: 'Fizz Buzz: Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.',
        answer: '',
        image: null
    },
    {
        id: 24,
        categoryId: 3,
        question: 'Sum Arrays:  Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.(You can assume that you are only given numbers, You cannot assume the size of the array, You can assume that you do get an array and if the array is empty, return 0.)',
        answer: '',
        image: null
    },
    {
        id: 25,
        categoryId: 3,
        question: "Build a tower of numbers using loops to print",
        answer: '',
        image: null
    },
    {
        id: 26,
        categoryId: 2,
        question: 'Describe or draw what this the columns will look like.',
        answer: '',
        image: 'assets/question-Img/BootstrapColumns.png'
    },
    {
        id: 27,
        categoryId: 2,
        question: 'What will this evaluate to?',
        answer: '',
        image: 'assets/question-Img/CharError.png'
    },
    {
        id: 28,
        categoryId: 2,
        question: 'Refactor this function to an arrow function',
        answer: '',
        image: 'assets/question-Img/ConvertToArrowFunction.PNG'
    },
    {
        id: 29,
        categoryId: 2,
        question: 'What will line 3 and 4 log out and explain why?',
        answer: '',
        image: 'assets/question-Img/DoubleTripleEqual.PNG'
    },
    {
        id: 30,
        categoryId: 2,
        question: 'What will this evaluate to?',
        answer: '',
        image: 'assets/question-Img/Filters.png'
    },
    {
        id: 31,
        categoryId: 2,
        question: 'Will this code work? why or why not.',
        answer: '',
        image: 'assets/question-Img/Hoisting.PNG'
    },
    {
        id: 32,
        categoryId: 2,
        question: 'What will this evaluate to?',
        answer: '',
        image: 'assets/question-Img/IntToHexa.png'
    },
    {
        id: 33,
        categoryId: 2,
        question: 'What will this evaluate to?',
        answer: '',
        image: 'assets/question-Img/NumToBool.png'
    },
    {
        id: 34,
        categoryId: 2,
        question: 'Locate the parameters and arguements',
        answer: '',
        image: 'assets/question-Img/ParamAndArgs.png'
    },
    {
        id: 35,
        categoryId: 2,
        question: 'What will this evaluate to?',
        answer: '',
        image: 'assets/question-Img/ShallowCopy.PNG'
    },
    {
        id: 36,
        categoryId: 2,
        question: 'What will this evaluate to?',
        answer: '',
        image: 'assets/question-Img/SpreadJoin.png'
    },
    {
        id: 37,
        categoryId: 2,
        question: 'Switch Fall through',
        answer: '',
        image: 'assets/question-Img/SwitchFallthrough.png'
    },
    {
        id: 38,
        categoryId: 2,
        question: 'Refactor this to use an if/if else/else statement',
        answer: '',
        image: 'assets/question-Img/Ternary2.png'
    },
    {
        id: 39,
        categoryId: 2,
        question: 'Refactor this code to make it easier to read.',
        answer: '',
        image: 'assets/question-Img/TernaryOperator.PNG'
    },
    {
        id: 40,
        categoryId: 2,
        question: "Navigate the array to determin the value of Cindy's favorite color",
        answer: 'participant[2].children[1].favoriteColor',
        image: 'assets/question-Img/AccessingNestedDataStructures.PNG'
    },
];
