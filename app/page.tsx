import Hero from '../components/hero'
import Stats from '../components/stats'
import Services from '../components/services'
import Technologies from '../components/technologies'
import CTA from '../components/cta'

export default async function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        {/* @ts-expect-error Async Server Component */}
        <Hero />
        {/* @ts-expect-error Async Server Component */}
        <Stats />
        {/* @ts-expect-error Async Server Component */}
        <Services />
        {/* @ts-expect-error Async Server Component */}
        <Technologies />
        {/* @ts-expect-error Async Server Component */}
        <CTA />
      </div>
    </>
  );
}