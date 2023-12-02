import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  presentation: any
  inprogress: boolean

  constructor() {
    this.presentation = null
  }

  getPresentation(): any {
    if (this.presentation === null) {
      return []
    }

    return this.presentation
  }

  setPresentation(payload: any) {
    this.presentation = payload
  }
}
