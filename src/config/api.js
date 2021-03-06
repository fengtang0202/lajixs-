let host=`https://www.lajixs.com`
// let host = `http://192.168.0.136:8081`
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
const update_pwd = `${host}/api/person-updatepwd`
const get_fans_follow_count = `${host}/api/fans-followCount/`
const get_code = `${host}/api/verification/getCode`
const check_code = `${host}/api/verification/person-checkedCode`
const register_code = `${host}/api/verification/sys-getShortMessage`
//小程序登录api
const wxCode = `${host}/api/getWeChartLoginInfo`
const wxLogin = `${host}/api/person-laJiXiaoShuoSmallProgramWeChatLogin`
//用户打赏
const RecommendationTicket = `${host}/api/user-RecommendationTicket`
const RewardGonderTicket = `${host}/api/user-RewardGonderTicket`
const SpicyiRewardTicket = `${host}/api/user-SpicyiRewardTicket`
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
const add_comment = `${host}/api/add-getcomminfo`
const add_reply = `${host}/api/add-replyInfo`
const commentCount = `${host}/api/getBookCommentTotalCount/`
const delComment = `${host}/api/comm-delcomminfo`
//用户粉丝
const addFans = `${host}/api/fans-addFans`
const FansAndFllowCount = `${host}/api/fans-followCount/`
const cancelFans = `${host}/api/fans-CancelFollow`
const getUserFllow = `${host}/api/fans-userFollow`
const getUserFans = `${host}/api/fans-userFans`
//粉丝榜
const FansWeek = `${host}/api/fans-bookFansWeek/`
const FansTotal = `${host}/api/fans-bookFansTotal/`
//用户阅读记录
const readHistory = `${host}/api/person-UserBookReadRecord/`
const bookReadHistory = `${host}/api/person-UserBookReadRecordByUserIDAndBookId`
const addBookReadHistory = `${host}/api/person-addBookReadRecord`
const delBookReadHistory = `${host}/api/person-delBookReadRecord`
//书籍控制器
const get_volume = `${host}/api/books-volumeChapterList/`
const get_volumeid_chapter = `${host}/api/books-getVolumeById`
const add_book_rack = `${host}/api/bookshelf-adduserbookshelf`
const check_book_rack = `${host}/api/bookshelf-bookshelfIsSave/`
const del_book_rack = `${host}/api/bookshelf-deluserbookshelf`
const get_book_rack_recommend = `${host}/api/bookshelf-recommendPosition`
const chapter_subscribe = `${host}/api/book-subscription`
const book_freetime = `${host}/api/sys-freetimelimit`
//获取服务器时间
const getServerTime = `${host}/api/sys-getNetWorkDateTime`
//分类控制
const book_class = `${host}/api/ranking-classification`
const best_seller = `${host}/api/stacks-changxiaobang`
const hot_lable = ` ${host}/api/stacks-hotLable`
const search_book = `${host}/api/stacks-search`
const filter_book = `${host}/api/stacks-bookFiltering`
const get_book_list = `${host}/api/system/getBooklist`
const get_label = `${host}/api/stacks-hotLableVersionTow`
//搜索
const hotWords = `${host}/api/sys-hotwords`
//书籍阅读
const bookRead = `${host}/api/book-read`
//打赏区
const bookReword = `${host}/api/getSpicyirewardticketlogByBookId`
//其他用户信息
const personInfo = `${host}/api/person-SimplifyUserInfo`
const personBookRack = `${host}/api/bookshelf-getuserbookshelf`
const personComment = `${host}/api/comm-commInfoByUserId`
const authorAllBook = `${host}/api/book-AuthorAllBookInfo`
const userSignin = `${host}/api/user-signin`
const userSiginState = `${host}/api/user-signinstate`
const userReplyInfo = `${host}/api/comm-coverReplyInfo`
const systemMsg = `${host}/api/sys-getsystemmsg`
//用户交易记录
const rechargeRecord = `${host}/api/user-RechargeRecord`
const subscriptionRecord = `${host}/api/userSubscriptionRecord`
const userGoldenTicketRecord = `${host}/api/userGoldenTicketRecord`
const spicyirewardticketlogByUserId = `${host}/api/spicyirewardticketlogByUserId`
const userRecommendTicketRecord = `${host}/api/userRecommendTicketRecord`
//个人任务
const personTask = `${host}/api/person-PersonalCenterTask`
const updateUserTask = `${host}/api/updatePersonalCenterTaskInfo`
const shareApi = `${host}/api/SharingOperationRecord`
//微信充值
const wechatPay = `${host}/api/app/wxPaySmallProgramGetInfo`
//首冲送书
const FirstPay = `${host}/api/getUserRechargerecordSum/`
//验证码
const checkPhone = `${host}/api/person-checkNickPhone/`
const getVerification = `${host}/api/verification/sys-getShortMessage`
const checkCode = `${host}/api/verification/person-checkedCode`
const bindPhone = `${host}/api/person-updateInfo`
//获取作者信息
const getAuthorInfo = `${host}/api/getAuthorInfoBySimplify`
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
  add_reply,
  give_thumbs,
  hot_comment,
  add_comment,
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
  wxCode,
  get_label,
  hotWords,
  bookRead,
  bookReword,
  RecommendationTicket,
  RewardGonderTicket,
  SpicyiRewardTicket,
  personInfo,
  wxLogin,
  addFans,
  cancelFans,
  getUserFllow,
  getServerTime,
  readHistory,
  bookReadHistory,
  addBookReadHistory,
  FansAndFllowCount,
  personBookRack,
  personComment,
  authorAllBook,
  getUserFans,
  userSignin,
  userSiginState,
  userReplyInfo,
  systemMsg,
  FansWeek,
  FansTotal,
  delBookReadHistory,
  rechargeRecord,
  subscriptionRecord,
  userGoldenTicketRecord,
  spicyirewardticketlogByUserId,
  userRecommendTicketRecord,
  commentCount,
  delComment,
  personTask,
  updateUserTask,
  shareApi,
  wechatPay,
  FirstPay,
  checkPhone,
  getVerification,
  bindPhone,
  checkCode,
  getAuthorInfo
}