
//所有程序中用到的有关此模块的actionID 都引用于此 ****必须全局唯一*****

//管理员主页

export const READ_ADMIN_USERINFO = "READ_ADMIN_USERINFO";

export const GET_ADMIN_TERMWITHGRADEYEARSTRUCT = "GET_ADMIN_TERMWITHGRADEYEARSTRUCT";
//获取学校账户统计
export const GET_ADMIN_SCHOOLACCOUNTSTATISTIC = "GET_ADMIN_SCHOOLACCOUNTSTATISTIC";
// 获取全部管理员账户 增删改查
export const READ_ADMIN_MANAGERCOUNT = "READ_ADMIN_MANAGERCOUNT";
export const CREATE_ADMIN_MANAGERCOUNT = "CREATE_ADMIN_MANAGERCOUNT";
export const UPDATE_ADMIN_MANAGERCOUNT = "UPDATE_ADMIN_MANAGERCOUNT";
export const DELETE_ADMIN_MANAGERCOUNT = "DELETE_ADMIN_MANAGERCOUNT";
// 获取全部学生账户 获取年级列表 班级列表 编辑
export const READ_ADMIN_STUDENTACCOUNT = "READ_ADMIN_STUDENTACCOUNT";
export const CREATE_ADMIN_STUDENTACCOUNT = "CREATE_ADMIN_STUDENTACCOUNT";
export const UPDATE_ADMIN_STUDENTACCOUNT = "UPDATE_ADMIN_STUDENTACCOUNT";
export const DELETE_ADMIN_STUDENTACCOUNT = "DELETE_ADMIN_STUDENTACCOUNT";
// 获取所有成绩条目 增删改查 上传成绩
export const READ_ADMIN_EXAMINFO = "READ_ADMIN_EXAMINFO";
export const CREATE_ADMIN_EXAMINFO = "CREATE_ADMIN_EXAMINFO";
export const UPDATE_ADMIN_EXAMINFO = "UPDATE_ADMIN_EXAMINFO";
export const DELETE_ADMIN_EXAMINFO = "DELETE_ADMIN_EXAMINFO";
export const UPLOAD_ADMIN_EXAMSCORE = "UPLOAD_ADMIN_EXAMSCORE";

// 获取月度主题 保存月度主题
export const GET_ADMIN_MONTHTHEME = "GET_ADMIN_MONTHTHEME";
export const SET_ADMIN_MONTHTHEME = "SET_ADMIN_MONTHTHEME";

export const READ_ADMIN_EVENTHOLDER = "READ_ADMIN_EVENTHOLDER";
export const CREATE_ADMIN_EVENTHOLDER = "CREATE_ADMIN_EVENTHOLDER";
export const UPDATE_ADMIN_EVENTHOLDER = "UPDATE_ADMIN_EVENTHOLDER";
export const DELETE_ADMIN_EVENTHOLDER = "DELETE_ADMIN_EVENTHOLDER";
// 获取学生描述关键词类别：“德智体美劳其他”
export const GET_ADMIN_IMPRESSIONTYPES = "GET_ADMIN_IMPRESSIONTYPES";
// 学生描述关键词增删改查
export const READ_ADMIN_IMPRESSIONWORD = "READ_ADMIN_IMPRESSIONWORD";
export const CREATE_ADMIN_IMPRESSIONWORD = "CREATE_ADMIN_IMPRESSIONWORD";
export const UPDATE_ADMIN_IMPRESSIONWORD = "UPDATE_ADMIN_IMPRESSIONWORD";
export const DELETE_ADMIN_IMPRESSIONWORD = "DELETE_ADMIN_IMPRESSIONWORD";
// 获取积分条目 设置积分条目
export const GET_ADMIN_INTEGRALSCOREITEM = "GET_ADMIN_INTEGRALSCOREITEM";
export const SET_ADMIN_INTEGRALSCOREITEM = "SET_ADMIN_INTEGRALSCOREITEM";
// 综合素质活动库统计 学生活跃度统计
export const GET_ADMIN_ACTIVITYLIBSTATISTICS = "GET_ADMIN_ACTIVITYLIBSTATISTICS";
export const GET_ADMIN_STUDENTACTIVITYSTATISTICS = "GET_ADMIN_STUDENTACTIVITYSTATISTICS";
// 获取学生档案列表 新增学生档案 下载学生档案 获取班级年级 学期列表
export const READ_ADMIN_STUDENTRECORD = "READ_ADMIN_STUDENTRECORD";
export const CREATE_ADMIN_STUDENTRECORD = "CREATE_ADMIN_STUDENTRECORD";
export const DOWNLOAD_ADMIN_STUDENTRECORD = "DOWNLOAD_ADMIN_STUDENTRECORD";

// 获取举报条目 删除条目 标记条目 核准条目 二期
export const READ_ADMIN_REPORTITEM = "READ_ADMIN_REPORTITEM";
export const MARK_ADMIN_REPORTITEM = "MARK_ADMIN_REPORTITEM";
export const ACCEPT_ADMIN_REPORTITEM = "ACCEPT_ADMIN_REPORTITEM";
export const DELETE_ADMIN_REPORTITEM = "DELETE_ADMIN_REPORTITEM";
//校园寻星--获取评选条目
export const GET_ADMIN_STAROPTIONS = "GET_ADMIN_STAROPTIONS"