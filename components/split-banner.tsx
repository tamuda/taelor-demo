import { Button } from "@/components/ui/button";

export function SplitBanner() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Left side - Text content */}
        <div className="bg-[#1a1d29] flex items-center justify-center p-8 md:p-12 lg:p-16">
          <div className="max-w-xl">
            <p className="text-white/70 text-sm md:text-base mb-4 tracking-wide">
              The Season of Subtle Power
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Cold Outside.
              <br />
              Composed Inside.
            </h2>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Check Winter Collection
            </Button>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative h-full overflow-hidden">
          <img
            src="/winter guy.jpg"
            alt="Winter Collection"
            className="h-full w-full object-cover object-[center_20%]"
          />
        </div>
      </div>
    </section>
  );
}
