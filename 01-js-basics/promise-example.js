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

function secondPromiseProducer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([99]);
    }, 1500);
  });
}

function promiseProducer(arr) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (arr.length > 2) {
        resolve({ message: "Success" });
      } else {
        reject(new Error("Too less values"));
      }
    }, 2000);
  });
  // second promise builder
  return promise;
}

// Promise Consumer
//  > then().catch()
//  > async...await

async function consumePromiseWithAsyncAwait() {
  try {
    const marks = await secondPromiseProducer(); // 1.5s
    const response = await promiseProducer(marks); // 2s
    console.log("RESPONSE : ", response);
  } catch (err) {
    console.error(err);
  }
}

consumePromiseWithAsyncAwait();

function consumePromise() {
  // Serial XHR Calls
  secondPromiseProducer()
    .then((marks) => {
      promiseProducer(marks)
        .then((response) => console.log(response))
        .catch(console.error);
    })
    .catch((error) => console.log(error));

  // promiseProducer([1])
  //   .then((response) => {
  //     console.log("RESPONSE : ", response);

  //     return response.message;
  //   })
  //   .then((message) => {
  //     console.log("Second statement :", message);
  //   })
  //   .then(() => console.log("Third Statement"))
  //   .catch((error) => console.error(error));
}

consumePromise();

// Serial XHR Call
// Parallel XHR Calls
