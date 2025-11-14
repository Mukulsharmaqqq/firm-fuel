import { LucideIcon } from "lucide-react";
import { ArrowDown, ArrowUp } from "lucide-react";

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  before?: number;
  after?: number;
  value?: number;
  unit: string;
  improvement?: number;
  isPositive?: boolean;
}

const MetricCard = ({
  icon: Icon,
  label,
  before,
  after,
  value,
  unit,
  improvement,
  isPositive = false,
}: MetricCardProps) => {
  const showComparison = before !== undefined && after !== undefined;

  return (
    <div className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-accent/10">
          <Icon className="w-5 h-5 text-accent" />
        </div>
        <span className="text-sm font-medium text-muted-foreground">{label}</span>
      </div>

      {showComparison ? (
        <>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-2xl font-bold text-foreground">
              {unit === "$" && "$"}
              {after?.toLocaleString()}
              {unit !== "$" && unit !== "%" && ` ${unit}`}
              {unit === "%" && "%"}
            </span>
            {improvement !== undefined && improvement > 0 && (
              <span className="inline-flex items-center gap-1 text-sm font-medium text-success">
                <ArrowDown className="w-3 h-3" />
                {improvement}%
              </span>
            )}
          </div>
          <div className="text-sm text-muted-foreground">
            Previously: {unit === "$" && "$"}
            {before?.toLocaleString()}
            {unit !== "$" && unit !== "%" && ` ${unit}`}
            {unit === "%" && "%"}
          </div>
        </>
      ) : (
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-foreground">
            {isPositive && "+"}
            {value?.toLocaleString()}
            {unit === "%" && "%"}
          </span>
          {isPositive && (
            <ArrowUp className="w-5 h-5 text-success" />
          )}
        </div>
      )}
    </div>
  );
};

export default MetricCard;
