import readline from "readline"

export class QuartzLogger {
  verbose: boolean
  private spinnerInterval: NodeJS.Timeout | undefined
  private spinnerText: string = ""
  private spinnerIndex: number = 0
  private readonly spinnerChars = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"]

  constructor(verbose: boolean) {
    this.verbose = verbose
  }

  start(text: string) {
    this.spinnerText = text
    if (this.verbose) {
      console.log(text)
    } else {
      this.spinnerIndex = 0
      this.spinnerInterval = setInterval(() => {
        readline.clearLine(process.stdout, 0)
        readline.cursorTo(process.stdout, 0)
        process.stdout.write(`${this.spinnerChars[this.spinnerIndex]} ${this.spinnerText}`)
        this.spinnerIndex = (this.spinnerIndex + 1) % this.spinnerChars.length
      }, 20)
    }
  }

  updateText(text: string) {
    this.spinnerText = text
  }

  end(text?: string) {
    if (!this.verbose && this.spinnerInterval) {
      clearInterval(this.spinnerInterval)
      this.spinnerInterval = undefined
      readline.clearLine(process.stdout, 0)
      readline.cursorTo(process.stdout, 0)
    }

    if (text) {
      console.log(text)
    }
  }
}
