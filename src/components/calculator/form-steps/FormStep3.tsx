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

interface FormStep3Props {
  form: UseFormReturn<any>;
}

const FormStep3 = ({ form }: FormStep3Props) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Time & Cost Details</h3>
        <p className="text-sm text-muted-foreground">
          Final details about your firm's operational metrics
        </p>
      </div>

      <div className="grid gap-6">
        <FormField
          control={form.control}
          name="simpleReturnHours"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hours per Simple Return (Prep)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  step="0.5"
                  {...field}
                  onChange={(e) => field.onChange(parseFloat(e.target.value))}
                />
              </FormControl>
              <FormDescription>Average prep time excluding review</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="mediumReturnHours"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hours per Medium Return (Prep)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  step="0.5"
                  {...field}
                  onChange={(e) => field.onChange(parseFloat(e.target.value))}
                />
              </FormControl>
              <FormDescription>Average prep time excluding review</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="complexReturnHours"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hours per Complex Return (Prep)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  step="0.5"
                  {...field}
                  onChange={(e) => field.onChange(parseFloat(e.target.value))}
                />
              </FormControl>
              <FormDescription>Average prep time excluding review</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="totalStaffCost"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Total Staff Cost Per Season</FormLabel>
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
              <FormDescription>Total labor costs for the tax season</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default FormStep3;
