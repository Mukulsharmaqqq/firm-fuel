import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

interface FormStep1Props {
  form: UseFormReturn<any>;
}

const FormStep1 = ({ form }: FormStep1Props) => {
  const simplePercent = form.watch("simplePercent");
  const mediumPercent = form.watch("mediumPercent");
  const complexPercent = form.watch("complexPercent");
  const totalReturns = form.watch("totalReturns");

  const handlePercentChange = (field: string, value: number) => {
    const currentSimple = field === "simplePercent" ? value : simplePercent;
    const currentMedium = field === "mediumPercent" ? value : mediumPercent;
    
    form.setValue(field, value);
    form.setValue("complexPercent", 100 - currentSimple - currentMedium);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Firm Overview</h3>
        <p className="text-sm text-muted-foreground">
          Tell us about your tax return volume and composition
        </p>
      </div>

      <FormField
        control={form.control}
        name="totalReturns"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Total Tax Returns Filed Last Season</FormLabel>
            <FormControl>
              <Input
                type="number"
                {...field}
                onChange={(e) => field.onChange(parseFloat(e.target.value))}
                className="text-lg"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="space-y-4">
        <FormLabel>Return Complexity Distribution</FormLabel>
        <FormDescription>
          Adjust the percentages to match your firm's typical mix
        </FormDescription>

        <FormField
          control={form.control}
          name="simplePercent"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between items-center mb-2">
                <FormLabel className="text-sm font-normal">Simple Returns</FormLabel>
                <span className="text-sm font-semibold text-foreground">
                  {field.value}% ({Math.round((field.value / 100) * totalReturns)} returns)
                </span>
              </div>
              <FormControl>
                <Slider
                  value={[field.value]}
                  onValueChange={(vals) => handlePercentChange("simplePercent", vals[0])}
                  max={100}
                  step={5}
                  className="py-4"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="mediumPercent"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between items-center mb-2">
                <FormLabel className="text-sm font-normal">Medium Returns</FormLabel>
                <span className="text-sm font-semibold text-foreground">
                  {field.value}% ({Math.round((field.value / 100) * totalReturns)} returns)
                </span>
              </div>
              <FormControl>
                <Slider
                  value={[field.value]}
                  onValueChange={(vals) => handlePercentChange("mediumPercent", vals[0])}
                  max={100}
                  step={5}
                  className="py-4"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex justify-between items-center pt-2 border-t border-border">
          <FormLabel className="text-sm font-normal">Complex Returns</FormLabel>
          <span className="text-sm font-semibold text-foreground">
            {complexPercent}% ({Math.round((complexPercent / 100) * totalReturns)} returns)
          </span>
        </div>
      </div>

      <FormField
        control={form.control}
        name="simpleReturnPrice"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Average Price for Simple Return</FormLabel>
            <FormControl>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => field.onChange(parseFloat(e.target.value))}
                  className="pl-8"
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default FormStep1;
