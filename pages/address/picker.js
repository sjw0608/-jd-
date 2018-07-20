const area = require('../../common/city.data-3')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    provinceName: [],
    provinceCode: [],
    provinceSelIndex: '',
    cityName: [],
    cityCode: [],
    citySelIndex: '',
    districtName: [],
    districtCode: [],
    districtSelIndex: ''
  },

  //获取所在省
  bindRegionChange: function(e) {
    var provinceName = this.data.provinceName
    var provinceCode = this.data.provinceCode
    this.setData({
      province: provinceName[e.detail.value],
      codeProvince: provinceCode[e.detail.value],
      provinceSelIndex: e.detail.value,
      city: '',
      codeCity: ''
    })
    this.setCityArea(area.area)
  },
  //获取所在市
  bindRegionCity: function(e) {
    var cityName = this.data.cityName
    var cityCode = this.data.cityCode
    this.setData({
      city: cityName[e.detail.value],
      codeCity: cityCode[e.detail.value],
      citySelIndex: e.detail.value,
      county: '',
      codeCounty: ''
    })
    this.setDistrictArea(area.area)
  },
  //获取所在县/区
  bindDistrict: function(e) {
    var districtName = this.data.districtName
    var districtCode = this.data.districtCode
    this.setData({
      county: districtName[e.detail.value],
      codeCounty: districtCode[e.detail.value],
      citySelIndex: e.detail.value
    })
  },

  /**
   * 省的剥离
   */
  setAreaData: function(area) {
    var provinceName = []
    var provinceCode = []
    for (let idx in area) {
      provinceName.push(area[idx].text)
      provinceCode.push(area[idx].value)
    }
    this.setData({
      provinceName: provinceName,
      provinceCode: provinceCode
    })
  },
  /**
   * 各省中市的剥离
   */
  setCityArea: function(area) {
    var provinceSelIndex = this.data.provinceSelIndex
    var cityName = []
    var cityCode = []
    for (let idx in area[provinceSelIndex].children) {
      cityName.push(area[provinceSelIndex].children[idx].text)
      cityCode.push(area[provinceSelIndex].children[idx].value)
    }
    this.setData({
      cityName: cityName,
      cityCode: cityCode,
      districtSelIndex: ''
    })
  },
  /**
   * 各市中剥离县/区
   */
  setDistrictArea: function(area) {
    var provinceSelIndex = this.data.provinceSelIndex
    var citySelIndex = this.data.citySelIndex
    var districtName = []
    var districtCode = []
    var area = area[provinceSelIndex].children[citySelIndex].children
    for (let idx in area) {
      districtName.push(area[idx].text)
      districtCode.push(area[idx].value)
    }
    this.setData({
      districtName: districtName,
      districtCode: districtCode,
      districtSelIndex: ''
    })
  },

  addAddress: function() {},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setAreaData(area.area)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})