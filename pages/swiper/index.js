// pages/swiper/index.js
Page({
  data:{
    showDots: true,
    autoplay: false,
    interval: 2000,
    duration: 500
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  
  switchShowDots: function (e) {
    this.setData({
      showDots: e.detail.value
    });
  },

  switchAutoplay: function (e) {
    this.setData({
      autoplay: e.detail.value
    });
  },

  sliderDuration: function(e) {
    this.setData({
      duration: e.detail.value
    });
  },

  sliderInterval: function (e) {
    this.setData({
      interval: e.detail.value
    });
  }
})