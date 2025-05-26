"use client";

import SecondNav from "./(desktop)/secondNav/secondNav";
import React, { Fragment } from "react";
import Media from "react-media";
import MobileNav from "./(mobile)/mobileNav";
import DesktopNav from "./(desktop)/topNav/nav";

const Nav = () => {
  return (
    <section>
      <Media
        queries={{
          small: "(max-width: 599px)",
          large: "(min-width: 600px)",
        }}
      >
        {(matches) => (
          <Fragment>
            {/* mobile nav */}
            {matches.small && (
              <>
                <MobileNav />
              </>
            )}

            {/* tablet and desktop nav */}
            {matches.large && (
              <>
                <div className="bg-[#F5F5F5] py-2 px-8">
                  <DesktopNav />
                </div>
                <div className="bg-[#Ffffff] py-1 px-6">
                  <SecondNav />
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
