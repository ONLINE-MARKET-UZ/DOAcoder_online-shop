import "./style.scss";

import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";
import ResHeader from "./ResHeader"

const index = () => {
  return (
    <header>
      <div className="container">
        <HeaderTop />
        <Navbar />
        <ResHeader/>
      </div>
    </header>
  );
};

export default index;
