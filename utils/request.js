var api = require('./api.js');
var utils = require('./util.js');

function request(url, data, successCb, errorCb, completeCb) {
    wx.request({
        url: url,
        method: 'GET',
        data: data,
        success: function (res) {
            if (res.statusCode == 200) {
                utils.isFunction(successCb) && successCb(res.data);
            }
        },
        error: function () {
            utils.isFunction(errorCb) && errorCb;
        },
        complete: function () {
            utils.isFunction(completeCb) && completeCb();
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

module.exports = {
    requestNodes: requestNodes,
    requestHots: requestHots,
    requestLatest: requestLatest
}