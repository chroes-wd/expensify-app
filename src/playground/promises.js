const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: "Chris Roe",
            age: 30,
        });
        reject('Something went wrong!');
    }, 1500);
});

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('error:', error);
});
