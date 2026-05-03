import React from "react";
import {
  FaBookOpen,
  FaUserCheck,
  FaStar,
  FaCheckCircle,
  FaSearch,
  FaGlobe,
} from "react-icons/fa";

const Tips = () => {
  const tips = [
    {
      icon: <FaBookOpen />,
      title: "Choose Quality Books",
      desc: "Pick books that are well-written, engaging, and highly recommended by readers.",
    },
    {
      icon: <FaUserCheck />,
      title: "Check Author Credibility",
      desc: "Look for books written by trusted and knowledgeable authors.",
    },
    {
      icon: <FaStar />,
      title: "Read Reviews & Ratings",
      desc: "Go through user reviews and ratings to understand the book’s value.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Verify Content Relevance",
      desc: "Ensure the book content is up-to-date and useful for your purpose.",
    },
    {
      icon: <FaSearch />,
      title: "Select Based on Interest",
      desc: "Choose books that match your interests and goals.",
    },
    {
      icon: <FaGlobe />,
      title: "Explore Trusted Sources",
      desc: "Browse books from reliable platforms and verified collections.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Book Selection Tips
        </h2>
        <p className="text-gray-500 mt-2">
          Follow these guidelines to find the perfect books for your reading journey.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-center">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="card bg-base-200 shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="card-body">
              
              {/* Icon */}
              <div className="text-3xl text-blue-500 mb-2">
                {tip.icon}
              </div>

              {/* Title */}
              <h2 className="card-title text-lg">{tip.title}</h2>

              {/* Description */}
              <p className="text-sm text-gray-600">{tip.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Tips;