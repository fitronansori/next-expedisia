import { Button } from "@/components/ui/button";
import {
  Binoculars,
  Map,
  PersonStanding,
  Plane,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section>
      <div className="container h-[calc(100vh-64px)] flex items-center justify-center">
        <div className="w-full h-full lg:h-[450px] py-4 lg:py-0 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex-1 h-full flex flex-col items-start sm:items-center lg:items-start justify-center space-y-4">
            <div className="space-y-4">
              <p className="uppercase font-medium sm:text-center lg:text-start">
                Explore the world with us
              </p>

              <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold sm:text-center lg:text-start">
                Discover the best tours and travel packages for your next trip.
              </h1>

              <p className="text-sm sm:text-base sm:text-center lg:text-start">
                We offer the best travel packages to the most beautiful places
                in the world. Our tours are designed to give you the best
                experience possible. We take care of everything so you can relax
                and enjoy your trip.
              </p>
            </div>

            <div>
              <Button asChild>
                <Link href="/destinations">
                  Explore Destinations <Plane className="size-5 text-black" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative flex-1 size-full flex items-center justify-center">
            <Image
              src={"/assets/images/heroImg.jpg"}
              alt=""
              width={450}
              height={450}
              className="size-[300px] sm:size-[400px] object-cover rounded-full shadow-2xl"
            />

            <div className="absolute top-5 md:top-20 lg:top-5 left-0 md:left-20 lg:left-0 max-w-max p-3 bg-white border border-primary rounded-full shadow-lg font-semibold flex items-center gap-2">
              <Map className="size-6" /> <span>150+ Destinations</span>
            </div>

            <div className="absolute bottom-0 md:bottom-10 left-9 md:left-32 lg:left-9 max-w-max p-3 bg-white border border-primary rounded-full shadow-lg font-semibold flex items-center gap-2">
              <Binoculars className="size-6" /> <span>60+ Tours</span>
            </div>

            <div className="absolute top-20 md:top-10 right-0 md:right-32 max-w-max p-3 bg-white border border-primary rounded-full shadow-lg font-semibold flex items-center gap-2">
              <ShieldCheck className="size-6" /> <span>40+ Years</span>
            </div>

            <div className="absolute bottom-20 md:bottom-32 right-0 md:right-5 max-w-max p-3 bg-white border border-primary rounded-full shadow-lg font-semibold flex items-center gap-2">
              <PersonStanding className="size-6" />{" "}
              <span>100K+ Happy Customers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
