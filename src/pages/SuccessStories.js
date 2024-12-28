import React from "react";
import Cards from "../components/SuccessStories/cards";
import Navbar from "../components/Home/navbar8";
import binadevi from "../components/images/binadevi.jpg"
import img1 from "../components/images/1.jpg"
const womenData = [
  {
    name: "Bina Devi",
    journey:
      "Known as the 'Mushroom Mahila,' Bina Devi popularized mushroom cultivation in over 100 villages, empowering more than 1,500 women in Bihar.",
    tips: "Empowerment through knowledge sharing leads to community development.",
    actionText: "Learn How She Did It",
    link: "https://hutsandlooms.com/blogs/news/success-stories-of-rural-female-entrepreneurs-in-india",
    img: img1,
  },
  {
    name: "Gunavathy Chandrasekaran",
    journey:
      "Transformed her passion for traditional crafts into a successful business, providing employment to local women in her community.",
    tips: "Preserving tradition can lead to innovative business opportunities.",
    actionText: "Learn How She Did It",
    link: "https://yourstory.com/herstory/2019/08/5-women-entrepreneurs-rural-india-empowerment",
  },
  {
    name: "Milan Sharma",
    journey:
      "Revitalized her family's dairy business in Haryana, implementing modern techniques to increase productivity and profitability.",
    tips: "Innovation in traditional industries can lead to significant growth.",
    content:
      "Empower your business with cutting-edge AI technology tailored for women entrepreneurs.",
    actionText: "Learn How She Did It",
    link: "https://30stades.com/farming/five-women-dairy-farming-entrepreneurs-who-whipped-up-success-stories-in-rural-areas-empowerment-4783741",
  },

  {
    name: "Anita Desai",
    journey:
      "Runs a small-scale business in Mewat, Haryana, and has empowered and educated other women entrepreneurs about online transactions, facilitating business growth.",
    tips: "Digital literacy can significantly enhance business efficiency.",
    content:
      "Empower your business with cutting-edge AI technology tailored for women entrepreneurs.",
    actionText: "Learn How She Did It",
    link: "https://www.nasscomfoundation.org/blog/women-empowerment/investing-into-women-entrepreneurs-to-strengthen-the-entrepreneurship-landscape-of-rural-india-authored-by-nidhi-bhasin-ceo-nasscom-foundation/", // Replace with the correct link
  },
  {
    name: "Navalben Dalsangbhai Chaudhary",
    journey:
      "A 62-year-old woman from Gujarat who became a successful dairy entrepreneur, inspiring many with her determination and business acumen.",
    tips: "It's never too late to start a successful venture.",
    content:
      "Empower your business with cutting-edge AI technology tailored for women entrepreneurs.",
    actionText: "Learn How She Did It",
    link: "https://www.mompreneurcircle.com/gujarat-women-navalben-dalsangbhai-chaudhary-sells-1crore-milk-in-a-year/#:~:text=The%20story%20of%20Navalben%20Dalsangbhai%20Chaudhary%2C%20a%2062-year-old,odd%20to%20start%20a%20mini-revolution%20in%20her%20district.", // Replace with the correct link
  },
  // Add more women data as needed...
];

const stories = () => {
  return (
<>
    <Navbar />
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
        These Women Didn't Give Up: Discover the Personal Stories of Rural
        Entrepreneurs
      </h1>
      <Cards womenData={womenData} />
    </div>
    </>
  );
};

export default stories;
