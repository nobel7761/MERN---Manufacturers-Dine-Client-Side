import React from "react";
import Banner from "../../Shared/Header/Banner/Banner";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import CrossSection from "./CrossSection/CrossSection";
import FourPartSection from "./FourPartSection/FourPartSection";
import "./Home.css";
import Tools from "./Tools/Tools";
import Reviews from './Reviews/Reviews';
import Partners from './Partners/Partners';
import SearchSection from "./SearchSection/SearchSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CrossSection></CrossSection>

      <BusinessSummary></BusinessSummary>
      <Tools></Tools>
      <FourPartSection></FourPartSection>
      <Reviews></Reviews>
      <Partners></Partners>
      <SearchSection></SearchSection>
    </div>
  );
};

export default Home;
