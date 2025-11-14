import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { CalculatorInputs } from "@/types/calculator";
import { Calculator } from "lucide-react";
import FormStep1 from "./form-steps/FormStep1";
import FormStep2 from "./form-steps/FormStep2";
import FormStep3 from "./form-steps/FormStep3";

const formSchema = z.object({
  totalReturns: z.number().min(1, "Must be at least 1"),
  simplePercent: z.number().min(0).max(100),
  mediumPercent: z.number().min(0).max(100),
  complexPercent: z.number().min(0).max(100),
  simpleReturnPrice: z.number().min(0),
  hasAIIntake: z.boolean(),
  hasPMS: z.boolean(),
  hasStaffShortage: z.boolean(),
  simpleReturnHours: z.number().min(0),
  mediumReturnHours: z.number().min(0),
  complexReturnHours: z.number().min(0),
  reviewersReviewSimple: z.boolean(),
  isStaffAITrained: z.boolean(),
  totalStaffCost: z.number().min(0),
}).refine(
  (data) => data.simplePercent + data.mediumPercent + data.complexPercent === 100,
  {
    message: "Percentages must add up to 100%",
    path: ["complexPercent"],
  }
);

interface CalculatorFormProps {
  onCalculate: (inputs: CalculatorInputs) => void;
}

const CalculatorForm = ({ onCalculate }: CalculatorFormProps) => {
  const [step, setStep] = useState(1);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      totalReturns: 300,
      simplePercent: 50,
      mediumPercent: 25,
      complexPercent: 25,
      simpleReturnPrice: 250,
      hasAIIntake: false,
      hasPMS: true,
      hasStaffShortage: true,
      simpleReturnHours: 1.5,
      mediumReturnHours: 3.5,
      complexReturnHours: 7.5,
      reviewersReviewSimple: true,
      isStaffAITrained: false,
      totalStaffCost: 46440,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    onCalculate(values as CalculatorInputs);
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <section id="calculator" className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-primary/90 px-8 py-6">
            <div className="flex items-center gap-3">
              <Calculator className="w-6 h-6 text-primary-foreground" />
              <h2 className="text-2xl font-bold text-primary-foreground">
                Savings Calculator
              </h2>
            </div>
            <div className="mt-4 flex gap-2">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1 flex-1 rounded-full transition-all ${
                    s <= step ? "bg-accent" : "bg-primary-foreground/20"
                  }`}
                />
              ))}
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="p-8 space-y-8">
              {step === 1 && <FormStep1 form={form} />}
              {step === 2 && <FormStep2 form={form} />}
              {step === 3 && <FormStep3 form={form} />}

              <div className="flex gap-4 pt-6 border-t border-border">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="flex-1"
                  >
                    Previous
                  </Button>
                )}
                {step < 3 ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 bg-accent hover:bg-accent/90"
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="flex-1 bg-success hover:bg-success/90"
                  >
                    Calculate My Savings
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default CalculatorForm;
