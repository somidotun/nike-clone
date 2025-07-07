"use client";

import SecondNav from "./(desktop)/secondNav/secondNav";
import React, { Fragment, Suspense } from "react";
import Media from "react-media";
import MobileNav from "./(mobile)/mobileNav";
import DesktopNav from "./(desktop)/topNav/nav";
import OpenToggle from "./(desktop)/openNav/openToggleNews";
import OpenToggleMen from "./(desktop)/openNav/openMen";
import OpenToggleWomen from "./(desktop)/openNav/openWomen";
import OpenToggleKids from "./(desktop)/openNav/openKid";

const Nav = () => {
  return (
    <section className="z-[200]">
      <Media
        queries={{
          small: "(max-width: 599px)",
          large: "(min-width: 600px)",
        }}
      >
        {(matches) => (
          <Fragment>
            {/* mobile nav */}
            <Suspense fallback={<p>Loading..</p>}>
              {matches.small && (
                <>
                  <MobileNav />
                </>
              )}
            </Suspense>

            {/* tablet and desktop nav */}
            {matches.large && (
              <>
                <div className="bg-[#F5F5F5] text-black py-2 px-8">
                  <DesktopNav />
                </div>
                <div className="bg-[#Ffffff] relative  text-black">
                  <SecondNav />

                  <div>
                    {/* open news and featured */}
                    <OpenToggle />

                    {/* open men */}
                    <OpenToggleMen />

                    {/* open Women */}
                    <OpenToggleWomen />

                    {/* open Kid */}
                    <OpenToggleKids />
                  </div>
                </div>
              </>
            )}
          </Fragment>
        )}
      </Media>
    </section>
  );
};

export default Nav;
