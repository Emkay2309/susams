import Hero from '../components/hero'
import Stats from '../components/stats'
import Services from '../components/services'
import Technologies from '../components/technologies'
import CTA from '../components/cta'

export default async function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Hero />
        <Stats />
        <Services />
        <Technologies />
        <CTA />
      </div>
    </>
  );
}