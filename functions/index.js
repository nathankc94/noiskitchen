const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const htmlToText = require("nodemailer-html-to-text").htmlToText;

const { email, password } = require("./config");

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password,
  },
});

mailTransport.use("compile", htmlToText());

const APP_NAME = "Noi's kitchen";

exports.sendUserEmail = functions.database
  .ref("/orders/{pushId}")
  .onCreate((order) => {
    sendOrderEmail(order.val());
  });

function sendOrderEmail(order) {
  let maillist = [order.email, email];

  // function getSpice(order) {
  //   if (!order.spice) return null;
  //   return order.spice;
  // }
  let cartTotal = 0;
  order.order.forEach(cartItem => {
  cartTotal = cartTotal+ (cartItem.quantity * cartItem.price);
  });

  const mailOptions = {
    from: `${APP_NAME}`,
    to: maillist,
    subject: `Your order summary from ${APP_NAME}.`,
    html: `
      <h1>Order Summary </h1>
      <table style="border: 1px solid black;
      text-align: center; border-collapse: collapse;"> 
      <tr>
          <th style="border: 1px solid black; text-align: center;">Name</th>
          <th style="border: 1px solid black; text-align: center;">Protein</th>
          <th style="border: 1px solid black; text-align: center;">Spice</th>
          <th style="border: 1px solid black; text-align: center;">Quantity</th>
          <th style="border: 1px solid black; text-align: center;">Price</th>
          </tr>
      ${order.order
        .map(
          ({ name, quantity, price, choice, spice }) => `
            <tr>
            <td style="border: 1px solid black; text-align: center;">
            ${name}
            </td>  
            <td style="border: 1px solid black; text-align: center;">
            ${choice}
            </td>  
            <td style="border: 1px solid black; text-align: center;">
            ${spice}
            </td>  
            <td style="border: 1px solid black; text-align: center;">
            ${quantity}X
            </td>       
            <td style="border: 1px solid black; text-align: center;">
            $${quantity * price}
            </td>
            </tr>
            `
        )
        .join("")}
            </table>
            <div>
            <h2>Your Total: $${cartTotal}</h2>
            <p>Thank you for ordering with us ${order.displayName}.</p>
            <p>Pick up at: 14754 S. Murray Lane, Olathe 66062</p>
            <p>(913) 549-2229</p>
            </div>
            `
  };
  mailTransport.sendMail(mailOptions);
}


