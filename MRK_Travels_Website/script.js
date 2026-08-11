const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("show"));
});

document.getElementById("year").textContent = new Date().getFullYear();

const dateInput = document.getElementById("date");
const today = new Date();
const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
  .toISOString().split("T")[0];
dateInput.min = localDate;

document.getElementById("bookingForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const pickup = document.getElementById("pickup").value.trim();
  const destination = document.getElementById("destination").value.trim();
  const date = document.getElementById("date").value;
  const trip = document.getElementById("trip").value;
  const message = document.getElementById("message").value.trim();

  const formattedDate = date ? new Date(date + "T00:00:00").toLocaleDateString("en-IN", {
    day: "2-digit", month: "2-digit", year: "numeric"
  }) : "Not specified";

  const text =
`Hello MRK Travels,

I would like to book a cab.

Name: ${name}
Phone: ${phone}
Pickup: ${pickup}
Destination: ${destination}
Travel Date: ${formattedDate}
Trip Type: ${trip}
Additional Details: ${message || "None"}

Please share the fare and availability. Thank you.`;

  window.open("https://wa.me/919345362442?text=" + encodeURIComponent(text), "_blank");
});
