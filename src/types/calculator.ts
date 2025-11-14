export interface CalculatorInputs {
  totalReturns: number;
  simplePercent: number;
  mediumPercent: number;
  complexPercent: number;
  simpleReturnPrice: number;
  hasAIIntake: boolean;
  hasPMS: boolean;
  hasStaffShortage: boolean;
  simpleReturnHours: number;
  mediumReturnHours: number;
  complexReturnHours: number;
  reviewersReviewSimple: boolean;
  isStaffAITrained: boolean;
  totalStaffCost: number;
}

export interface CalculatorResults {
  before: {
    totalHours: number;
    laborCost: number;
    techCost: number;
    totalCost: number;
    adminHours: number;
    shortage: number;
  };
  after: {
    totalHours: number;
    laborCost: number;
    techCost: number;
    totalCost: number;
    adminHours: number;
    shortage: number;
    capacityGain: number;
    additionalReturns: number;
    revenueGain: number;
  };
  savings: {
    hoursSaved: number;
    percentHoursSaved: number;
    costSaved: number;
    percentCostSaved: number;
    shortageReduction: number;
    percentShortageReduction: number;
  };
}
