import Image from "next/image";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

export default function MainComponent() {
  return (
    <div className='relative  '>
      <div className="flex flex-col items-center justify-center bg-gray-100 h-full overflow-hidden px-10">
      <div className="text-center overflow-y-scroll h-[50vh] mt-4">
        <Image
          src="/PNG/Web Hero.png"
          alt="Banner-logo"
          width={800}
          height={500}

        ></Image>
      </div>
      {/* <div className="mt-8">
        <Link href="/">
          <button className="bg-gray-900 hover:bg-gray-700 text-black font-semibold py-2 px-4 rounded shadow-md">
            Back to Home
          </button>
        </Link>
      </div> */}
      {/* <div className="mt-12 text-gray-600">
        <p>Follow us on social media to stay updated on our launch!</p>
        <ul className="flex justify-center mt-4">
          <li className="mr-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
          </li>
          <li className="mr-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          </li>
        </ul>
      </div> */}
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
    </div>
  );
}
