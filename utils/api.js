const BASE_URL = 'https://www.v2ex.com/api';

module.exports = {
    API_NODES: BASE_URL + '/nodes/show.json', // 节点信息
    API_HOT: BASE_URL + '/topics/hot.json', // 最热主题
    API_LATEST: BASE_URL + '/topics/latest.json', // 最新主题
    API_TOPIC_DETAIL: BASE_URL + '/topics/show.json?id=:id' // 主题详情
};