import ProjectCard from "./components/ProjectCard";
import CtaBtn from "./components/CtaBtn";
import SectionTitleH2 from "./components/SectionTitleH2";
import { useTranslations } from "next-intl";
import MoreProjectsBtn from "./components/MoreProjectsBtn";

export default function Home() {
  const tPage = useTranslations('HomePage')
  const tProjects = useTranslations('Projects')

  return (
    <main className="header-padding">
        {/* Hero */}
        <section className="
          min-h-[480px] lg:min-h-[640px] xl:min-h-[720px]
          px-8 lg:px-16
          flex flex-col items-center justify-center gap-8 lg:gap-12
          bg-mywhite"
        >
          <h1 className="
            text-3xl md:text-5xl lg:text-6xl
            text-center text-black leading-12 lg:leading-20"
          >
            {tPage('h1-1')}<br />{tPage('h1-2')}
          </h1>
          <CtaBtn />
        </section>
        {/* Web dev projects */}
        <section className="
          w-full px-8 lg:px-16 py-16 lg:py-32
          flex flex-col
          bg-gray-300"
        >
          <SectionTitleH2 textColor="text-black">
            {tPage('webSectionTitle')}
          </SectionTitleH2>
          {/* Container with the cards */}
          <div className="
            w-full mb-16
            flex flex-col gap-8
            lg:flex-row lg:justify-center lg:items-center lg:gap-8"
          >
            <ProjectCard
              title='Lady Patricia Dream Homes'
              description={tProjects('lpdh.description')}
              imgUrl="/assets/lpdh.webp"
              tech='Next.js, Tailwind CSS'
              href="/projects/web-dev/lpdh"
              theme="light"
            />
            <ProjectCard
              title="Plasma Vida Center"
              description={tProjects('plasma-vida.description')}
              imgUrl="/assets/plasma-vida.webp"
              tech='Next.js, Tailwind CSS'
              href="/projects/web-dev/plasma-vida"
              theme="light"
            />
          </div>
          <MoreProjectsBtn
            href="/projects/web-dev"
            className="self-center"
          />
        </section>
        {/* Beyond web dev */}
        <section className="
          w-full px-8 py-16
          flex flex-col
          bg-mywhite"
        >
          <SectionTitleH2 textColor="text-black">
            {tPage('beyondSectionTitle')}
          </SectionTitleH2>
          {/* Container with the cards */}
          <div className="
            w-full mb-16
            flex flex-col gap-4
            lg:flex-row lg:justify-center lg:items-center lg:gap-8"
          >
            <ProjectCard
              title='Chess By Me'
              description={tProjects('chess-by-me.description')}
              imgUrl="/assets/chess-by-me.webp"
              tech='JavaScript, HTML, CSS'
              href="/projects/other/chess-by-me"
              theme="dark"
            />
            <ProjectCard
              title='iCounter'
              description={tProjects('icounter.description')}
              imgUrl="/assets/icounter.webp"
              tech='Python'
              href="/projects/other/icounter"
              theme="dark"
            />
          </div>
          <MoreProjectsBtn
            href="/projects/other"
            className="self-center"
          />
        </section>
    </main>
  );
}
