"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React, { useEffect } from "react";
import Icone from "@/public/img/icon.png";
import { checkAndAddUser } from "../actions";
import Image from "next/image";

const Navbar = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      checkAndAddUser(user?.primaryEmailAddress?.emailAddress);
    }
  }, [user]);

  return (
    <div className="bg-base-200/30 px-5 md:px-[10%] py-4">
      {isLoaded &&
        (isSignedIn ? (
          <>
            <div className="flex justify-between items-center">
              <div className="flex text-2xl items-center font-bold">
                <Link href={"/"}>
                  <Image
                    src={Icone}
                    width={48}
                    height={56}
                    alt="logo"
                    className="h-12 w-12 mr-2" /></Link>
                Kisarr <span className="text-accent">.Bons</span>
              </div>

              <div className="md:flex hidden">
                <Link href={"/budjets"} className="btn">
                  Mes budjets
                </Link>
                <Link href={"/dashboard"} className="btn mx-4">
                  Tableau de bord
                </Link>
                <Link href={"/transactions"} className="btn">
                  Mes Transactions
                </Link>
              </div>
              <UserButton />
            </div>

            <div className="md:hidden flex mt-2 justify-center">
              <Link href={"/budjets"} className="btn btn-sm">
                Mes budjets
              </Link>
              <Link href={"/dashboard"} className="btn mx-4 btn-sm">
                Tableau de bord
              </Link>
              <Link href={"/transactions"} className="btn btn-sm">
                Mes Transactions
              </Link>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex text-2xl items-center font-bold">
              e <span className="text-accent">.Track</span>
            </div>
            <div className=" flex mt-2 justify-center">
              <Link href={"/sign-in"} className="btn btn-sm">
                Se connecter
              </Link>
              <Link href={"/sign-up"} className="btn mx-4 btn-sm btn-accent">
                S&apos;inscrire
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
