import React from "react";
import Cards from "../components/SuccessStories/cards";
import Navbar8 from '../components/Home/navbar8';
const womenData = [
  {
    name: " Mudra Yojana for Women",
    journey:
      "The Mudra Yojana scheme provides financial support to women entrepreneurs under three categories:                                                                                     1.Shishu(Loans up to ₹50,000 for startups.),                                                    2.Kishor(Loans between ₹50,001 and ₹5 lakhs for established enterprises seeking additional funds.),                                                                                         3.Tarun(Loans between ₹5 lakhs and ₹10 lakhs for business expansion.)",
    tips: "Empowerment through knowledge sharing leads to community development.",
    actionText: "Checkout for more details",
    link: "https://www.mudra.org.in/mudra-kahaniyaan-v2/women.html",
  },
  {
    name: "Dena Shakti Scheme",
    journey:
      "This scheme offers loans to women entrepreneurs engaged in retail, manufacturing, agriculture, or allied activities. Applicants are encouraged to participate in Entrepreneurship Development Programs (EDP) to enhance their skills.",
    tips: "Preserving tradition can lead to innovative business opportunities.",
    actionText: "Checkout for more details",
    link: "https://www.indiafilings.com/learn/dena-shakti-scheme/",
  },
  {
    name: "Women Enterprise Development Scheme",
    journey:
      "Offered by the North Eastern Development Finance Corporation Limited (NEDFi), this scheme aims to motivate women in the North Eastern Region to start their own ventures by providing financial assistance and skill development support.",
    tips: "Innovation in traditional industries can lead to significant growth.",
    content:
      "Empower your business with cutting-edge AI technology tailored for women entrepreneurs.",
      actionText: "Checkout for more details",
    link: "https://30stades.com/farming/five-women-dairy-farming-entrepreneurs-who-whipped-up-success-stories-in-rural-areas-empowerment-4783741",
  },

  {
    name: "Stand-Up India",
    journey:
      "Launched in 2016, this scheme facilitates bank loans between ₹10 lakhs and ₹1 crore to at least one Scheduled Caste (SC) or Scheduled Tribe (ST) borrower and one woman borrower per bank branch for setting up greenfield enterprises",
    content:
      "Empower your business with cutting-edge AI technology tailored for women entrepreneurs.",
      actionText: "Checkout for more details",
    link: "https://www.jansamarth.in/stand-up-india-scheme",
  },
  {
    name: "Prime Minister’s Employment Generation Programme (PMEGP)",
    journey:
      "A credit-linked subsidy scheme that promotes self-employment through the establishment of micro-enterprises in the non-farm sector by providing subsidies up to 35% of the project cost.",
    content:
      "Empower your business with cutting-edge AI technology tailored for women entrepreneurs.",
      actionText: "Checkout for more details",
    link: "https://msme.gov.in/1-prime-ministers-employment-generation-programme-pmegp",
  },
  {
    name: "National Urban Livelihoods Mission (NULM) – CENT SAHARI JEEVIKA",
    journey:
      "A program under NULM specifically designed for urban women entrepreneurs to enhance livelihood opportunities.",
    content:
      "Empower your business with cutting-edge AI technology tailored for women entrepreneurs.",
      actionText: "Checkout for more details",
    link: "https://www.centralbankofindia.co.in/en/NATIONAL-URBAN-LIVELIHOODS-MISSION-NULM",
  },  
];

const govtSchemes = () => {
  return (
    <>
  <Navbar8 />
    <div className="stories">
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          // color: "#2c3e50", // Dark blue-gray color
          textAlign: "center",
          marginTop: "150px",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          letterSpacing: "1px",
          lineHeight: "1.4",
        }}
      >
  Here are some of the key initiatives and schemes launched by the Government of India to support women entrepreneurs:
      </h1>
      <Cards womenData={womenData} />
    </div>
    </>
  );
};

export default govtSchemes;
