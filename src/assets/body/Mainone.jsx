import Aboutme from "./Aboutme";
import Centerbody from "./Centerbody";
import Midonebody from "./Midonebody";
import Skillsection from "./Skillsection";
import Upbody from "./Upbody";

function Mainone() {
  return (
    <div className="bg-[#111111] text-white min-h-screen pt-24">
      <Upbody />
      {/* <Midonebody />
      <Skillsection />  */}
      <Centerbody></Centerbody>
      {/* <Aboutme /> Uncomment this if you want to use it */}
    </div>
  );
}

export default Mainone;
