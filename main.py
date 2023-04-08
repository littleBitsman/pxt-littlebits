def on_data_received():
    print(serial.read_line())
serial.on_data_received(serial.delimiters(Delimiters.NEW_LINE), on_data_received)

serial.set_baud_rate(BaudRate.BAUD_RATE57600)