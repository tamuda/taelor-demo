import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function EmailCapture() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4">Join the Style Community</h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Get early access to new arrivals, exclusive style tips, and special offers. Plus, receive a complimentary
            style consultation when you sign up.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="flex-1 h-12" />
            <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}
