var api = require('./api.js');
var util = require('./util.js');

function request(url, data, successCb, errorCb, completeCb) {
    wx.request({
        url: url,
        method: 'GET',
        data: data,
        success: function (res) {
            if (res.statusCode == 200) {
                util.isFunction(successCb) && successCb(res.data);
            }
        },
        error: function () {
            util.isFunction(errorCb) && errorCb;
        },
        complete: function () {
            util.isFunction(completeCb) && completeCb();
        }
    });
}

/**
 * 节点
 */
function requestNodes(successCb, errorCb, completeCb) {
    request(api.API_NODES, {}, successCb, errorCb, completeCb);
}

/**
 * 最热主题
 */
function requestHots(data, successCb, errorCb, completeCb) {
    request(api.API_HOT, data, successCb, errorCb, completeCb);
}

/**
 * 最新主题
 */
function requestLatest(data, successCb, errorCb, completeCb) {
    request(api.API_LATEST, data, successCb, errorCb, completeCb);
}

function requestTopicDetail(id, successCb, errorCb, completeCb) {
    request(api.API_TOPIC_DETAIL.replace(':id', id), {}, successCb, errorCb, completeCb);
}

module.exports = {
    requestNodes: requestNodes,
    requestHots: requestHots,
    requestLatest: requestLatest,
    requestTopicDetail: requestTopicDetail
}