import React, { useState, useEffect } from "react";
import certi from "../assets/certi.png";
import bgImage from "../assets/bg3.jpg";
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

      {/* Zertifizierungen Section */}
      <div className="flex flex-col bg-yellow-400 py-10 items-center justify-center">
        <h2 className="text-5xl mb-8">Zertifizierungen</h2>

        <div className="shadow-md flex flex-col md:flex-row bg-yellow-400 justify-between">
          {/* Column 1 */}
          <div className="flex-1 flex flex-col justify-center items-center bg-white px-10 py-10 md:px-20 md:mr-6 min-w-[250px]">
            <img
              src={certi}
              alt="TÜV geprüfter Solartechniker"
              className="h-20 w-auto mb-4"
            />
            <h3 className="font-semibold px-6 text-center whitespace-nowrap">
              TÜV geprüfter Solartechniker
            </h3>
          </div>

          {/* Column 2 */}
          <div className="flex-1 flex flex-col justify-center items-center bg-white px-20 py-10 my-10 md:my-0 md:mx-6 min-w-[250px]">
            <img
              src={certi}
              alt="TÜV geprüfter Solartechniker"
              className="h-20 w-auto mb-4"
            />
            <h3 className="font-semibold px-6 text-center whitespace-nowrap">
              HWK Meisterabschluss
            </h3>
          </div>

          {/* Column 3 */}
          <div className="flex-1 flex flex-col justify-center items-center bg-white px-20 py-10 md:ml-6 min-w-[250px]">
            <img
              src={certi}
              alt="TÜV geprüfter Solartechniker"
              className="h-20 w-auto mb-4"
            />
            <h3 className="font-semibold px-6 text-center whitespace-nowrap">
              KNX Partner
            </h3>
          </div>
        </div>
      </div>
      {/* Row 3 */}
      <div className="bg-white flex flex-col py-20">
        <h2 className="text-3xl text-center">Wieso Wir</h2>
        <div className="flex flex-col md:flex-row pt-10 items-center justify-center">
          <div className="flex flex-col">
            <h2 className="text-5xl text-yellow-400 text-center">10</h2>
            <h2 className="text-center">jährige Erfahrung</h2>
          </div>
          <div className="flex flex-col my-10 md:my-0 md:mx-10">
            <h2 className="text-5xl text-yellow-400 text-center"> &gt;500 </h2>
            <h2 className="text-center">Elfogreiche Projekte betreut</h2>
          </div>
          <div className="flex flex-col">
            <h2 className="text-5xl text-yellow-400 text-center">100%</h2>
            <h2 className="text-center">Meisterarbeit</h2>
          </div>
        </div>
      </div>
      {/* Row 3 */}
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
      {/*Partner */}
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
