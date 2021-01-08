const Mock = require('mockjs')
const util = require('./helper')

module.exports = function (app) {
  //获取用户信息
  app.get('/user/userinfo', function (rep, res) {
    const json = util.getJsonFile('./userInfo.json5')
    res.json(Mock.mock(json))
  })
}
