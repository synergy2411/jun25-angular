// let url = "http://example.com/books";

// function makeFirstRequest(endpoint, cb) {
//   const data = fetch(endpoint);
//   cb(null, data);
// }

// function makeSecondRequest(data, cb) {
//   const result = fetch(data);
//   cb(null, result);
// }

// // Callback hell
// makeFirstRequest(url, function (error, result) {
//   makeSecondRequest(data, function (error, response) {});
// });

// Promise Producer

// function secondPromiseProducer() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([99]);
//     }, 1500);
//   });
// }

// function promiseProducer(arr) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (arr.length > 2) {
//         resolve({ message: "Success" });
//       } else {
//         reject(new Error("Too less values"));
//       }
//     }, 2000);
//   });
//   // second promise builder
//   return promise;
// }

// Promise Consumer
//  > then().catch()
//  > async...await

// async function consumePromiseWithAsyncAwait() {
//   try {
//     const marks = await secondPromiseProducer(); // 1.5s
//     const response = await promiseProducer(marks); // 2s
//     console.log("RESPONSE : ", response);
//   } catch (err) {
//     console.error(err);
//   }
// }

// consumePromiseWithAsyncAwait();

// function consumePromise() {
//   // Serial XHR Calls
//   secondPromiseProducer()
//     .then((marks) => {
//       promiseProducer(marks)
//         .then((response) => console.log(response))
//         .catch(console.error);
//     })
//     .catch((error) => console.log(error));

//   // promiseProducer([1])
//   //   .then((response) => {
//   //     console.log("RESPONSE : ", response);

//   //     return response.message;
//   //   })
//   //   .then((message) => {
//   //     console.log("Second statement :", message);
//   //   })
//   //   .then(() => console.log("Third Statement"))
//   //   .catch((error) => console.error(error));
// }

// consumePromise();

window.onload = function () {
  const btnFetch = document.querySelector("#btnFetch");
  const listContainer = document.querySelector("#listContainer");

  btnFetch.addEventListener("click", async function (e) {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const allPosts = await response.json();
      console.log(allPosts);
      allPosts.forEach((post) => {
        const liElement = document.createElement("li");
        liElement.innerHTML = `
          <h4>${post.title.toUpperCase()}</h4>
          <p>${post.body}</p>
        `;
        listContainer.appendChild(liElement);
      });
    } catch (err) {
      console.log(err);
    }
  });
};

// Promise API
// - resolve :  settled promise successfully
// - reject :  settled promise failure
// - all: executes multiple promises parallely or nothing
// - allSettled : executes multiple promises with reasons
// - any : first settled successfully
// - race : first settled promise will executes

// Promise.resolve({ data: "Resolved" }).then(console.log);
// Promise.reject(new Error("Something went wrong")).catch(console.error);

function promiseFactory(data, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ms < 2000) {
        reject(new Error("Some error occured! - " + data + " promise"));
      } else {
        resolve(data);
      }
    }, ms);
  });
}

const promiseOne = promiseFactory("First", 800);
const promiseTwo = promiseFactory("Second", 1200);
const promiseThree = promiseFactory("Third", 2400);
const allPromises = [promiseOne, promiseTwo, promiseThree];

// Promise.all(allPromises).then(console.log).catch(console.error);
// Promise.allSettled(allPromises).then(console.log).catch(console.error);
// Promise.any(allPromises).then(console.log).catch(console.error);
Promise.race(allPromises).then(console.log).catch(console.error);
