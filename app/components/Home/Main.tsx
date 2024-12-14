import Image from "next/image";
import Link from "next/link";

export default function MainComponent() {
  return (
   
      <div className="flex flex-col items-center justify-center bg-gray-100 h-full overflow-hidden px-14 ">
        <div className="text-center overflow-y-scroll sm:h-[50vh] mt-4">
          <Image
            src="/PNG/Web Hero.png"
            alt="Banner-logo"
            width={800}
            height={500}
          ></Image>
        </div>
        <div className="text-center mt-6">
          <Image
            src="/PNG/Recommendation.png"
            alt="Banner-logo"
            width={1300}
            height={800}
          ></Image>
        </div>
        <div className="text-center mt-6">
          <Image
            src="/PNG/Spotlight.png"
            alt="Banner-logo"
            width={1300}
            height={800}
          ></Image>
        </div>
        <div className="text-center mt-6">
          <Image
            src="/PNG/Why Choose 8Sqft.png"
            alt="Banner-logo"
            width={1300}
            height={800}
          ></Image>
        </div>
        <div className="text-center mt-6">
          <Image
            src="/PNG/Footer.png"
            alt="Banner-logo"
            width={1300}
            height={800}
          ></Image>
        </div>
      </div>
  
  );
}
