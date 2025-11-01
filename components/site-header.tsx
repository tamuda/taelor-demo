"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Search, User, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const megaMenuData = {
  shop: {
    categories: [
      {
        name: "Casual Wear",
        href: "/shop/casual",
        image:
          "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&h=450&fit=crop",
      },
      {
        name: "Business Attire",
        href: "/shop/business",
        image:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=450&fit=crop",
      },
      {
        name: "Weekend Style",
        href: "/shop/weekend",
        image:
          "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=450&fit=crop",
      },
      {
        name: "Accessories",
        href: "/shop/accessories",
        image:
          "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?w=600&h=450&fit=crop",
      },
    ],
    featured: {
      title: "New Arrivals",
      description: "Fresh styles curated by AI",
      image:
        "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=900&h=600&fit=crop",
      href: "/shop/new",
    },
  },
  subscribe: {
    categories: [
      {
        name: "Monthly Plan",
        href: "/subscribe/monthly",
        image:
          "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&h=450&fit=crop",
      },
      {
        name: "Quarterly Plan",
        href: "/subscribe/quarterly",
        image:
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=450&fit=crop",
      },
      {
        name: "Gift Subscription",
        href: "/subscribe/gift",
        image:
          "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&h=450&fit=crop",
      },
    ],
    featured: {
      title: "How Subscriptions Work",
      description: "AI-powered styling delivered monthly",
      image:
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=900&h=600&fit=crop",
      href: "/how-it-works",
    },
  },
};

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-3 border-b border-border/40">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">Search</span>
          </div>
          <Link href="/" className="flex items-center">
            <span className="font-serif text-2xl font-bold tracking-tight">
              taelor.
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ShoppingBag className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex h-14 items-center justify-center">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden absolute left-4"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("shop")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href="/shop"
                className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors py-4 block"
              >
                Shop All
              </Link>
            </div>

            <Link
              href="/bestsellers"
              className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors"
            >
              Bestsellers
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("subscribe")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href="/subscribe"
                className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors py-4 block"
              >
                Subscribe
              </Link>
            </div>

            <Link
              href="/style-quiz"
              className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors"
            >
              Style Quiz
            </Link>

            <Link
              href="/journal"
              className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors"
            >
              Journal
            </Link>

            <Link
              href="/how-it-works"
              className="text-sm font-medium uppercase tracking-wide hover:text-primary transition-colors"
            >
              How It Works
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-border py-4 space-y-3">
            <Link
              href="/shop"
              className="block text-sm font-medium hover:text-primary transition-colors"
            >
              Shop All
            </Link>
            <Link
              href="/bestsellers"
              className="block text-sm font-medium hover:text-primary transition-colors"
            >
              Bestsellers
            </Link>
            <Link
              href="/subscribe"
              className="block text-sm font-medium hover:text-primary transition-colors"
            >
              Subscribe
            </Link>
            <Link
              href="/style-quiz"
              className="block text-sm font-medium hover:text-primary transition-colors"
            >
              Style Quiz
            </Link>
            <Link
              href="/journal"
              className="block text-sm font-medium hover:text-primary transition-colors"
            >
              Journal
            </Link>
            <Link
              href="/how-it-works"
              className="block text-sm font-medium hover:text-primary transition-colors"
            >
              How It Works
            </Link>
          </nav>
        )}
      </div>

      {activeMenu && megaMenuData[activeMenu as keyof typeof megaMenuData] && (
        <div
          className="absolute left-0 right-0 top-full bg-background border-b border-border shadow-lg"
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="container mx-auto px-4 lg:px-8 py-8">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Categories */}
              {megaMenuData[
                activeMenu as keyof typeof megaMenuData
              ].categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-3">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-sm font-medium group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                </Link>
              ))}

              {/* Featured Section */}
              <Link
                href={
                  megaMenuData[activeMenu as keyof typeof megaMenuData].featured
                    .href
                }
                className="group lg:col-span-2"
              >
                <div className="relative aspect-[3/2] overflow-hidden rounded-lg mb-3">
                  <Image
                    src={
                      megaMenuData[activeMenu as keyof typeof megaMenuData]
                        .featured.image || "/placeholder.svg"
                    }
                    alt={
                      megaMenuData[activeMenu as keyof typeof megaMenuData]
                        .featured.title
                    }
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">
                      {
                        megaMenuData[activeMenu as keyof typeof megaMenuData]
                          .featured.title
                      }
                    </h3>
                    <p className="text-sm text-white/90">
                      {
                        megaMenuData[activeMenu as keyof typeof megaMenuData]
                          .featured.description
                      }
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
