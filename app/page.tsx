import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      {/* Logo and text container */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 md:gap-12">
        {/* Sailboat logo */}
        <div className="relative">
          <Image
            src="/shipwell-logo.png"
            alt="Sailboat"
            width={600}
            height={600}
            className="object-contain w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] opacity-60 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            priority
          />
        </div>
        
        {/* Coming Soon text */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-b from-white to-black bg-clip-text text-transparent px-4 text-center">
          Coming Soon
        </h1>
      </div>
    </div>
  )
}
