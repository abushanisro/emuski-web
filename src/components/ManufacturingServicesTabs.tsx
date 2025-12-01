import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OemManufacturing } from "./OemManufacturing";
import { CustomManufacturing } from "./CustomManufacturing";
import { RapidPrototypingSection } from "./RapidPrototypingSection";
import { ProductionScaling } from "./ProductionScaling";
import { OnDemandManufacturingSection } from "./OnDemandManufacturingSection";

export function ManufacturingServicesTabs() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <Tabs defaultValue="oem" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <TabsTrigger value="oem">OEM Manufacturing</TabsTrigger>
            <TabsTrigger value="custom">Custom Manufacturing</TabsTrigger>
            <TabsTrigger value="prototyping">Rapid Prototyping</TabsTrigger>
            <TabsTrigger value="scaling">Production Scaling</TabsTrigger>
            <TabsTrigger value="on-demand">On-Demand Manufacturing</TabsTrigger>
          </TabsList>
          <TabsContent value="oem" className="mt-8 fade-in">
            <OemManufacturing />
          </TabsContent>
          <TabsContent value="custom" className="mt-8 fade-in">
            <CustomManufacturing />
          </TabsContent>
          <TabsContent value="prototyping" className="mt-8 fade-in">
            <RapidPrototypingSection />
          </TabsContent>
          <TabsContent value="scaling" className="mt-8 fade-in">
            <ProductionScaling />
          </TabsContent>
          <TabsContent value="on-demand" className="mt-8 fade-in">
            <OnDemandManufacturingSection />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}