import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CardContext } from "../provider/Contexts";
import { CiLocationOn } from "react-icons/ci";
import { GiDuration, GiTakeMyMoney } from "react-icons/gi";
import { SiLevelsdotfyi } from "react-icons/si";
import { BsPeople } from "react-icons/bs";
import Swal from "sweetalert2";
import "animate.css";
import "./CardDetails.css";

const CardDetails = () => {
  const { id } = useParams();
  const { cards } = useContext(CardContext);
  const [card, setCard] = useState(false);
  console.log(new Date().getHours());
  useEffect(() => {
    const detailCard = cards.find((card) => card.id == id);
    setCard(detailCard);
  }, [id, cards]);

  if (!card) {
    return <h1>loading</h1>;
  }
  const {
    title,
    image,
    shortDescription,
    cost,
    bookingAvailability,
    location,
    duration,
    adventureLevel,
    includedItems,
    ecoFriendlyFeatures,
    maxGroupSize,
    specialInstructions,
  } = card;

  const handleExpert = () => {
    const timeHour = new Date().getHours();
    if (timeHour > 10 && timeHour < 20) {
      window.open("https://meet.google.com/landing", "_blank");
    } else {
      Swal.fire({
        title: "Expert is available from 10:00am to 8:00pm",
        showClass: {
          popup: `
      animate__animated
      animate__fadeInDown
      animate__faster
    `,
        },
        hideClass: {
          popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
        },
      });
    }
  };
  return (
    <div
      className="relative py-10 overflow-hidden"
      style={{ minHeight: "calc(100vh - 64px)" }}
    >
      <div className="relative glass flex max-lg:flex-col gap-5 max-sm:gap-3 rounded-xl border max-w-[85%] mx-auto p-5">
        <div className="max-h-fit max-w-[55%] max-lg:max-w-[100%] rounded-md object-contain animate__animated animate__bounceInLeft">
          <img
            src={image}
            alt={title}
            className="rounded-md object-cover w-full h-full"
          />
        </div>

        <div className="animate__animated animate__bounceInRight">
          <h1 className="text-3xl font-semibold mb-1 text-[#4389D0] max-sm:text-2xl">
            {title}
          </h1>
          <p className="text-sm mb-3">{shortDescription}</p>
          <div className="border rounded p-2">
            <h1 className="ml-3 font-semibold">Adventure Details</h1>
            <div className="grid grid-cols-2 max-md:grid-cols-1 text-sm gap-2 lg:gap-2.5 border p-2 mt-3 opacity-70 rounded">
              <p className="flex items-center gap-1">
                <CiLocationOn />
                <strong>Location:</strong> {location}
              </p>
              <p className="flex items-center gap-1">
                <GiTakeMyMoney />
                <strong>Cost:</strong> ${cost}
              </p>
              <p className="flex items-center gap-1">
                <GiDuration />
                <strong>Duration:</strong> {duration}
              </p>
              <p className="flex items-center gap-1">
                <BsPeople />
                <strong>Max Group Size:</strong> {maxGroupSize}
              </p>
              <p className="flex items-center gap-1 lg:col-span-2">
                <SiLevelsdotfyi />
                <strong>Adventure Level:</strong> {adventureLevel}
              </p>
            </div>
          </div>

          <div className="border rounded mt-3 p-2">
            <h3 className="ml-3 font-semibold">Included Items</h3>
            <ul className="grid grid-cols-2 max-md:grid-cols-1 text-sm gap-2 border p-3 mt-3 opacity-70 rounded">
              {includedItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="border rounded mt-3 p-2">
            <h3 className="ml-3 font-semibold">Eco-Friendly Features</h3>
            <ul className="grid grid-cols-2 max-md:grid-cols-1 text-sm gap-2 border p-3 mt-3 opacity-70 rounded">
              {ecoFriendlyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="mb-3">
            <h3 className="font-semibold text-lg mt-2">
              Special Instructions:
            </h3>
            <ul>
              {specialInstructions.map((instruction, index) => (
                <li key={index}>
                  {" "}
                  {index + 1}. {instruction}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-2">
            {bookingAvailability ? (
              <button className="btn btn-primary">Book Now</button>
            ) : (
              <p className="btn btn-disabled">
                Booking isn't available at the moment.
              </p>
            )}

            <button onClick={handleExpert} className="btn btn-secondary">
              Talk with Expert
            </button>
          </div>
        </div>
      </div>
      <div class="ocean absolute -z-10 ">
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
    </div>
  );
};

export default CardDetails;
