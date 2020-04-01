const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const htmlToText = require("nodemailer-html-to-text").htmlToText;

const { email, password } = require("./config");

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password
  }
});

mailTransport.use("compile", htmlToText());

const APP_NAME = "Noi's kitchen";

exports.sendUserEmail = functions.database
  .ref("/orders/{pushId}")
  .onCreate(order => {
    sendOrderEmail(order.val());
  });

function sendOrderEmail(order) {
  let maillist = [order.email, email];

  
  
  const mailOptions = {
      from: `${APP_NAME} <noreply@noiskitchen.com`,
      to: maillist,
      subject: `Your order from ${APP_NAME}.`,
      html: `
      <<table style="width:500px; margin: auto"> 
      <tr>
      <th>${order.displayName}</th>
      <br/>
      <th>You ordered some food, here's confirmation of that order. </th>
      </tr>
      ${order.order
        .map(
            ({ name, quantity, price, choice, spice }) => `
            <tr>
            <td>
            ${name}
            </td>  
            <td>
            ${choice}
            </td>  
            <td>
            ${spice}
            </td>  
            <td>
            ${quantity}X
            </td>       
            <td>
            $${quantity*price}
            </td>
            </tr>
            `
            )
            .join("")}
            </table>
            <div><p>Pick up at 14754 S. Murray Lane, Olathe 66062</p></div>
            `
        };
  mailTransport.sendMail(mailOptions);
}
