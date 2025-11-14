import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToCalculator = () => {
    const calculator = document.getElementById("calculator");
    calculator?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight">
              Transform Your Tax Season
            </h1>
            <p className="text-xl sm:text-2xl text-primary-foreground/90 max-w-3xl mx-auto font-light">
              Calculate exactly how much time and money your firm can save with optimized workflow, technology, and offshore support
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent">25-35%</div>
              <div className="text-sm text-primary-foreground/80 mt-1">Time Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent">50%</div>
              <div className="text-sm text-primary-foreground/80 mt-1">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent">+25%</div>
              <div className="text-sm text-primary-foreground/80 mt-1">Capacity Increase</div>
            </div>
          </div>

          <button
            onClick={scrollToCalculator}
            className="inline-flex items-center gap-2 mt-8 text-primary-foreground/90 hover:text-primary-foreground transition-colors group"
          >
            <span className="text-sm font-medium">Start Calculating</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent" />
    </section>
  );
};

export default Hero;
