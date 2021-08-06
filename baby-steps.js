function sum() {
    var sum = 0;
    for (let i = 2; i < process.argv.length; i++) {
        sum = sum + parseInt(process.argv[i]);
    }
    return sum;
}

console.log(sum());