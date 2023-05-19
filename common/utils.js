
// 查询条件，去除没有值的key
function Invalid(params = {}) {
    let obj = {};
    Object.keys(params).map(item => {
        if (
            params[item] !== null &&
            params[item] !== undefined &&
            params[item] !== ''
        ) {
            obj[item] = params[item];
        }
    });
    return obj
}


// 分页处理
function Paging({ page = 1, size = 10 }) {
    let obj = {
        page: Math.max(page * 1, 1) - 1,
        size: Math.max(size * 1, 1),
    };
    return obj
}

module.exports = { Invalid, Paging }