import React, { useState, useEffect } from "react";
import bgImage from "../assets/tolga-11.jpeg";
import FeedbackCard from "../components/FeedbackCard";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";

export default function Uber() {
  const [comments, setComments] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchComments = async () => {
    try {
      const res = await fetch(`/api/comment/getApproved`);
      const data = await res.json();
      if (res.ok) {
        setComments(data);
        setShowMore(data.length > 3);
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleShowMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const displayedComments = comments.slice(0, currentPage * 3);

  return (
    <div className="my-10">
      {/* Section Header */}
      <div className="bg-white mb-10">
        <h2 className="text-5xl text-center">Über Uns</h2>
      </div>

      {/* Intro Text for Abschleppdienst */}
      <div className="flex flex-col bg-yellow-400 py-20 items-center justify-center">
        <div className="max-w-4xl px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white leading-relaxed">
            Wir sind Ihr zuverlässiger Partner, wenn es um Abschleppdienste
            geht. Ob Panne, Unfall oder Fahrzeug ohne TÜV – wir sind rund um die
            Uhr für Sie da. Schnell, günstig und professionell – mit uns sind
            Sie immer auf der sicheren Seite. Kontaktieren Sie uns jederzeit –
            wir helfen Ihnen sofort weiter!
          </h2>
        </div>
      </div>

      {/* Kundenfeedback */}
      <div
        id="clients"
        className="flex flex-col items-center relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="flex flex-wrap justify-center w-full relative z-10 px-5 sm:px-10">
          {displayedComments.length > 0 ? (
            displayedComments.map((comment, index) => (
              <FeedbackCard
                key={comment._id || index}
                name={comment.username}
                content={comment.comment}
                title={comment.title}
                img={comment.avatar || defaultAvatar}
                truncateContent={true}
              />
            ))
          ) : (
            <p className="text-white text-lg">Derzeit gibt es kein Feedback.</p>
          )}
        </div>

        {showMore && (
          <button
            onClick={handleShowMore}
            className="bg-yellow-400 text-white font-semibold text-lg py-4 my-6 px-8 rounded-3xl shadow-lg transition-colors duration-300 hover:bg-white hover:text-yellow-400"
          >
            Mehr anzeigen
          </button>
        )}
      </div>

      {/* Partner */}
      <div className="bg-white flex flex-col py-20">
        <h2 className="text-4xl py-10 text-center">Partner</h2>
        <div className="flex md:justify-between mx-auto">
          <img src={partner1} alt="" className="h-20 w-auto md:h-40" />
          <img src={partner2} alt="" className="h-20 w-auto md:h-40" />
        </div>
      </div>
    </div>
  );
}
