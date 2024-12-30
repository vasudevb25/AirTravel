import React, { useState } from "react";
import "./seats.css"; // Ensure CSS styles for rows and seats are defined.

const rowsConfig = [
  { label: "Economy", seats: "0000000000", value: 100 },
  { label: "Business", seats: "0000100000", value: 400 },
  { label: "First", seats: "1111100000", value: 500 },
];

const App = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (rowIndex, seatIndex) => {
    const seatKey = `${rowIndex}-${seatIndex}`;
    if (selectedSeats.includes(seatKey)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatKey));
    } else {
      setSelectedSeats([...selectedSeats, seatKey]);
    }
  };

  const handleBooking = () => {
    if (selectedSeats.length > 0) {
      const bookingSummary = {};
      let totalCost = 0;

      selectedSeats.forEach((seat) => {
        const [rowIndex] = seat.split("-");
        const rowConfig = rowsConfig[rowIndex];

        if (!bookingSummary[rowConfig.label]) {
          bookingSummary[rowConfig.label] = { count: 0, cost: 0 };
        }

        bookingSummary[rowConfig.label].count++;
        bookingSummary[rowConfig.label].cost += rowConfig.value;
        totalCost += rowConfig.value;
      });

      let summaryMessage = "Booking Summary:\n";
      for (const row in bookingSummary) {
        summaryMessage += `${row}: ${bookingSummary[row].count} seat(s), ₹${bookingSummary[row].cost}\n`;
      }
      summaryMessage += `Total Cost: ₹${totalCost}`;
      alert(summaryMessage);
    } else {
      alert("No seats selected.");
    }
  };

  return (
    <div className="container">
      <div id="seating-container">
        {rowsConfig.map((row, rowIndex) => (
          <div key={row.label} className="row">
            <div className="row-label">{row.label}</div>
            {row.seats.split("").map((seat, seatIndex) => (
              <div
                key={`${rowIndex}-${seatIndex}`}
                className={`seat ${seat === "1" ? "unavailable" : ""} ${
                  selectedSeats.includes(`${rowIndex}-${seatIndex}`)
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  seat === "0" && handleSeatClick(rowIndex, seatIndex)
                }
              >
                {seat === "1" ? "X" : ""}
              </div>
            ))}
          </div>
        ))}
      </div>
      <button id="book-button" onClick={handleBooking}>
        Book Seats
      </button>
    </div>
  );
};

export default App;
