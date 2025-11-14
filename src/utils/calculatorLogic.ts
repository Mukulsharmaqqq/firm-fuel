import { CalculatorInputs, CalculatorResults } from "@/types/calculator";

const ONSHORE_RATE = 30;
const OFFSHORE_RATE = 15;
const TECH_COST = 4584; // Annual tech cost
const ADMIN_PERCENT = 0.2; // 20% admin overhead
const AVAILABLE_HOURS = 960; // 12 weeks × 40 hrs × 2 people

export const calculateSavings = (inputs: CalculatorInputs): CalculatorResults => {
  // Calculate return counts
  const simpleCount = Math.round((inputs.simplePercent / 100) * inputs.totalReturns);
  const mediumCount = Math.round((inputs.mediumPercent / 100) * inputs.totalReturns);
  const complexCount = inputs.totalReturns - simpleCount - mediumCount;

  // BEFORE OPTIMIZATION
  const beforeSimpleHours = simpleCount * (inputs.simpleReturnHours + 0.4);
  const beforeMediumHours = mediumCount * (inputs.mediumReturnHours + 0.8);
  const beforeComplexHours = complexCount * (inputs.complexReturnHours + 1.6);
  const beforeCoreHours = beforeSimpleHours + beforeMediumHours + beforeComplexHours;
  const beforeAdminHours = beforeCoreHours * ADMIN_PERCENT;
  const beforeTotalHours = beforeCoreHours + beforeAdminHours;
  
  const beforeLaborCost = beforeTotalHours * ONSHORE_RATE;
  const beforeTotalCost = beforeLaborCost + TECH_COST;
  const beforeShortage = Math.max(0, beforeTotalHours - AVAILABLE_HOURS);

  // AFTER OPTIMIZATION
  // Time reduction factors based on tech optimization
  let prepTimeReduction = 0.25; // Base 25% reduction
  if (inputs.hasAIIntake) prepTimeReduction += 0.05;
  if (inputs.hasPMS) prepTimeReduction += 0.05;
  if (inputs.isStaffAITrained) prepTimeReduction += 0.05;

  // Offshore handles simple and medium, onshore handles complex
  const afterSimplePrepHours = simpleCount * inputs.simpleReturnHours * (1 - prepTimeReduction);
  const afterSimpleReviewHours = simpleCount * 0.4;
  const afterSimpleHours = afterSimplePrepHours + afterSimpleReviewHours;

  const afterMediumPrepHours = mediumCount * inputs.mediumReturnHours * (1 - prepTimeReduction);
  const afterMediumReviewHours = mediumCount * 0.8;
  const afterMediumHours = afterMediumPrepHours + afterMediumReviewHours;

  const afterComplexPrepHours = complexCount * inputs.complexReturnHours * (1 - prepTimeReduction);
  const afterComplexReviewHours = complexCount * 1.6;
  const afterComplexHours = afterComplexPrepHours + afterComplexReviewHours;

  // Calculate costs (offshore for simple/medium, onshore for complex)
  const afterSimpleCost = afterSimpleHours * OFFSHORE_RATE;
  const afterMediumCost = afterMediumHours * OFFSHORE_RATE;
  const afterComplexCost = afterComplexHours * ONSHORE_RATE;

  const afterCoreHours = afterSimpleHours + afterMediumHours + afterComplexHours;
  
  // Admin reduction with PMS
  const adminReduction = inputs.hasPMS ? 0.15 : 0;
  const afterAdminHours = beforeAdminHours * (1 - adminReduction);
  const afterAdminCost = afterAdminHours * ONSHORE_RATE;
  
  const afterTotalHours = afterCoreHours + afterAdminHours;
  const afterLaborCost = afterSimpleCost + afterMediumCost + afterComplexCost + afterAdminCost;
  const afterTotalCost = afterLaborCost + TECH_COST;
  const afterShortage = Math.max(0, afterTotalHours - AVAILABLE_HOURS);

  // Calculate capacity gain and potential revenue
  const hoursSaved = beforeTotalHours - afterTotalHours;
  const capacityGainPercent = (hoursSaved / beforeTotalHours) * 100;
  const additionalReturns = Math.round((hoursSaved / (beforeTotalHours / inputs.totalReturns)));
  const avgReturnPrice = inputs.simpleReturnPrice * 1.5; // Estimated average
  const revenueGain = additionalReturns * avgReturnPrice;

  return {
    before: {
      totalHours: Math.round(beforeTotalHours),
      laborCost: Math.round(beforeLaborCost),
      techCost: TECH_COST,
      totalCost: Math.round(beforeTotalCost),
      adminHours: Math.round(beforeAdminHours),
      shortage: Math.round(beforeShortage),
    },
    after: {
      totalHours: Math.round(afterTotalHours),
      laborCost: Math.round(afterLaborCost),
      techCost: TECH_COST,
      totalCost: Math.round(afterTotalCost),
      adminHours: Math.round(afterAdminHours),
      shortage: Math.round(afterShortage),
      capacityGain: Math.round(capacityGainPercent),
      additionalReturns,
      revenueGain: Math.round(revenueGain),
    },
    savings: {
      hoursSaved: Math.round(hoursSaved),
      percentHoursSaved: Math.round((hoursSaved / beforeTotalHours) * 100),
      costSaved: Math.round(beforeTotalCost - afterTotalCost),
      percentCostSaved: Math.round(((beforeTotalCost - afterTotalCost) / beforeTotalCost) * 100),
      shortageReduction: Math.round(beforeShortage - afterShortage),
      percentShortageReduction: beforeShortage > 0 
        ? Math.round(((beforeShortage - afterShortage) / beforeShortage) * 100)
        : 0,
    },
  };
};
