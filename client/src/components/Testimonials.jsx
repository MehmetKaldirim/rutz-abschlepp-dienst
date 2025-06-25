import { useState, useEffect } from "react";
import FeedbackCard from "./FeedbackCard";

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import bgImage from "../assets/bg2.png";
import defaultAvatar from "../assets/defaultAvatar.png";

const Testimonials = () => {
  const [share, setShare] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    title: "",
    avatar: null,
    comment: "",
  });
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [comments, setComments] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData((prevData) => ({ ...prevData, avatar: downloadURL }))
        );
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { avatar, ...dataToSend } = formData;
    const finalData = avatar ? formData : dataToSend;

    try {
      const res = await fetch(`/api/comment/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });

      if (res.ok) {
        setFormData({
          username: "",
          title: "",
          avatar: null,
          comment: "",
        });
        setFile(undefined);
        setFilePerc(0);
        fileUploadError(false);
        setShare(false);
        alert("Ihr Kommentar wurde zur Genehmigung eingereicht.");
      } else {
        console.error("Failed to create comment");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
    <section
      id="clients"
      className="flex flex-col items-center relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full bg-white py-16 flex flex-col sm:flex-row justify-center items-center relative z-10">
        <h2 className="text-3xl font-semibold text-yellow-400 mx-20 text-center sm:text-left">
          Ihr Feedback ist uns wichtig.
        </h2>

        <button
          onClick={() => {
            setShare((prev) => !prev);
          }}
          className="bg-yellow-400 text-white font-semibold text-lg py-4 my-6 px-8 rounded-3xl shadow-lg transition-colors duration-300 hover:bg-white hover:text-yellow-400"
        >
          {share ? "Cancel" : "Teilen"}
        </button>
      </div>

      {share && (
        <div className="w-full mt-6 relative z-10">
          <h1 className="text-3xl font-semibold text-yellow-400 text-center sm:text-left">
            Was sind Ihre Gedanken über uns?
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Ihr Name"
              className="p-3 rounded-md border border-gray-300"
              required
            />
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Ihr Titel"
              className="p-3 rounded-md border border-gray-300"
              required
            />
            <input
              type="file"
              name="avatar"
              accept="image/*"
              onChange={handleFileChange}
              placeholder="Ihr Foto"
              className="p-3 rounded-md border border-gray-300"
            />
            <p className="text-sm self-center">
              {fileUploadError ? (
                <span className="text-red-700">
                  Fehler beim Hochladen des Bildes (das Bild muss weniger als 2
                  MB groß sein)
                </span>
              ) : filePerc > 0 && filePerc < 100 ? (
                <span className="text-slate-700">{`Hochladen ${filePerc}%`}</span>
              ) : filePerc === 100 ? (
                <span className="text-green-700">
                  Bild erfolgreich hochgeladen!
                </span>
              ) : (
                ""
              )}
            </p>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleInputChange}
              placeholder="Ihre Gedanken"
              className="p-3 rounded-md border border-gray-300 h-32"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 text-white font-semibold text-lg py-4 my-6 px-8 rounded-3xl shadow-lg transition-colors duration-300 hover:bg-white hover:text-yellow-400"
            >
              Absenden
            </button>
          </form>
        </div>
      )}

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
          className="bg-yellow-400 text-white font-semibold text-lg py-4 my-6 px-8 rounded-3xl shadow-lg transition-colors duration-300 hover:bg-white hover:text-yellow-400 "
          onClick={handleShowMore}
        >
          Mehr anzeigen
        </button>
      )}
    </section>
  );
};

export default Testimonials;
