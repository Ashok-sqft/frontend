import Link from "next/link";
import React from "react";
import Image from "next/image";

import { RiMenuLine } from "react-icons/ri";

import { FaUser } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";
import { Badge } from "@/ui/badge";
import { useStore } from "@/Store/store";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { Button } from "@/ui/Button";
import { Label } from "@/ui/label";
import { Input } from "@/ui/input";
interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "For Buyers", href: "/", current: true },
  { name: "For Tenants", href: "#services", current: false },
  { name: "For Owners", href: "#about", current: false },
  { name: "For Builders", href: "#project", current: false },
  { name: "Insights", href: "/", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const {} = useStore();
  const location = useStore((state) => state.location);

  return (
    <>
      <div className=" w-full px-3 sm:px-5 py-3 h-18 shadow-md fixed z-100">
        <div className=" flex   justify-between">
          <div className="flex  gap-1  sm:gap-3 lg:w-[40%] ">
            <Link href="/">
              {" "}
              <Image
                src={"/assets/logo/8SQFT.svg"}
                alt="SQFT"
                width={40}
                height={40}
              />
            </Link>

            <div className="w-full max-w-fit self-center p-3">
              <Select>
                <SelectTrigger>Select a city</SelectTrigger>
                <SelectContent>{location?.placeName}</SelectContent>
              </Select>
            </div>

            <Link href="/Rental-Agreement" className="self-center">
              <p className="text-sm font-normal text-gray hover:text-black border border-gray-300 rounded-md  p-2  hover:border-primary transition-all duration-300 w-fit ">
                Rental Agreement
              </p>
            </Link>
          </div>

          {/* LINKS */}

          <div className="hidden lg:flex gap-4  self-center ">
            <div className="flex space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? " text-black hover:opacity-100"
                      : "hover:text-black hover:opacity-100",
                    "px-3 py-4 text-md font-normal opacity-75 "
                  )}
                  aria-current={item.href ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="bg-green text-white   text-sm font-thin rounded-md self-center p-1">
              Post property
            </div>
            <div className="hidden lg:flex  m-auto border border-gray-300 rounded-md px-2 py-2  ">
              <FaUser />
            </div>
            {/* <div className='relative'>
              <Card className="hidden sm:max-w-[350px]  sm:block rounded-md shadow-md border-gray-light-300 absolute top-16 right-0 bg-white ">
                <CardHeader>
                  <CardTitle>LOGIN/REGISTER</CardTitle>
                </CardHeader>
                <CardContent className='flex gap-5'>
                  <Link href='/Signin'> <Button variant="outline">LOGIN</Button></Link>
                  <Link href='/Signup'><Button className='text-white'>REGISTER</Button></Link>
                
                </CardContent>
              </Card>
            </div> */}
          </div>

          <div className="block lg:hidden self-center ">
            <RiMenuLine
              className="block h-6 w-6"
              aria-hidden="true"
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
