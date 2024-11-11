import { Card, CardContent } from '@/components/ui/card';
import { Users2, Award, Building2, Clock } from 'lucide-react';

const stats = [
  {
    icon: Users2,
    value: '500+',
    label: 'Clients Worldwide',
  },
  {
    icon: Award,
    value: '15+',
    label: 'Years Experience',
  },
  {
    icon: Building2,
    value: '100%',
    label: 'Project Success',
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Support Available',
  },
];

export default function Stats() {
  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-2 bg-background/50 backdrop-blur hover:shadow-lg transition-all">
              <CardContent className="flex flex-col items-center p-6">
                <stat.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-muted-foreground text-center">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}