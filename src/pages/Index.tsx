import { useState } from "react";
import Hero from "@/components/calculator/Hero";
import CalculatorForm from "@/components/calculator/CalculatorForm";
import ResultsDashboard from "@/components/calculator/ResultsDashboard";
import { CalculatorInputs, CalculatorResults } from "@/types/calculator";
import { calculateSavings } from "@/utils/calculatorLogic";

const Index = () => {
  const [results, setResults] = useState<CalculatorResults | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleCalculate = (inputs: CalculatorInputs) => {
    const calculatedResults = calculateSavings(inputs);
    setResults(calculatedResults);
    setShowResults(true);
  };

  const handleReset = () => {
    setShowResults(false);
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {!showResults ? (
        <>
          <Hero />
          <CalculatorForm onCalculate={handleCalculate} />
        </>
      ) : (
        results && <ResultsDashboard results={results} onReset={handleReset} />
      )}
    </div>
  );
};

export default Index;
