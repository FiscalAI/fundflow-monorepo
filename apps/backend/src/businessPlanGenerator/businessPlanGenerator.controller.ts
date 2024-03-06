import { Body, Controller, Get, Post } from '@nestjs/common';
import { BusinessPlanGeneratorService } from './businessPlanGenerator.service';
import { Public } from 'src/custom.decorator/custom.deco';
import { BusinessPlanDto } from './dto/businessPlan.dto';

@Controller('business-plan-generator')
export class BusinessPlanGeneratorController {
  constructor(private service: BusinessPlanGeneratorService) {}

  @Public()
  @Get('status')
  getStatus() {
    return this.service.getStatus();
  }

  @Post('')
  generateBusinessPlan(@Body() businessPlanDto: BusinessPlanDto) {
    return this.service.generateBusinessPlan(businessPlanDto);
  }
}
