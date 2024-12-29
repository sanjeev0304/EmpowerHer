import React from "react";
import Cards from "../components/learning/card";
import Navbar8 from '../components/Home/navbar8';
const womenData = [
  {
    name: "What is UPI and how to make UPI payments?",
    journey:
      "Unified Payments Interface (UPI) is a real-time payment system in India that allows users to transfer money instantly between bank accounts through a mobile device. It is managed by the National Payments Corporation of India (NPCI) and works 24/7.",
    actionText: "Watch the video for more info",
    link: "https://www.youtube.com/watch?v=EAux2r3AO3E",
  },
  {
    name: "Got a business? Learn how to list your product on Marketplaces like Amazon and flipkart",
    journey:
      "To list a product on Amazon or Flipkart, you first need to create a seller account on their respective platforms. After registering, log in to the seller dashboard and provide essential details like your business information, tax details, and bank account for payments. Once approved, go to the 'Add Product or Catalog section', and either search for an existing product to sell or create a new listing. Provide accurate details such as the product name, description, images, price, and stock quantity. After verifying your listing details, submit it for review. Once approved, your product will be live and ready for customers to purchase.",
      actionText: "Watch the video for more info",
    link: "https://www.youtube.com/watch?v=FQAwq-r4VhQ",
  },
  {
    name: "How do reach your target customers",
    journey:
      "To effectively reach customers, start by understanding their needs and preferences through market research. Use social media platforms like Instagram and Facebook to engage and share relevant content. Run targeted ads on Google or social media to reach specific audiences. Build an email list to send personalized offers and updates. Collaborate with influencers or complementary businesses to expand your reach. Additionally, optimize for local SEO and list your business on platforms like Google My Business. A consistent and customer-focused approach helps build trust and loyalty.",
      actionText: "Watch the video for more info",
    link: "https://30stades.com/farming/five-women-dairy-farming-entrepreneurs-who-whipped-up-success-stories-in-rural-areas-empowerment-4783741",
  },

  {
    name: "Make ADs for your product on social media!",
    journey:
      "To create ads for your products on social media, start by selecting the right platform based on your target audience, such as Instagram, Facebook, or LinkedIn. Use eye-catching visuals, clear product descriptions, and compelling headlines to grab attention. Set a goal for your ad, like driving sales or increasing website traffic, and define your target audience using the platform’s ad tools. Choose an ad format, such as image, video, or carousel, and set a budget. Finally, monitor your ad performance and optimize it for better results.",
      actionText: "Checkout for more details",
    link: "https://www.youtube.com/watch?v=lLib5T2l-GY",
  },
  
];

const learning = () => {
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
    Don't Know So much about Tech?, Dont worry here are some basics to start with
      </h1>
      <Cards womenData={womenData} />
    </div>
    </>
  );
};

export default learning;
