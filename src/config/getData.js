import * as api from '../config/api'
import {get,post} from '../config/request'

const getHomePageBooks = get({url:api.homePageRecommended},true)

const getBookClass=get({url:api.get_label},true)

const getFreeBook=get({url:api.book_freetime},true)
const login = (userName, pwd, terminal=5) => {
    return post({
        url:api.login,
        params:{
            userName:userName,
            userPassword:pwd,
            terminal: terminal
        }
    })
}
const loginOut=()=>{
    return post({
     url: api.login_out
   })
}
const getNewBooks=(page,size)=>{
    return get({url:`${api.new_book}${page}/${size}`},true)
}
const getBookInfo = bookid=>{
    return post({
        url: api.book_Info,
        params:{
            bookid
        }
    },false)
}
const getRecommendBook=(page=1,size=10)=>{
    return post({
        url:api.recommend_book,
        params:{   
            page:page,
            size:size
        }
   })
}
const getHotComments=bookid=>{
    return post({
        url: api.hot_comment,
        params:{
            bookid
        }
    },false)
}
const getReplyComment = (commentId,startPage)=>{
    return post({
        url:api.reply_comment,
        params:{
            commentid:commentId,
            startPage:startPage
        }
    })
}
const getNewComments = (bookId,startPage, type = 1) => {
    return post({
        url: api.get_comment,
        params:{
            id:bookId,
            type:type,
            startPage:startPage
        }
    })
}
const updateLike=commentId=>{
    return post({
        url: api.give_thumbs,
        params:{
            commentId
        }
    },false)
}
const addComment = (bookId, commentContext, userName, bookName)=>{
    return post({
        url:api.add_comment,
        params:{
            bookId:bookId,
            commentContext:commentContext,
            userName:userName,
            bookName:bookName
        }
    },false)
}
const addReply = (bookid, replyCommentsContent, userName, bookName, commentId, puserId)=>{
    return post({
        url:api.add_reply,
        params:{
            bookid:bookid,
            replyCommentsContent:replyCommentsContent,
            userName:userName,
            bookName:bookName,
            commentId:commentId,
            puserId: puserId
        }
    })
}
const getAppid = (code) => {
    return get({
        url:api.wxCode,
        params:{
            code:code,
        }
    })
}
const wxLogin = weChatServerJson=>{
    return post({
        url:api.wxLogin,
        params:{
            weChatServerJson: weChatServerJson
        }
    })
}
const filterBook = (bookLabid, startPage, order = 0, bookCheckStatus = 0, updateTime = 0, bookWorldCount = 0) => {
    return post({
        url:api.filter_book,
        params:{
            bookLabid: bookLabid,
            order:order,
            startPage:startPage,
            bookCheckStatus:bookCheckStatus,
            updateTime:updateTime,
            bookWorldCount:bookWorldCount
        }
    })
}
const getSearchHotWords=get({url:api.hotWords},true)
const searchBook = (keyWord, startPage=1, isHotWorld=1)=>{
    return post({
        url:api.search_book,
        params:{
            keyWord:keyWord,
            startPage:startPage,
            isHotWorld:isHotWorld
        }
    })
}
const getBookvolumeChapterList=bookId=>{
    return get({url:api.get_volume+bookId})
}
const bookRead=(chapterId,readType=1)=>{
    return post({
        url:api.bookRead,
        params:{
            chapterId: chapterId,
            readType: readType
        }
    })
}
const getVolume=bookId=>{
    return get({
        url:api.get_volume+bookId,
    })
}
const subscribe = (userName, bookId, bookName, bookChapterId, bookChapterName)=>{
    return post({
        url:api.chapter_subscribe,
        params:{
            userName:userName,
            bookId:bookId,
            bookName:bookName,
            bookChapterId:bookChapterId,
            bookChapterName:bookChapterName
        }
    })
}
const bookReword = (bookId, startpage=1) => {
    return post({
        url:api.bookReword,
        params:{
           bookid:bookId,
           startpage: startpage
        }
    })
}
const bookBank = (type,page)=>{
    return post({
        url:api.book_rank,
        params:{
            type:type,
            page:page
        }
    })
}
const SpicyiRewardTicket = (spicyiTicketCount, bookid, bookName, authorId, message)=>{
    return post({
        url:api.SpicyiRewardTicket,
        params:{
            spicyiTicketCount: spicyiTicketCount,
            bookid: bookid,
            bookName: bookName,
            authorId: authorId,
            message: message
        }
    })
}
const RewardGonderTicket = (goldenTicketCount, bookid, bookName, authorId) => {
    return post({
        url:api.RewardGonderTicket,
        params:{
          goldenTicketCount: goldenTicketCount,
          bookid:bookid,
          bookName:bookName,
          authorId:authorId
        }
    },false)
}
const RecommendationTicket = (recommendTicketCount, bookid, bookName, authorId)=>{
    return post({
        url:api.RecommendationTicket,
        params:{
            recommendTicketCount: recommendTicketCount,
            bookid: bookid,
            bookName: bookName,
            authorId: authorId
        }
    },false)
}
const getPersonInfo = puserid=>{
    return post({
        url:api.personInfo,
        params:{
            puserid: puserid
        }
    })
}
const getBookReadHistory = (userid, startpage) => {
    return post({
        url: api.readHistory,
        params:{
            userid:userid,
            startpage:startpage
        }
    })
}
const bookReadHistory=(userid,bookId)=>{
    return post({
        url: api.bookReadHistory,
        params:{
            userid:userid,
            bookId:bookId
        }
    })
}
const addBookReadHistroy = (userName, bookId, bookName, chapterId, chapterName)=>{
    return post({
        url: api.addBookReadHistory,
        params:{
            userName:userName,
            bookId:bookId,
            bookName:bookName,
            chapterId:chapterId,
            chapterName:chapterName
        }
    })
}
const addFans = (followId, followUserName)=>{
    return post({
        url:api.addFans,
        params:{
            followId:followId,
            followUserName:followUserName
        }
    },false)
}
const cancelFans=followId=>{
    return post({
        url:api.cancelFans,
        params:{
            followId:followId
        }
    },false)
}
const FansAndFllowCount = (userid, type) => {
    return get({url:`${api.FansAndFllowCount}${userid}/${type}`},false)
}
const CheckSubscribe = (bookid, type, isSelect)=>{
    return post({
        url:api.is_subscribe,
        params:{
            bookid:bookid,
            type:type,
            isSelect:isSelect
        }
    },false)
}
const addBookRack = (userName, bookId, bookName) => {
    return post({
        url:api.add_book_rack,
        params:{
            userName:userName,
            bookId:bookId,
            bookName: bookName
        }
    },false)
}
const getPersonBookRack = (startpage,userid)=>{
    return post({
        url: api.personBookRack,
        params:{
            startPage:startpage,
            userid:userid
        }
    },false)
}
const delBookRack=id=>{
    return post({
        url:api.del_book_rack,
        params:{
            id:id
        }
    },false)
}
const getPersonComment = (startPage,userid)=>{
   return post({
       url:api.personComment,
       params:{
           startPage: startPage,
           userid:userid
       }
   })
}
const getServerTime=get({url:api.getServerTime})
const getAuthorBook = authorId=>{
    return post({
        url:api.authorAllBook,
        params:{
            authorId:authorId
        }
    },false)
}
const getUserFllow = (puserid, startpage)=>{
    return get({
        url:api.getUserFllow,
        params:{
            puserid:puserid,
            startpage:startpage
        }
    })
}
const getUserFans = (puserid, startpage)=>{
    return get({
        url:api.getUserFans,
        params:{
            puserid:puserid,
            startpage:startpage
        }
    })
}
const userSignin=()=>{
    return post({
        url:api.userSignin
    },false)
}
const userSiginState=()=>{
    return get({
        url: api.userSiginState
    },false)
}
const getUserReplyInfo = (userid, startPage)=>{
    return post({
        url:api.userReplyInfo,
        params:{
            userid:userid,
            startPage:startPage
        }
    })
}
const getSystemMsg = (startpage=1)=>{
    return post({
        url:api.systemMsg,
        params:{
            startpage:startpage
        }
    })
}
const getFansWeek=(bookId,startpage)=>{
    return get({
        url: `${api.FansWeek}${bookId}/${startpage}`
    })
}
const getFansTotal=(bookId, startpage)=>{
    return get({
        url: `${api.FansTotal}${bookId}/${startpage}`
    })
}
const delBookReadHistory=(id)=>{
    return post({
        url:api.delBookReadHistory,
        params:{
            id:id
        }
    },false)
}
 const updateUserInfo=()=>{
    post({
        url:api.get_user_info
    },false).then(data=>{
        wx.setStorageSync("userInfo", data)        
    })
}
const getRechargeRecord = (userid, startpage)=>{
    return post({
        url: api.rechargeRecord,
        params:{
            userid: userid,
            startpage: startpage
        }
    })
}
const getSubscriptionRecord = (userid, startpage) => {
  return post({
    url: api.subscriptionRecord,
    params: {
      userid: userid,
      startpage: startpage
    }
  })
}
const getUserGoldenTicketRecord = (userid, startpage)=>{
    return post({
        url:api.userGoldenTicketRecord,
        params:{
            userid: userid,
            startpage: startpage
        }
    })
}
const getSpicyirewardticketlogByUserId=(userid,startpage)=>{
    return post({
        url: api.spicyirewardticketlogByUserId,
        params:{
            userid:userid,
            startpage:startpage
        }
    })
}
const getUserRecommendTicketRecord=(userid,startpage)=>{
    return post({
        url: api.userRecommendTicketRecord,
        params:{
            userid:userid,
            startpage:startpage
        }
    })
}
const isBookRack=bookId=>{
    return get({url:api.check_book_rack+bookId},false)
}
const getCommentCount=bookId=>{
    return get({
      url: api.commentCount+bookId,
    })
}
const delComment=(id,type=0)=>{
    return post({
        url:api.delComment,
        params:{
            id:id,
            type:type
        }
    })
}
const getTask=()=>{
    return post({
        url: api.personTask
    })
}
const updateTask = (userId,id,param) => {
    return post({
         url: api.updateUserTask,
         params:{
             userId:userId,
             id:id,
             param
         }
    })
}
const share = ()=>{
   return get({
        url: api.shareApi
    },false)
}
const wechatPay = (openId,nickName,howmuch, channelId = 'LG20180608000', rechargeChannelId = 'LG20180608000') => {
        return post({
            url:api.wechatPay,
            params:{
                openId: openId,
                nickName:nickName,
                howmuch:howmuch,
                channelId:channelId,
                rechargeChannelId:rechargeChannelId
            }
        },true)
}
const firstPay=(money,userName)=>{
    return get({url:api.FirstPay+money+'/'+userName})
}
const checkPhone=phone=>{
    return get({url:api.checkPhone+phone},false)
}
const getVerification=(userMob,type="bangDing")=>{
    return post({
        url:api.getVerification,
        params:{
            userMob:userMob,
            type:type
        }
    },true)
}
const checkCode = (checkCode, phoneId)=>{
    return post({
        url:api.checkCode,
        params:{
            checkCode:checkCode,
            phoneId:phoneId
        }
    })
}
const bindPhone = userPhone => {
    return post({
        url:api.bindPhone,
        params:{
            userPhone: userPhone
        }
    })
}
const recommendPosition = (version=2.0)=>{
    return post({
        url:api.get_book_rack_recommend,
        params:{
           version: version
        }
    })
}
const getAuthorInfo=(bookId)=>{
    return post({
        url: api.getAuthorInfo,
        params:{
            bookId:bookId
        }
    })
}
module.exports = {
    login,
    loginOut,
    getHomePageBooks,
    getBookClass,
    getFreeBook,
    getNewBooks,
    getBookInfo,
    getHotComments,
    updateLike,
    addComment,
    addReply,
    wxLogin,
    getRecommendBook,
    getNewComments,
    getReplyComment,
    filterBook,
    getSearchHotWords,
    searchBook,
    getBookvolumeChapterList,
    bookRead,
    getVolume,
    subscribe,
    bookReword,
    bookBank,
    SpicyiRewardTicket,
    RewardGonderTicket,
    RecommendationTicket,
    getPersonInfo,
    getAppid,
    addFans,
    cancelFans,
    getServerTime,
    CheckSubscribe,
    addBookRack,
    getBookReadHistory,
    bookReadHistory,
    addBookReadHistroy,
    FansAndFllowCount,
    getPersonBookRack,
    getPersonComment,
    getAuthorBook,
    getUserFllow,
    getUserFans,
    delBookRack,
    userSignin,
    userSiginState,
    getUserReplyInfo,
    getSystemMsg,
    getFansWeek,
    getFansTotal,
    delBookReadHistory,
    updateUserInfo,
    getRechargeRecord,
    getSubscriptionRecord,
    getUserGoldenTicketRecord,
    getSpicyirewardticketlogByUserId,
    getUserRecommendTicketRecord,
    isBookRack,
    delComment,
    getCommentCount,
    getTask,
    updateTask,
    share,
    wechatPay,
    firstPay,
    checkPhone,
    getVerification,
    checkCode,
    bindPhone,
    recommendPosition,
    getAuthorInfo
}