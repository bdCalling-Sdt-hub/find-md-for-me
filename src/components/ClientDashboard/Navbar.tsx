import Image from "next/image";
import Link from "next/link";
import React from "react";
import person from "@/assests/person.png";

const Navbar = () => {
  return (
    <div
      className=" "
      style={{
        padding: 0,

        display: "flex",
        justifyContent: "space-between",
        paddingRight: "60px",
        paddingLeft: "270px",

        alignItems: "center",
      }}
    >
      <div></div>
      <Link href="/profile">
        <div className=" flex items-center  ">
          <Image
            src={person}
            style={{
              borderRadius: "100%",
            }}
            alt=""
            height={50}
            width={50}
          />
          <div>
            <p className="p-3 h-3"> Lamesha </p>
            <p className="p-3"> Client </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
