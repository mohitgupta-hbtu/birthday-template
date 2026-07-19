import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, Images, Sparkles } from "lucide-react";
import AmbientBackground from "@/components/journey/AmbientBackground";
import StoryBlock from "@/components/journey/StoryBlock";
import StoryLines from "@/components/journey/StoryLines";
import { birthdayData } from "@/config/birthdayData";

export const Route = createFileRoute("/journey")({
  component: JourneyPage,
  head: () => ({
    meta: [
      { title: birthdayData.meta.journeyTitle },
      { name: "description", content: birthdayData.meta.journeyDesc },
    ],
  }),
});

function SectionTitle({ chapter, title }: { chapter: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="text-center pt-12 md:pt-16"
    >
      <p className="font-display italic tracking-[0.4em] text-xs md:text-sm text-[oklch(0.55_0.22_295)]">
        ✦ {chapter} ✦
      </p>
      <h2 className="puffy-text font-black text-4xl md:text-5xl mt-2">{title}</h2>
    </motion.div>
  );
}

function JourneyPage() {
  return (
    <main className="relative font-body min-h-screen">
      <AmbientBackground />

      {/* back link */}
      <Link
        to="/"
        className="fixed top-6 left-6 z-30 backdrop-blur-xl bg-white/50 border border-white/70 rounded-full px-4 py-2 shadow-lg flex items-center gap-2 text-sm font-semibold text-[oklch(0.4_0.2_295)] hover:scale-105 transition"
      >
        <ArrowLeft className="w-4 h-4" /> back
      </Link>

      <SectionTitle chapter={birthdayData.journey.chapter} title={birthdayData.journey.title} />

      {birthdayData.journey.storyBlocks.map((block, idx) => (
        <StoryBlock
          key={idx}
          image={block.image}
          imageAlt={block.imageAlt}
          side={block.side}
          tilt={block.tilt}
        >
          <StoryLines lines={block.lines} />
        </StoryBlock>
      ))}

      {/* Gallery button — goes to /gallery route */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center gap-6 py-12 md:py-16"
      >
        <Link
          to="/gallery"
          className="group relative btn-bday text-white font-semibold px-10 py-4 rounded-full flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_15px_40px_oklch(0.55_0.22_295/0.5)]"
        >
          <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition" />
          <Images className="relative w-5 h-5" />
          <span className="relative tracking-wide">VIEW GALLERY</span>
          <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-[oklch(0.95_0.05_80)] opacity-0 group-hover:opacity-100 transition animate-pulse" />
        </Link>
      </motion.div>
    </main>
  );
}
