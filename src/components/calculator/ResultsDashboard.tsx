import { CalculatorResults } from "@/types/calculator";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Clock, DollarSign, Users } from "lucide-react";
import MetricCard from "./results/MetricCard";
import ComparisonChart from "./results/ComparisonChart";
import SavingsBreakdown from "./results/SavingsBreakdown";

interface ResultsDashboardProps {
  results: CalculatorResults;
  onReset: () => void;
}

const ResultsDashboard = ({ results, onReset }: ResultsDashboardProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button
          onClick={onReset}
          variant="ghost"
          className="mb-8 hover:bg-muted"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Calculator
        </Button>

        {/* Hero Summary */}
        <div className="bg-gradient-to-br from-success via-success to-success/90 rounded-2xl p-8 sm:p-12 mb-8 text-success-foreground shadow-xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Your Optimization Results
          </h1>
          <p className="text-xl sm:text-2xl font-light mb-8 text-success-foreground/95">
            You could save{" "}
            <span className="font-bold">
              ${results.savings.costSaved.toLocaleString()}
            </span>{" "}
            and{" "}
            <span className="font-bold">
              {results.savings.hoursSaved.toLocaleString()} hours
            </span>{" "}
            next tax season and increase capacity by{" "}
            <span className="font-bold">{results.after.capacityGain}%</span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-success-foreground/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="w-5 h-5" />
                <span className="text-sm font-medium">Cost Savings</span>
              </div>
              <div className="text-3xl font-bold">
                ${results.savings.costSaved.toLocaleString()}
              </div>
              <div className="text-sm mt-1 text-success-foreground/80">
                {results.savings.percentCostSaved}% reduction
              </div>
            </div>

            <div className="bg-success-foreground/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-medium">Time Saved</span>
              </div>
              <div className="text-3xl font-bold">
                {results.savings.hoursSaved.toLocaleString()} hrs
              </div>
              <div className="text-sm mt-1 text-success-foreground/80">
                {results.savings.percentHoursSaved}% reduction
              </div>
            </div>

            <div className="bg-success-foreground/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-medium">Revenue Potential</span>
              </div>
              <div className="text-3xl font-bold">
                +${results.after.revenueGain.toLocaleString()}
              </div>
              <div className="text-sm mt-1 text-success-foreground/80">
                {results.after.additionalReturns} more returns
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            icon={Clock}
            label="Total Hours"
            before={results.before.totalHours}
            after={results.after.totalHours}
            unit="hrs"
            improvement={results.savings.percentHoursSaved}
          />
          <MetricCard
            icon={DollarSign}
            label="Total Cost"
            before={results.before.totalCost}
            after={results.after.totalCost}
            unit="$"
            improvement={results.savings.percentCostSaved}
          />
          <MetricCard
            icon={Users}
            label="Staff Shortage"
            before={results.before.shortage}
            after={results.after.shortage}
            unit="hrs"
            improvement={results.savings.percentShortageReduction}
          />
          <MetricCard
            icon={TrendingUp}
            label="Capacity Gain"
            value={results.after.capacityGain}
            unit="%"
            isPositive
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ComparisonChart
            title="Hours Comparison"
            beforeValue={results.before.totalHours}
            afterValue={results.after.totalHours}
            unit="hours"
          />
          <ComparisonChart
            title="Cost Comparison"
            beforeValue={results.before.totalCost}
            afterValue={results.after.totalCost}
            unit="dollars"
          />
        </div>

        {/* Detailed Breakdown */}
        <SavingsBreakdown results={results} />

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-br from-primary via-primary to-primary/90 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Firm?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            See exactly how offshore support and tech optimization can work for your specific practice.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6"
          >
            Book a 15-Minute Strategy Call
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsDashboard;
