import ControlBody from "./bodyimages/controlBody";
import Buy from "./price/buy";
import { Suspense } from "react";
import Text from "./text/text";
import Ambassador from "./Ambassador/ambassador";

const Body = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* images */}
      <Suspense fallback={<p>Loading ...</p>}>
        <ControlBody />
      </Suspense>

      {/* price */}
      <Buy />

      {/* ambassodor */}
      <Ambassador />

      {/* text */}
      <Text />
    </div>
  );
};

export default Body;
