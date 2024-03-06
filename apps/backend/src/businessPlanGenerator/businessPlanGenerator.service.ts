import { Injectable } from '@nestjs/common';
import { BusinessPlanDto } from './dto/businessPlan.dto';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable()
export class BusinessPlanGeneratorService {
  constructor() {}

  getStatus() {
    return 'Business Plan Generator is running!';
  }

  async generateBusinessPlan(businessPlanDto: BusinessPlanDto) {
    if (
      businessPlanDto.problem &&
      businessPlanDto.solution &&
      businessPlanDto.usp
    ) {
      try {
        return {
          status: 200,
          message: 'success',
          data: await this.getResponse(
            businessPlanDto.problem,
            businessPlanDto.solution,
            businessPlanDto.usp,
          ),
        };
      } catch {
        return 'Error generating business plan';
      }
    }
  }

  async getResponse(problem: string, solution: string, usp: string) {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);

    async function run() {
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

      const prompt: string = `${process.env.BUSINESS_PLAN_GENERATOR_PROMPT}  PROBLEM: ${problem} SOLUTION: ${solution} USP: ${usp}`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      return text;
    }

    return run();
  }
}
