import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "How AI Learns Your Style",
    excerpt:
      "Behind the algorithms that curate your perfect wardrobe, one piece at a time.",
    image:
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&h=600&fit=crop",
    category: "Technology",
  },
  {
    id: 2,
    title: "The Rental Revolution",
    excerpt:
      "Why owning less and experiencing more is the future of sustainable fashion.",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&h=600&fit=crop",
    category: "Sustainability",
  },
  {
    id: 3,
    title: "Spring Style Guide",
    excerpt:
      "Essential pieces for the season ahead, curated by our style team.",
    image:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800&h=600&fit=crop",
    category: "Style",
  },
];

export function EditorialSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4">
            The Style Journal
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Stories, insights, and inspiration from the intersection of style,
            technology, and sustainable living.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-2">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="group cursor-pointer overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 p-0 rounded-none"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-primary uppercase tracking-wider mb-3 font-medium">
                  {article.category}
                </p>
                <h3 className="font-serif text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <button className="inline-flex items-center text-sm font-medium group-hover:text-primary transition-colors">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
