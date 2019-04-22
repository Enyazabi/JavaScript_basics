var age = prompt('Enter your age','')

function checkAge (age) {

    return (!(age > 18) || confirm('Your passport?'))
}
checkAge()