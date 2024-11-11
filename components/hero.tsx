import { Button } from '@/components/ui/button';
import { EnquiryForm } from '@/components/enquiry-form';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative bg-background">
      {/* Cover Image */}
      <div className="absolute inset-0 h-[600px] md:h-[700px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Technology Background"
          fill
          className="object-cover opacity-20 dark:opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative pt-20 pb-32 md:pb-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                IT Consulting and{' '}
                <span className="text-primary">Software Development</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                Your Partner for Digital Success. We deliver innovative solutions and
                strategic consulting to help businesses thrive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <EnquiryForm 
                  trigger={
                    <Button size="lg" className="border-2">Talk to Our Team</Button>
                  }
                />
                <Button size="lg" variant="outline" className="border-2">
                  Explore Services
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <Image
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
                  alt="IT Consulting Team"
                  fill
                  className="object-cover rounded-lg shadow-2xl border-2 border-border"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}