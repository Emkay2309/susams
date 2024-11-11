import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Code2,
  Cloud,
  BarChart3,
  Shield,
  Smartphone,
  HeadphonesIcon,
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description:
      'Tailored solutions built to address your specific business needs and challenges.',
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    description:
      'Secure and scalable cloud solutions for modern business operations.',
  },
  {
    icon: BarChart3,
    title: 'Digital Transformation',
    description:
      'Strategic guidance to modernize your business processes and technology.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description:
      'Comprehensive security solutions to protect your digital assets.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description:
      'Native and cross-platform mobile applications for iOS and Android.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description:
      'Round-the-clock technical support and maintenance services.',
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}