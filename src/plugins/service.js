var AV = require('leancloud-storage');
var APP_ID = '51eYIByrVRmLLzniuk6KNlDT-gzGzoHsz';
var APP_KEY = 'XUuBfKY3isw0z9czhPpFIceu';
AV.init({
    appId: APP_ID,
    appKey: APP_KEY,
    masterKey: 'Y4AyRuYRdCCIXCnAbwDFg5Nk'
});
export const checkUser = () => {
    var currentUser = AV.User.current();
    if (currentUser) {
        return true
    }
    else {
        return false
    }
}
export const userLogin = (phoneNumber = '', password = '') => {
    return AV.User.logInWithMobilePhone(phoneNumber, password);
}
export const getAnswerList = (params) => {
    let query = new AV.Query('Answer')
    query.limit(params.limit)
    query.skip(params.skip)
    return query.find()
}
export const getAnswerListCount = () => {
    let query = new AV.Query('Answer')

    return query.count()
}
export const deleteAnswerList = (idArray) => {
    let objectArray = []
    idArray.map(item => {
        let answer = AV.Object.createWithoutData('Answer',item)
        objectArray.push(answer)
    })
    return AV.Object.destroyAll(objectArray)
}
export const getOrderList = () => {
    let query = new AV.Query('Order')
    return query.find()
}
export const addLuckyNumber = (luckyNumber) => {
    let Lucky = new AV.Object.extend('Lucky')
    let lucky = new Lucky()
    lucky.set('luckyNumber', luckyNumber)
    return lucky.save()
}
export const getLuckyNumberList = () => {
    let query = new AV.Query('Lucky')
    return query.find()
}
export const deleteAllNumberlist = (objects) => {
    return AV.Object.destroyAll(objects)
}
export const deleteSingleNumber = (numberID) => {
    var todo = AV.Object.createWithoutData('Lucky', numberID);
    return todo.destroy()
}