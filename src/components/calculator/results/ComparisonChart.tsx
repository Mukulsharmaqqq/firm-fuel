import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

interface ComparisonChartProps {
  title: string;
  beforeValue: number;
  afterValue: number;
  unit: "hours" | "dollars";
}

const ComparisonChart = ({ title, beforeValue, afterValue, unit }: ComparisonChartProps) => {
  const data = [
    {
      name: "Before",
      value: beforeValue,
      fill: "hsl(var(--chart-2))",
    },
    {
      name: "After",
      value: afterValue,
      fill: "hsl(var(--chart-1))",
    },
  ];

  const formatValue = (value: number) => {
    if (unit === "dollars") {
      return `$${value.toLocaleString()}`;
    }
    return `${value.toLocaleString()} hrs`;
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h3 className="text-lg font-semibold text-foreground mb-6">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis
            dataKey="name"
            tick={{ fill: "hsl(var(--muted-foreground))" }}
            axisLine={{ stroke: "hsl(var(--border))" }}
          />
          <YAxis
            tick={{ fill: "hsl(var(--muted-foreground))" }}
            axisLine={{ stroke: "hsl(var(--border))" }}
            tickFormatter={(value) => unit === "dollars" ? `$${(value / 1000).toFixed(0)}k` : value}
          />
          <Tooltip
            formatter={(value: number) => formatValue(value)}
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "hsl(var(--foreground))" }}
          />
          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 text-center">
        <span className="text-sm text-muted-foreground">
          Reduction:{" "}
          <span className="font-semibold text-success">
            {formatValue(beforeValue - afterValue)} (
            {Math.round(((beforeValue - afterValue) / beforeValue) * 100)}%)
          </span>
        </span>
      </div>
    </div>
  );
};

export default ComparisonChart;
