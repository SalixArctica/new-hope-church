/*eslint-disable*/

const { parseMultipartData, sanitizeEntity } = require("strapi-utils")

module.exports = {
  async create(ctx) {
    if (ctx.is("multipart")) {
      const { data } = parseMultipartData(ctx)

      await strapi.plugins["email"].services.email.send({
        to: "tankcaster@gmail.com",
        from: "mailbot@tankcaster.dev",
        replyTo: data.email,
        subject: "Contact Form Message",
        text: `${data.name} sent the message:
        ${data.message}
        You can reply by directly replying to this email or at their provided address: ${data.email}`,
      })

      return data
    }
  },
}
