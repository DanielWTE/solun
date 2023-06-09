import Welcomer from '@/components/welcomer'
import Services from '@/components/services'
import WhySolun from '@/components/whySolun'
import Testimonials from '@/components/testimonials'
import CTABanner from '@/components/CTABanner'

export default function Home() {
  return (
    <div className="bg-primary min-h-screen">
      <section>
        <Welcomer />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <WhySolun />
      </section>
      <section>
        {/* <Testimonials /> */}
      </section>
      <section>
        <CTABanner />
      </section>
    </div>
  )
}