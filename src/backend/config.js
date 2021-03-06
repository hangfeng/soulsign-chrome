let config = {
	version: 10000,
	notify_at: 0, // 通知时间
	upgrade_at: 0, // 检查更新时间
	notify_freq: 600, // 掉线通知频率(秒),默认10分钟
	retry_freq: 600, // 重试间隔时间(秒),默认10分钟
	loop_freq: 5, // 任务循环间隔时间(秒)
	begin_at: 28800, // 每天几点开始签到,默认8点
	upgrade: true, // 是否自动更新
	upgrade_freq: 86400, // 检查更新间隔时间(秒)
	timeout: 60, // 任务超时时间
	cross: true,
	allow_cross: {},
	cross_header: '',
	donate: false, // 开启捐赠, 跳转到京东返利链接
};

export default config;