const nodemailer = require("nodemailer")

async function sendMail() {
  var user = '125173679@qq.com'
  var pass = 'oybmetrtnxjzbghi'
  var to = '1192979413@qq.com'
  let transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    port: 587,
    secure: false,
    auth: {
      user: user,
      pass: pass
    }
  })
  let info = await transporter.sendMail({

    from: `亲爱的老公<${user}>`, 
    to: `亲爱的老婆<${to}>`, 
    subject: "亲爱的老婆", 
    text: '我爱你'
  })
  console.log("发送成功");

}

sendMail()
