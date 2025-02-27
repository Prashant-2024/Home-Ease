import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 pt-14 pb-7">
      <h2 className="font-bold text-[46px] text-center">
        Find Home <span className="text-primary">Service/Repair</span> <br />{" "}
        Near You
      </h2>
      <h2 className="text-xl text-gray-400">
        Explore Bet Home Service & Repair near you
      </h2>
      <div className="mt-4 gap-4 flex items-center">
        <Input placeholder="Search" className="rounded-full md:w-[350px]" />
        <Button className="rounded-full h-[46px]">
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
