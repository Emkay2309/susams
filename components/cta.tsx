import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function CTA() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <Card className="bg-primary text-primary-foreground p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how our IT consulting and software development services
            can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="secondary">
              View Our Portfolio
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}