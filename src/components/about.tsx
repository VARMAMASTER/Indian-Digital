import { Circle, Cpu, Lock, Sparkles, Zap } from "lucide-react";
import { ScrollView } from "./scroll-view";
import Image from "next/image";

const ourPrinciples = [
  {
    title: "Creativity with Purpose",
    description:
      "Our designs aren’t just pretty; they’re built to solve problems and make an impact.",
  },
  {
    title: "Collaboration is Key",
    description:
      "We work with you, not just for you. Great ideas come from teamwork.",
  },

  {
    title: "Honest & Transparent",
    description:
      "No confusing jargon or hidden fees. Just clear communication and real results.",
  },
  {
    title: "Details Matter",
    description:
      "The little things make a big difference. We sweat the small stuff, so you don’t have to.",
  },
];

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32" id="about">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <ScrollView>
            <h2 className="text-balance text-4xl font-medium lg:text-5xl">
              About Us
            </h2>
          </ScrollView>
          <ScrollView>
            <p>
              Indian Digital was founded to digitize Indian businesses — helping
              local brands grow through thoughtful product design, clear
              strategy, and committed delivery. We build websites, brand
              experiences, and digital tools that help businesses reach more
              customers and thrive online.
            </p>
            <blockquote className="mt-4 italic text-sm text-muted-foreground">
              "Digital first, people always." — Indian Digital
            </blockquote>
            <blockquote className="mt-2 italic text-sm text-muted-foreground">
              "Small businesses, big impact." — Our Mission
            </blockquote>
          </ScrollView>
        </div>
        <ScrollView>
          <Image
            className="rounded-(--radius) grayscale-75 object-cover aspect-[16/9] w-full"
            src="/images/office.jpeg"
            alt="team image"
            height="480"
            width="720"
            loading="lazy"
          />
        </ScrollView>
        <ScrollView>
          <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
            {ourPrinciples.map((principle, index) => (
              <div className="space-y-3" key={index}>
                <div className="flex items-center gap-2">
                  <Circle className="size-4" />
                  <h3 className="text-sm font-medium">{principle.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
