import { useToggleWomen } from "@/app/store/useToggleWomen";
import Women from "../secondNav/women/women";
const OpenToggleWomen = () => {
  // toggle

  const isToggleWomen = useToggleWomen((state) => state.isToggledWomen);

  return (
    <div>
      {/* open news */}
      {isToggleWomen && (
        <div>
          <Women />
        </div>
      )}
    </div>
  );
};

export default OpenToggleWomen;
