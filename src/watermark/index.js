const eventBus = require('../event-bus')
const {TEXT_KEY, TEXT_CHANGE_KEY} = require('../constants')
Component({
  lifetimes: {
    attached: function () {
      this._onChange = (text) => {
        this.setData({
          text
        })
      }
      eventBus.on(TEXT_CHANGE_KEY, this._onChange)
    },
    detached: function() {
      eventBus.off(TEXT_CHANGE_KEY, this._onChange)
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: String,
      value: wx.getStorageSync(TEXT_KEY) || '',
      observer: function (newVal, oldVal) {
        this.setData({
          text: newVal,
        });
      }
    },
    textSize: { 
      type: Number, 
      value: 28,
      observer: function (newVal, oldVal) {
        this.setData({
          textSize: newVal,
        });
    } },
    textColor: { 
      type: String, 
      value: 'rgba(80,80,80,0.08)' ,
      observer: function (newVal, oldVal) {
        this.setData({
          textColor: newVal,
        });
    }},
    rotate: { 
      type: Number, 
      value: -20,
      observer: function (newVal, oldVal) {
      this.setData({
        rotate: newVal,
      });
    } },
    gapX: { 
      type: Number, 
      value: 180 ,
      observer: function (newVal, oldVal) {
        this.setData({
          gapX: newVal,
        });
    }},
    gapY: { 
      type: Number, 
      value: 120,
      observer: function (newVal, oldVal) {
        this.setData({
          gapY: newVal,
        });
    } }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})