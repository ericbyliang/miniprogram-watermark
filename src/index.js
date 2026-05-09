const eventBus = require('./event-bus')
const {TEXT_KEY, TEXT_CHANGE_KEY} = require('./constants')
const setWatermarkText = (text)=>{
  wx.setStorageSync(TEXT_KEY, text)
  eventBus.emit(TEXT_CHANGE_KEY, text)
}
module.exports = {
  setWatermarkText
}