

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Akanksha',
        //     age: 26
        // });
        reject('Something went wrong!');
    }, 5000);
});

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('error: ', error);
});