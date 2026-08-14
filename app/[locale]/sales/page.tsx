'use client' // just to test, pls get rid of later
import { motion } from "motion/react";
import IdealForCardsContainer from "./components/IdealForCardsContainer";
import BenefitsCardsContainer from "./components/BenefitsCardsContainer";
import PackageCard from "./components/PackageCard";
import ProcessStepCard from "./components/ProcessStepCard";

export default function Sales() {
    return (
    <main className="pt-mob-header-height lg:pt-header-height">
      {/* Hero */}
      <section className="
        lg:min-h-[640px]
        flex flex-col lg:flex-row
        bg-[#fafafa]
        border-b border-gray-200"
      >
        {/* Left div */}
        <div className="
          w-full lg:w-1/2 px-8 lg:px-24 py-6 lg:py-20
          flex flex-col justify-center gap-4 lg:gap-10"
        >
          <motion.h1
            className="text-4xl lg:text-7xl font-['Source_Serif_4'] font-semibold text-center lg:text-left leading-12 lg:leading-none"
            initial={{
              opacity: 0,
              y: -15
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              type: 'spring'
            }}
          >We build the <span className="text-emerald-600">digital infrastructure</span> of your travel business.</motion.h1>
          <motion.p
            className="text-lg lg:text-xl text-gray-500 font-[300]"
            initial={{
              opacity: 0,
              y: -15
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 1,
              type: 'spring'
            }}
          >We help tourism brands generate more bookings through high-converting websites and digital systems built to sell.</motion.p>
          {/* Div with buttons */}
          <motion.div
            className="w-full lg:w-auto flex gap-2 lg:gap-4"
            initial={{
              opacity: 0,
              y: -15
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 1.5,
              type: 'spring'
            }}
          >
            <button className="
              w-[60%] lg:w-auto lg:px-8 py-4 lg:py-4
              text-[#fafafa] text-md lg:text-lg
              bg-black rounded-full"
            >See our prices<i className="fa fa-arrow-right ml-2 scale-90" aria-hidden="true"></i></button>
            <button className="
              flex-1 lg:flex-auto lg:px-8 py-4 lg:py-4
              text-black text-sm lg:text-lg
              bg-[#fafafa] border border-gray-500 rounded-full"
            >Learn more</button>
          </motion.div>
          {/* Div with numbers */}
          <motion.div
            className="
              pt-10
              hidden lg:flex gap-16
              border-t border-gray-300"
            initial={{
              opacity: 0,
              y: -15
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 2,
              type: 'spring'
            }}
          >
            <div className="
              flex flex-col gap-2"
            >
              <p className="text-4xl font-bold">30+</p>
              <p className="text-sm text-gray-500 tracking-wider">{'Satisfied clients'.toUpperCase()}</p>
            </div>
            <div className="
              flex flex-col gap-2"
            >
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm text-gray-500 tracking-wider">{'Testimonials'.toUpperCase()}</p>
            </div>
          </motion.div>
        </div>
        {/* Right div */}
        <div className="
          w-full lg:w-auto h-[300px] lg:h-auto lg:flex-1
          px-4 lg:px-0
          lg:grid lg:place-content-center"
        >
          <motion.div
            className="w-full lg:w-[540px] aspect-square rounded-4xl overflow-hidden shadow-lg"
            initial={{
              opacity: 0,
              x: 16
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.75,
              ease: [0, 0.1, 0.6, 1]
            }}
          >
            <img
              src="/assets/beach.jpg"
              className="h-full object-cover"
              alt=""
            />
          </motion.div>
        </div>
      </section>
      {/* Who it is for */}
      <section className="
        min-h-[300px] py-32 px-8
        bg-gray-200"
      >
        <h2 className="
          w-2/3 mx-auto mb-16
          text-5xl text-center font-['Source_Serif_4']"
        >Websites designed to bring more bookings to your tourism business</h2>
        <p className="mx-auto mb-16 text-center text-2xl text-gray-500">Perfect for:</p>
        {/* Container with example cards */}
        <IdealForCardsContainer />
      </section>
      {/* Benefits */}
      <section className="
        min-h-[300px] py-32 px-8 relative hidden lg:block
        bg-white"
      >
        <h2 className="
          w-2/3 mx-auto mb-16
          text-5xl text-black text-center font-['Source_Serif_4']"
        >
          How we convert visitors into bookings effectively
        </h2>
        {/* Grid container with cards */}
        <BenefitsCardsContainer />
      </section>
      {/* Demo/portfolio */}
      <section className="
        min-h-[300px] py-16 px-8 hidden
        bg-[#fafafa]
        border-b border-gray-200"
      >
        This will be demo websites / portfolio. 
      </section>
      {/* Testimonials */}
      <section className="
        min-h-[300px] py-16 px-8 hidden
        bg-[#fafafa]
        border-b border-gray-200"
      >
        This will be testimonials.
      </section>
      {/* Pricing and packages */}
      <section className="
        min-h-[300px] py-32 px-8 hidden lg:block
        bg-[#eee]"
      >
        <h2 className="
          w-2/3 mx-auto mb-16 z-10 relative
          text-5xl text-black text-center font-['Source_Serif_4']"
        >
          Pricing and packages
        </h2>
        {/* Container for package cards */}
        <div className="
          w-fit mx-auto
          flex gap-8"
        >
          {/* Starter */}
          <PackageCard
            title="STARTER"
            price={700}
            color="black"
          >
            <li className="text-sky-600"><i className="fa fa-check mr-2" aria-hidden="true"></i>Up to 6 pages</li>
            <li className="text-sky-600"><i className="fa fa-check mr-2" aria-hidden="true"></i>Bilingual setup (Spanish and English)</li>
            <li className="text-sky-600"><i className="fa fa-check mr-2" aria-hidden="true"></i>WhatsApp and forms integration</li>
            <li className="text-sky-600"><i className="fa fa-check mr-2" aria-hidden="true"></i>Basic booking/reservation system</li>
            <li className="text-sky-600"><i className="fa fa-check mr-2" aria-hidden="true"></i>Photo gallery visualizer</li>
            <li className="text-sky-600"><i className="fa fa-check mr-2" aria-hidden="true"></i>Basic SEO</li>
            <li className="text-sky-600"><i className="fa fa-check mr-2" aria-hidden="true"></i>Google Maps integration</li>
            <li className="text-sky-600"><i className="fa fa-check mr-2" aria-hidden="true"></i>Simple CMS</li>
          </PackageCard>
          {/* Premium */}
          <PackageCard
            title="PREMIUM"
            price={1200}
            color="green"
          >
            <li className="text-gray-700"><i className="fa fa-circle mr-2 scale-[0.6]" aria-hidden="true"></i>Everything in STARTER</li>
            <li className="text-sky-600"><i className="fa fa-check mr-2" aria-hidden="true"></i>Advanced booking/reservation system</li>
            <li className="text-sky-600"><i className="fa fa-check mr-2" aria-hidden="true"></i>WhatsApp Business automations</li>
            <li className="text-sky-600"><i className="fa fa-check mr-2" aria-hidden="true"></i>Advanced SEO</li>
            <li className="text-sky-600"><i className="fa fa-check mr-2" aria-hidden="true"></i>Blog or guide features</li>
            <li className="text-sky-600"><i className="fa fa-check mr-2" aria-hidden="true"></i>Multilingual setup (up to 5 languages)</li>
            <li className="text-sky-600"><i className="fa fa-check mr-2" aria-hidden="true"></i>Speed optimization</li>
          </PackageCard>
        </div>
      </section>
      {/* Process/how it works */}
      <section className="
        min-h-[320px] py-32 px-8 hidden lg:block
        bg-[#fafafa]"
      >
        <h2 className="
          w-2/3 mx-auto mb-16 z-10 relative
          text-5xl text-black text-center font-['Source_Serif_4']"
        >How the process works</h2>
        <p className="mx-auto mb-16 text-center text-2xl text-gray-500">What happens after you choose a package?</p>
        {/* Container with process step cards */}
        <div className="grid grid-cols-2 gap-x-8 place-items-center">
          <ProcessStepCard
            title="Getting started"
            number="1"
          >
            <p className="mb-4 text-lg">You choose your package, select any add-ons you need, and confirm the project. I’ll send a short agreement outlining the scope, timeline, and final price so we can begin.</p>
            <p className="text-lg">When that's done, a project has begun!</p>
          </ProcessStepCard>
          <div></div>
          <div></div>
          <ProcessStepCard
            title="Discovery"
            number="2"
          >
            <p className="text-lg">We talk about your business, the services you offer, and what you want the website to accomplish. I’ll guide you through a few simple questions so we can clearly define what the site needs to include.</p>
          </ProcessStepCard>
          <ProcessStepCard
            title="Planning"
            number="3"
          >
            <p className="text-lg">Based on what we discussed, I map out the structure of your website — including the pages, content, and key features it will need. This gives us a clear plan for the project before moving into design.</p>
          </ProcessStepCard>
          <div></div>
          <div></div>
          <ProcessStepCard
            title="Design"
            number="4"
          >
            <p className="text-lg">I design the layout and visual style of your website based on the plan we created. You’ll be able to review the design and request revisions so everything feels right. Once you approve the design, we can move on to the next step.</p>
          </ProcessStepCard>
          <ProcessStepCard
            title="Development"
            number="5"
          >
            <p className="text-lg">I build your website and bring everything to life — making sure it works smoothly on all devices and integrates the features your business needs.</p>
          </ProcessStepCard>
          <div></div>
          <div></div>
          <ProcessStepCard
            title="Revision & launch"
            number="6"
          >
            <p className="text-lg">After final testing and your approval, your website goes live. Your new site is ready for visitors, and you can start sharing it with customers right away.</p>
          </ProcessStepCard>
        </div>
      </section>
      {/* CTA */}
      <section className="
        min-h-[300px] py-32 px-8 hidden lg:block
        bg-[#eee]"
      >
        <h2 className="
          w-2/3 mx-auto mb-16 z-10 relative
          text-5xl text-black text-center font-['Source_Serif_4']"
        >Let&apos;s build a website that works for your tourism business</h2>
        <p className="mx-auto mb-16 text-center text-2xl text-gray-500">Book a free consultation and tell me about your business. We&apos;ll discuss your goals and the best website package for you.</p>
        <div className="w-full mb-16 flex justify-center">
          <button className="
            py-8 px-16 bg-black
            text-3xl text-white rounded-full"
          >Schedule a Call</button>
        </div>
        <p className="mx-auto mb-16 text-center text-2xl text-gray-500">Don't want a call? Send us your inquiry directly and we will get back to you:</p>
        <form
          action=""
          className="
            w-[500px] mx-auto
            flex flex-col items-start gap-4"
        >
          <label htmlFor="inq-name-field" className="text-2xl">
            Name
          </label>
          <input
            type="text"
            id="inq-name-field"
            className="w-full px-2 py-1 mb-4 text-2xl bg-white rounded-md"
          />
          <label htmlFor="inq-email-field" className="text-2xl">
            E-mail
          </label>
          <input
            type="text"
            id="inq-email-field"
            className="w-full px-2 py-1 mb-4 text-2xl bg-white rounded-md"
          />
          <label htmlFor="inq-message-field" className="text-2xl">
            Your message
          </label>
          <textarea
            name="inq-message-area"
            id="inq-email-field"
            className="w-full h-[160px] p-2 mb-4 text-lg bg-white rounded-md resize-none"
          />
          <button
            type="submit"
            className="
              self-center py-8 px-16 bg-black
              text-3xl text-white rounded-full"
          >
            Send Inquiry
          </button>
        </form>
      </section>
    </main>
    )
}