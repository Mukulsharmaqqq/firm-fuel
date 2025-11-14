import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

interface FormStep2Props {
  form: UseFormReturn<any>;
}

const FormStep2 = ({ form }: FormStep2Props) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Technology & Workflow</h3>
        <p className="text-sm text-muted-foreground">
          Help us understand your current tech stack and processes
        </p>
      </div>

      <FormField
        control={form.control}
        name="hasAIIntake"
        render={({ field }) => (
          <FormItem className="flex items-center justify-between rounded-lg border border-border p-4">
            <div className="space-y-0.5">
              <FormLabel className="text-base">AI-Powered Client Intake</FormLabel>
              <div className="text-sm text-muted-foreground">
                Using AI tools to streamline client onboarding
              </div>
            </div>
            <FormControl>
              <Switch checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="hasPMS"
        render={({ field }) => (
          <FormItem className="flex items-center justify-between rounded-lg border border-border p-4">
            <div className="space-y-0.5">
              <FormLabel className="text-base">Practice Management System</FormLabel>
              <div className="text-sm text-muted-foreground">
                Using Canopy, Karbon, or similar PMS
              </div>
            </div>
            <FormControl>
              <Switch checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="isStaffAITrained"
        render={({ field }) => (
          <FormItem className="flex items-center justify-between rounded-lg border border-border p-4">
            <div className="space-y-0.5">
              <FormLabel className="text-base">AI-Trained Staff</FormLabel>
              <div className="text-sm text-muted-foreground">
                Team members trained in AI tools and tech
              </div>
            </div>
            <FormControl>
              <Switch checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="hasStaffShortage"
        render={({ field }) => (
          <FormItem className="flex items-center justify-between rounded-lg border border-border p-4">
            <div className="space-y-0.5">
              <FormLabel className="text-base">Staff Shortage During Tax Season</FormLabel>
              <div className="text-sm text-muted-foreground">
                Experiencing difficulty meeting demand
              </div>
            </div>
            <FormControl>
              <Switch checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="reviewersReviewSimple"
        render={({ field }) => (
          <FormItem className="flex items-center justify-between rounded-lg border border-border p-4">
            <div className="space-y-0.5">
              <FormLabel className="text-base">Reviewers Handle Simple Returns</FormLabel>
              <div className="text-sm text-muted-foreground">
                Senior staff reviewing basic returns
              </div>
            </div>
            <FormControl>
              <Switch checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default FormStep2;
