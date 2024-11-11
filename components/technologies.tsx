import { Card, CardContent } from '@/components/ui/card';
import {
  Brain,
  Database,
  Network,
  Scan,
  Cpu,
  Glasses,
  Globe,
  Smartphone,
} from 'lucide-react';

const technologies = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'Smart solutions for automation and decision-making',
  },
  {
    icon: Database,
    title: 'Big Data',
    description: 'Analytics and insights from large-scale data',
  },
  {
    icon: Network,
    title: 'Blockchain',
    description: 'Secure and transparent distributed systems',
  },
  {
    icon: Scan,
    title: 'IoT Solutions',
    description: 'Connected device ecosystems',
  },
  {
    icon: Cpu,
    title: 'Machine Learning',
    description: 'Predictive analytics and pattern recognition',
  },
  {
    icon: Glasses,
    title: 'AR/VR',
    description: 'Immersive digital experiences',
  },
  {
    icon: Globe,
    title: 'Cloud Computing',
    description: 'Scalable and flexible infrastructure',
  },
  {
    icon: Smartphone,
    title: 'Mobile Solutions',
    description: 'Cross-platform mobile applications',
  },
];

export default function Technologies() {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Technologies We Master</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technologies to power your digital transformation
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="border-none bg-background/50 backdrop-blur hover:bg-background/80 transition-colors"
            >
              <CardContent className="p-6">
                <tech.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{tech.title}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}