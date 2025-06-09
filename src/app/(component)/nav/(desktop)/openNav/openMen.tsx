import Men from "../secondNav/men/men";
import { useToggleMen } from "@/app/store/useToggleMen";
const OpenToggleMen = () => {
  // toggle

  const isToggleMen = useToggleMen((state) => state.isToggledMen);

  return (
    <div>
      {/* open news */}
      {isToggleMen && (
        <div>
          <Men />
        </div>
      )}
    </div>
  );
};

export default OpenToggleMen;
