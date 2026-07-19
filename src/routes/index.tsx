import { createFileRoute } from "@tanstack/react-router";
import BirthdayHero from "@/components/BirthdayHero";
import { birthdayData } from "@/config/birthdayData";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: birthdayData.meta.homeTitle },
      { name: "description", content: birthdayData.meta.homeDesc },
    ],
  }),
});

function Index() {
  return <BirthdayHero />;
}
