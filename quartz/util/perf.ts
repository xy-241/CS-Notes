import pretty from "pretty-time"
import { styleText } from "util"

export class PerfTimer {
  evts: { [key: string]: [number, number] }

  constructor() {
    this.evts = {}
    this.addEvent("start")
  }

  addEvent(evtName: string) {
    this.evts[evtName] = process.hrtime()
  }

  timeSince(evtName?: string): string {
    return styleText("yellow", pretty(process.hrtime(this.evts[evtName ?? "start"])))
  }
}
