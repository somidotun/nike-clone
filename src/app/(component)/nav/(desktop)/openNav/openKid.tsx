import Kid from "../secondNav/kids/kid";
import { useToggleKids } from "@/app/store/usetoggleKids";
const OpenToggleKids = () => {
  // toggle
  const isToggleKids = useToggleKids((state) => state.isToggledKids);

  return (
    <div>
      {/* open news */}
      {isToggleKids && (
        <div>
          <Kid />
        </div>
      )}
    </div>
  );
};

export default OpenToggleKids;
