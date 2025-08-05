"use client";

import React, { Fragment, Suspense } from "react";
import Media from "react-media";
import MobileAmbassador from "./mobileAmbassador";
import DesktopAmbassador from "./desktopAmbassador";

const Ambassador = () => {
  return (
    <section>
      <Media
        queries={{
          small: "(max-width: 767px)",
          large: "(min-width: 768px)",
        }}
      >
        {(matches) => (
          <Fragment>
            {/* mobile nav */}
            <Suspense fallback={<p>Loading..</p>}>
              {matches.small && (
                <>
                  <MobileAmbassador />
                </>
              )}
            </Suspense>

            {/* tablet and desktop nav */}
            <Suspense fallback={<p>Loading...</p>}>
              {matches.large && (
                <>
                  <div>
                    <DesktopAmbassador />
                  </div>
                </>
              )}
            </Suspense>
          </Fragment>
        )}
      </Media>
    </section>
  );
};

export default Ambassador;
