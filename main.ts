serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    console.log(serial.readLine())
})
serial.setBaudRate(BaudRate.BaudRate57600)
