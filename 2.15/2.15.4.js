
for (var i=2; i<=100; i++) {

    var primeNumber = true;

    for (var j = 2; j<i; j++ ) {

        if (i % j === 0) {

            primeNumber = false
        }
    }
    if (primeNumber === true) {

        console.log (i)
    }

}