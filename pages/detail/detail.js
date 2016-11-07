var requests = require('../../utils/request.js');

Page({
    data: {
        id: null,
        topicData: {}
    },
    onLoad: function (option) {
        this.setData({
            id: option.id
        });
    },
    onReady: function () {
        var _this = this;
        requests.requestTopicDetail(
            _this.data.id,
            (data) => {
                _this.setData({
                    topicData: data[0]
                });
            }, () => {
                wx.navigateBack();
            }, () => { }
        );
    }
})