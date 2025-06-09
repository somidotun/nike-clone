import { useToggleStore } from "@/app/store/useToggleStore";
import NewsFeatured from "../secondNav/newFeatured/newsFeatured";
const OpenToggle = () => {
  // toggle

  const isToggle = useToggleStore((state) => state.isToggled);

  return (
    <section>
      {/* open news */}
      {isToggle && (
        <div>
          <NewsFeatured />
        </div>
      )}
    </section>
  );
};

export default OpenToggle;
