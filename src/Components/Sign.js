import SignL from "./SignL";
import SignMedium from "./SignMd";

const Sign = () => {
  return (
    <div>
      <div className="md:block hidden">
        <SignL/>
      </div>

      <div className="block md:hidden">
        <SignMedium/>
      </div>
    </div>

  );
};
export default Sign;