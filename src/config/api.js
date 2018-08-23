let host=`https://www.lajixs.com`
// 用户中心
const login = `${host}/api/person-login`
const login_out = `${host}/api/person-ClearUserInfo`
const user_free = `${host}/api/person - RecordsConsumption`
const check_login = `${host}/api/person-checkLoginState`
const check_nike = `${host}/api/person-checkNickName/`
const check_phone = `${host}/api/person-checkNickPhone/`
const find_pwd = `${host}/api/person-pwdRetrieval`
const refresh_user = `${host}/api/person-refreshUserinfo`
const get_user_info = `${host}/api/person-info`
const register_user = `${host}/api/person-regInfo`
const remember_login = `${host}/api/person-remembermeLogin`
const update_user_info = `${host}/api/person-updateInfo`
const update_pwd = `${host}/api/person-updatepwd`
const get_fans_follow_count = `${host}/api/fans-followCount/`
const get_code = `${host}/api/verification/getCode`
const check_code = `${host}/api/verification/person-checkedCode`
const register_code = `${host}/api/verification/sys-getShortMessage`
//小程序登录api
const wxCode = `${host}/api/person-LaJiXiaoShuoWAPWeChatLogin`
//图书获取
const homePageRecommended = `${host}/api/hot/homePageRecommended`
const recommend_book = `${host}/api/book-xiaobiantuijian`
const new_book = `${host}/api/hot/getbooklistList/`
const book_rank = `${host}/api/ranking-book`
const similar_recommend = `${host}/api/book-similarrecommendation`
const is_subscribe = `${host}/api/userRmemberChose`
const book_Info = `${host}/api/book-bookInfo`
//用户消息
const del_message = `${host}/api/person-delmessage`
const get_message = `${host}/api/person-message`
const get_message_count = `${host}/api/person-messageCount`
const send_message = `${host}/api/person-sendmessage`
const update_message_status = `${host}/api/person-updatemessage`
//用户评论
const get_comment = `${host}/api/comm-getcomminfo`
const reply_comment = `${host}/api/comm-replyInfo`
const give_thumbs = `${host}/api/comm-GiveThumbs`
const hot_comment = `${host}/api/comm-HotCommentInfo`
//书籍控制器
const get_volume = `${host}/api/books-getvolume`
const get_volumeid_chapter = `${host}/api/books-getVolumeById`
const add_book_rack = `${host}/api/bookshelf-adduserbookshelf`
const check_book_rack = `${host}/api/bookshelf-bookshelfIsSave/`
const del_book_rack = `${host}/api/bookshelf-deluserbookshelf`
const get_book_rack_recommend = `${host}/api/bookshelf-recommendPosition`
const chapter_subscribe = `${host}/api/book-subscription`
const book_freetime = `${host}/api/sys-freetimelimit`
//分类控制
const book_class = `${host}/api/ranking-classification`
const best_seller = `${host}/api/stacks-changxiaobang`
const hot_lable = ` ${host}/api/stacks-hotLable`
const search_book = `${host}/api/stacks-search`
const filter_book = `${host}/api/stacks-bookFiltering`
const get_book_list = `${host}/api/system/getBooklist`
module.exports = {
  login,
  get_user_info,
  login_out,
  user_free,
  check_login,
  check_nike,
  check_phone,
  find_pwd,
  refresh_user,
  register_user,
  remember_login,
  update_user_info,
  update_pwd,
  get_fans_follow_count,
  get_code,
  check_code,
  register_code,
  recommend_book,
  new_book,
  book_rank,
  similar_recommend,
  is_subscribe,
  send_message,
  del_message,
  get_message,
  get_message_count,
  update_message_status,
  get_comment,
  reply_comment,
  give_thumbs,
  hot_comment,
  get_volume,
  get_volumeid_chapter,
  add_book_rack,
  check_book_rack,
  del_book_rack,
  get_book_rack_recommend,
  chapter_subscribe,
  book_class,
  best_seller,
  hot_lable,
  search_book,
  filter_book,
  get_book_list,
  homePageRecommended,
  book_freetime,
  book_Info,
  wxCode
}