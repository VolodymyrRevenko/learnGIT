function sedan(bmw, lada) {
    console.log('choose your number: ')
    bmw = prompt('1:')
    lada = prompt('2:')


    if (bmw < lada) {
        console.log("BMW THE BEST")

    } else if (lada > bmw) {
        console.log("LADA YHE BEST")
    }

}

sedan()