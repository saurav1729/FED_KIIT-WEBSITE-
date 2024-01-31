import SignL from "./SignL";
import SignMedium from "./Signmd";

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