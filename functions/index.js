const functions = require("firebase-functions");
const admin = require("firebase-admin");
const sgMail = require("@sendgrid/mail");

admin.initializeApp();
sgMail.setApiKey("YOUR_SENDGRID_API_KEY");

exports.sendBookingEmail = functions.https.onCall((data, context) => {
  const msg = {
    to: data.email,
    from: "your-email@example.com",
    subject: "Booking Confirmation",
    text: `Thank you for your booking. Here are the details:\n
        Property: ${data.property.name}\n
        Location: ${data.property.location}\n
        Price: $${data.property.price}\n
        Check-in: ${data.checkIn}\n
        Check-out: ${data.checkOut}\n`,
    html: `<p>Thank you for your booking. Here are the details:</p>
               <p>Property: ${data.property.name}</p>
               <p>Location: ${data.property.location}</p>
               <p>Price: $${data.property.price}</p>
               <p>Check-in: ${data.checkIn}</p>
               <p>Check-out: ${data.checkOut}</p>`,
  };
  return sgMail.send(msg)
      .then(() => {
        return {success: true};
      })
      .catch((error) => {
        return {error: error.toString()};
      });
});
