/**
 * 注册小程序
 */
App({
    /* 初始化 */
    onLaunch() {
        wx.login();
    },

    /* 监听小程序显示 */
    onShow() {

    },

    /* 监听小程序隐藏 */
    onHide() {

    },

    /* 错误监听函数 */
    onError() {

    },

    getUserInfo(callback) {
        let self = this;
        
        if (typeof callback !== 'function') {
            return;
        }

        if (self.globalData.userInfo) {
            callback(self.globalData.userInfo);
        } else {
            wx.login({
                success() {
                    wx.gerUserInfo({
                        success(res) {
                            self.globalData.userInfo = res.userInfo;
                            callback(self.globalData.userInfo);
                        }
                    });
                },

                fail() {
                    wx.showToast({
                        title: '获取用户信息失败'
                    });
                }
            });
        }
    },

    globalData: {
        userInfo: null
    }
});