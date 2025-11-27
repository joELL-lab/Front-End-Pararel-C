// // //Asynchronous JavaScript

// // //Synchronous -> single thread -> one at a time -> blocking
// // // console.log("Process1");
// // // console.log("Process2");
// // // console.log("Process3"); //processing consumes time
// // // console.log("Process4");

// // //Asynchronous -> multi thread -> multiple at a time -> non-blocking
// // //1.Parallel execution
// // // setTimeout(() => {
// // //     console.log("Process 1");
// // // }, 5000);
// // // setTimeout(() => {
// // //     console.log("Process 2");
// // // }, 2000);
// // // setTimeout(() => {
// // //     console.log("Process 3");
// // // }, 4000);
// // // setTimeout(() => {
// // //     console.log("Process 4");
// // // }, 3000);

// // //2.Concurrent execution
// // setTimeout(() => {
// //     console.log("Process 1");
// //     setTimeout(() => {
// //         console.log("Process 2");
// //         setTimeout(() => {
// //             console.log("Process 3");
// //             setTimeout(() => {
// //                 console.log("Process 4");
// //             }, 5000);
// //         }, 5000);
// //     }, 5000);
// // }, 5000);

// //Promise -> pending -> fulfilled or rejected

// const newPromise = new Promise((resolve, reject) => {
//     if (condition) {
//         resolve("Promise fulfilled");
//     } else {
//         reject("Promise rejected");
//     }
// });
// //How to Use Promise
// //1. .then - catch
// newPromise
//     .then((result) => `${result} !!!`) //Process 1
//     .then((result) => console.log(result2)) //Process 2
//     .catch((error) => console.log(error)); //Process 3

// //2. async - await
// const getPromiseResult = async () => {
//     const result = await newPromise;
//     console.log(result);
// };

// getPromiseResult();

//Get data from API
// Change then/catch to async/await and show name field of each user
(async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        // Log each user's name
        users.forEach(user => console.log(user.name));

        // If running in a browser, also render the names into the DOM
        if (typeof document !== 'undefined') {
            let container = document.getElementById('userNames');
            if (!container) {
                container = document.createElement('ul');
                container.id = 'userNames';
                document.body.appendChild(container);
            }
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = user.name;
                container.appendChild(li);
            });
        }
    } catch (error) {
        console.error('Failed to load users:', error);
    }
})();

// End async/await conversion