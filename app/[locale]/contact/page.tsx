import CustomIcon from "@/components/CustomIcon";
import Eyebrow from "@/components/ui-reusables/Eyebrow";
import HeroBulletItem from "./components/HeroBulletItem";
import Image from "next/image";

export default function Contact() {
    return (
    <main>
        {/* Hero */}
        <section className="
            px-32 py-32
            flex gap-16"
        >
            {/* Left div */}
            <div className="w-[50%]">
                <Eyebrow text="CONTACT US" />
                <h1 className="
                    mb-8
                    text-6xl font-['Source_Serif_4'] leading-16"
                >
                    Let's talk about your project.
                </h1>
                <p className="
                    mb-8
                    text-my-md text-secondary"
                >
                    Tell us what you’re building, what you want to improve, or where you’re stuck. We’ll help you find the right digital solution for your business.
                </p>
                {/* Bullet points */}
                <div className="
                    w-full mb-8
                    flex justify-between gap-4"
                >
                    <HeroBulletItem text="Free consultation" />
                    <HeroBulletItem text="No-obligation quote" />
                    <HeroBulletItem text="Reply within 24 hours" />
                </div>
                <Image
                    src="/assets/hero-img.jpg"
                    width={1280}
                    height={720}
                    className="
                        w-full h-80
                        object-cover object-center
                        rounded-4xl shadow-img"
                    alt="Unas personas"
                />
            </div>
        </section>
    </main>
    )
}