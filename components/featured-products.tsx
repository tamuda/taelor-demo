import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "Italian Merino Crew",
    brand: "Everlane",
    price: "Rental",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=750&fit=crop",
    badge: "AI Curated",
  },
  {
    id: 2,
    name: "Selvedge Denim",
    brand: "Naked & Famous",
    price: "Rental",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=750&fit=crop",
    badge: "New Arrival",
  },
  {
    id: 3,
    name: "Oxford Shirt",
    brand: "Proper Cloth",
    price: "Rental",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=750&fit=crop",
    badge: "Limited",
  },
  {
    id: 4,
    name: "Chore Jacket",
    brand: "Taylor Stitch",
    price: "Rental",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=750&fit=crop",
    badge: "AI Curated",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4">
            This Week's Selection
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Handpicked by our stylists and refined by AI. Each piece selected
            for quality, versatility, and timeless appeal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-2">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 p-0 rounded-none"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.badge && (
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <div className="p-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {product.brand}
                </p>
                <h3 className="font-medium text-base mb-2">{product.name}</h3>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="text-sm font-medium underline underline-offset-4 hover:text-primary transition-colors">
            View Full Collection
          </button>
        </div>
      </div>
    </section>
  );
}
