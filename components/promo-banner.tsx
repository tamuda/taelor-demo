import Image from "next/image";

export function PromoBanner() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JGLXs2jFKYZg0geD82mgZPsogye5Yz.png"
        alt="The Dream Year Giveaway - Worth up to $125,000"
        fill
        className="object-cover"
        priority
      />
    </section>
  );
}
