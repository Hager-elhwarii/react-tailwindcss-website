import "./App.css";
import NavBar from "./Components/NavBar";
import OurMission from "./Components/OurMission";
import ImagesSection from "./Components/ImagesSection";
import WhatWeDo from "./Components/WhatWeDo";
import WhatWeDont from "./Components/WhatWeDont";
import DoYouLike from "./Components/DoYouLike";
import WhatWeCharge from "./Components/WhatWeCharge";
import Number from "./Components/Number";
import WhatOthersHave from "./Components/WhatOthersHave";
import Footer from "./Components/Footer";


function App() {
  return (
    <>
      <NavBar/>
      <OurMission/>
      <ImagesSection/>
      <WhatWeDo />
      <WhatWeDont/>
      <DoYouLike />
      <WhatWeCharge />
      <Number />
      <WhatOthersHave />
      <Footer />
    </>
  );
}
export default App;
