"use client";

import React, { Fragment } from "react";
import Media from "react-media";
import Body from "./body";
import TabletBody from "./TabletBody";
import MobileBody from "./mobileBody";

const ControlBody = () => {
  return (
    <section>
      <Media
        queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)",
        }}
      >
        {(matches) => (
          <Fragment>
            {/* mobile nav */}

            {matches.small && (
              <>
                <MobileBody />
              </>
            )}

            {/* tablet */}
            {matches.medium && (
              <>
                <TabletBody />
              </>
            )}

            {/*desktop nav */}
            {matches.large && (
              <>
                <div>
                  <Body />
                </div>
              </>
            )}
          </Fragment>
        )}
      </Media>
    </section>
  );
};

export default ControlBody;
