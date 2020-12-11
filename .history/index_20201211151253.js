const nodemailer = require("nodemailer")
const schedule = require("node-schedule")

async function sendMail(text) {
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
    text: text
  })
  console.log("发送成功")
}

const { default: Axios } = require("axios");
function getHoneyedWords() {
  var url = "https://chp.shadiao.app/api.php"
  return Axios.get(url)
}

// getHoneyedWords().then(res=>{
//   console.log(res.data)
//   sendMail(res.data)
// })
//每天下午5点21分发送
schedule.scheduleJob({ hour: 17, minute: 21 }, function () {
  console.log("启动任务:" + new Date())
  getHoneyedWords().then((res) => {
    console.log(res.data)
    sendMail(res.data)
  })
})