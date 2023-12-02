import { Controller, Get, Post, Req } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('fetch-presentation')
  getPresentation(): any {
    return this.appService.getPresentation()
  }

  @Post('/set-presentation')
  getYeeh(@Req() req): string {
    const { body } = req
    console.log(body)
    this.appService.setPresentation(body)

    return '200'
  }
}
