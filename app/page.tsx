import { NavbarOrchestra } from "@/components/NavbarOrchestra";
import { HeroPremium } from "@/components/HeroPremium";
import { ServicesMinimal } from "@/components/ServicesMinimal";
import { SelectedWorks } from "@/components/SelectedWorks";
import { MegaFooter } from "@/components/MegaFooter";
import { DashboardsShowcase } from "@/components/DashboardsShowcase";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col justify-between selection:bg-emerald-500 selection:text-black">
      <NavbarOrchestra />

      <HeroPremium />

      <ServicesMinimal />

      <DashboardsShowcase />

      {/* <SelectedWorks /> */}

      <MegaFooter />
    </main>
  );
}
