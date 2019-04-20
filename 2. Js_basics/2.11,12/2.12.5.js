var login = prompt('enter your login','')

var message

(login == 'Vasya') ? message ='Hi' :
    (login =='Admin') ? message ='Nice to meet you' :
        (login == '') ? message ='Enter you login, bitch' :
            message='.....'

alert(message)
