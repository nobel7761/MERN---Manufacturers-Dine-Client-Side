import React from "react";
import Banner from "../../Shared/Header/Banner/Banner";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import CrossSection from "./CrossSection/CrossSection";
import FourPartSection from "./FourPartSection/FourPartSection";
import "./Home.css";
import Tools from "./Tools/Tools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CrossSection></CrossSection>

      <BusinessSummary></BusinessSummary>
      <Tools></Tools>
      <FourPartSection></FourPartSection>
    </div>
  );
};

export default Home;
