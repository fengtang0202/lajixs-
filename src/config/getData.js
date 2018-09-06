import * as api from '../config/api'
import {get,post} from '../config/request'

const getHomePageBooks = get({url:api.homePageRecommended},true)

const getBookClass=get({url:api.get_label},true)

const getFreeBook=get({url:api.book_freetime},true)

const getNewBooks=(page,size)=>{
    return get({url:`${api.new_book}${page}/${size}`},true)
}
const getBookInfo = bookid=>{
    return post({
        url: api.book_Info,
        params:{
            bookid
        }
    })
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
    })
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
    })
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
    })
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
const wxLogin = (code, terminal=1, userCode = 'LG20180608000') => {
    return post({
        url:api.wxCode,
        params:{
            code:code,
            userCode:userCode,
            terminal: terminal
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
const SpicyiRewardTicket = (spicyiTicketCount, bookid, bookName, authorId)=>{
    return post({
        url:api.SpicyiRewardTicket,
        params:{
            spicyiTicketCount: spicyiTicketCount,
            bookid: bookid,
            bookName: bookName,
            authorId: authorId
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
    })
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
    })
}
module.exports = {
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
    RecommendationTicket
}