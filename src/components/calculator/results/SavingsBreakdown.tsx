import { CalculatorResults } from "@/types/calculator";

interface SavingsBreakdownProps {
  results: CalculatorResults;
}

const SavingsBreakdown = ({ results }: SavingsBreakdownProps) => {
  const breakdownItems = [
    {
      label: "Labor Cost Reduction",
      before: results.before.laborCost,
      after: results.after.laborCost,
      savings: results.before.laborCost - results.after.laborCost,
    },
    {
      label: "Admin Hours Reduction",
      before: results.before.adminHours,
      after: results.after.adminHours,
      savings: results.before.adminHours - results.after.adminHours,
      unit: "hrs",
    },
    {
      label: "Staff Shortage Impact",
      before: results.before.shortage,
      after: results.after.shortage,
      savings: results.savings.shortageReduction,
      unit: "hrs",
    },
  ];

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="bg-muted px-6 py-4 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">Detailed Breakdown</h3>
      </div>
      
      <div className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">
                  Metric
                </th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">
                  Before
                </th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">
                  After
                </th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">
                  Savings
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {breakdownItems.map((item, index) => (
                <tr key={index} className="hover:bg-muted/50 transition-colors">
                  <td className="py-4 px-4 text-sm font-medium text-foreground">
                    {item.label}
                  </td>
                  <td className="py-4 px-4 text-sm text-right text-foreground">
                    {item.unit === "hrs" ? "" : "$"}
                    {item.before.toLocaleString()}
                    {item.unit === "hrs" ? " hrs" : ""}
                  </td>
                  <td className="py-4 px-4 text-sm text-right text-foreground">
                    {item.unit === "hrs" ? "" : "$"}
                    {item.after.toLocaleString()}
                    {item.unit === "hrs" ? " hrs" : ""}
                  </td>
                  <td className="py-4 px-4 text-sm text-right font-semibold text-success">
                    {item.unit === "hrs" ? "" : "$"}
                    {item.savings.toLocaleString()}
                    {item.unit === "hrs" ? " hrs" : ""}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="border-t-2 border-border bg-muted/50">
              <tr>
                <td className="py-4 px-4 text-base font-bold text-foreground">
                  Total Savings
                </td>
                <td className="py-4 px-4"></td>
                <td className="py-4 px-4"></td>
                <td className="py-4 px-4 text-right text-base font-bold text-success">
                  ${results.savings.costSaved.toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="mt-8 p-6 bg-accent/5 rounded-xl border border-accent/20">
          <h4 className="font-semibold text-foreground mb-3">Efficiency Improvements</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">•</span>
              <span>
                <strong className="text-foreground">Workflow optimization</strong> reduces prep and review time by 25-35%
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">•</span>
              <span>
                <strong className="text-foreground">Offshore team support</strong> cuts labor costs by approximately 50%
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">•</span>
              <span>
                <strong className="text-foreground">Capacity increase</strong> of {results.after.capacityGain}% enables {results.after.additionalReturns} more returns
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">•</span>
              <span>
                <strong className="text-foreground">Potential revenue gain</strong> of ${results.after.revenueGain.toLocaleString()} from increased capacity
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SavingsBreakdown;
