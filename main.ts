serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    console.log(serial.readLine())
})
namespace LED_MATRIX {
export enum Colors {
    WHITE = 0x01,
    RED = 0x02,
    ORANGE = 0x04,
    YELLOW = 0x05,
    GREEN = 0x07,
    SKY_BLUE = 0x09,
    TEAL = 0x06,
    BLUE = 0x08,
    PURPLE = 0x0a,
    LAVENDER = 0x0b,
    DARK_PURPLE = 0x0c,
    TAN = 0x0d,
    BROWN = 0x0e,
    BLACK = 0x0f,
    PINK = 0x03,
    BLANK = 0x00
}
serial.setBaudRate(BaudRate.BaudRate57600)
console.log("Start")
export class LedMatrixImage {
    imageString: string = `
    . . . . . . . .
    . . . . . . . .
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . .
    . . . . . . . .
    . . . . . . . .
    . . . . . . . .
    `
    constructor(image?: string) {
        if (image != undefined) {
            this.imageString = image
        }
    }

}
console.log(Colors.BLACK)
let item: LedMatrixImage = new LedMatrixImage()
}
