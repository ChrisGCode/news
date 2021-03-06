OC.L10N.register(
    "news",
    {
    "Request failed, network connection unavailable!" : "请求失败,网络连接不可用!",
    "Request unauthorized. Are you logged in?" : "请求未通过认证.你还要登录吗?",
    "Request forbidden. Are you an admin?" : "请求被拒绝.你是系统管理员吗?",
    "Token expired or app not enabled! Reload the page!" : "令牌过期或者应用没有启用!重新装载页面!",
    "Internal server error! Please check your data/nextcloud.log file for additional information!" : "内部服务器错误! 请检查你的数据 /nextcloud.log 文件获取其它详细信息!",
    "Request failed, Nextcloud is in currently in maintenance mode!" : "请求失败, Nextcloud 在维护模式!",
    "Feed contains invalid XML" : "Feed 包含非法 XML",
    "Feed not found: Either the website does not provide a feed or blocks access. To rule out blocking, try to download the feed on your server's command line using curl: curl " : "Feed 未找到：可能是网站未提供 feed 或阻止访问。请解除阻止，尝试在你服务器的命令行上使用 curl 下载 feed：curl",
    "Detected feed format is not supported" : "不支持检测到的 feed 格式",
    "Website not found" : "未找到网站",
    "More redirects than allowed, aborting" : "重定向过多，退出",
    "Bigger than maximum allowed size" : "超过了最大允许长度",
    "Request timed out" : "请求超时",
    "Required credentials for feed were either missing or incorrect" : "Feed的必需凭据丢失或不正确",
    "Forbidden to access feed" : "禁止访问信息",
    "Certificate error: A problem occurred somewhere in the SSL/TLS handshake. Could be certificates (file formats, paths, permissions), passwords, and others." : "证书错误：SSL/TLS 握手的时候在某地方出现问题。请检查 (文件格式，路径，权限) 密码及其它。",
    "Certificate error: The remote server's SSL certificate or SSH md5 fingerprint was deemed not OK." : "证书错误：远程服务器的 SSL 证书或 SSH MD5 指纹被视为不可用。",
    "Certificate error: Problem with the local client certificate." : "证书错误：本地客户端证书有问题。",
    "Certificate error: Couldn't use specified cipher." : "证书错误：无法使用指定的加密方式。",
    "Certificate error: Peer certificate cannot be authenticated with known CA certificates." : "证书错误：对方证书无法被已知 CA 证书认证。",
    "Certificate error: Requested FTP SSL level failed." : "证书错误：请求的 FTP SSL 级别失败。",
    "Certificate error: Initiating the SSL engine failed." : "证书错误：SSL 引擎初始化失败。",
    "Certificate error: Problem with reading the SSL CA cert (path? access rights?)" : "证书错误：读取 SSL CA 证书有问题 (路径？访问权限？)",
    "Certificate error: Issuer check failed" : "证书错误：签发者验证失败",
    "Unknown SSL certificate error!" : "未知的 SSL 证书错误！",
    "Can not add feed: Exists already" : "无法增加订阅：已经存在",
    "Articles without feed" : "无法订阅的文章",
    "Can not add folder: Exists already" : "无法增加文件夹：文件夹已存在",
    "News" : "新闻",
    "Use system cron for updates" : "使用系统计划任务执行更新",
    "Disable this if you run a custom updater such as the Python updater included in the app" : "如果你运行了诸如应用自带的 Python 更新器，请禁用此项。",
    "Purge interval" : "清理间隔",
    "Minimum amount of seconds after deleted feeds and folders are removed from the database; values below 60 seconds are ignored" : "从数据库中移除的Feed和文件夹后的最小秒数; 低于60秒的值将被忽略",
    "Maximum read count per feed" : "每个 feed 的最大读取次数",
    "Defines the maximum amount of articles that can be read per feed which won't be deleted by the cleanup job; if old articles reappear after being read, increase this value; negative values such as -1 will turn this feature off" : "定义每个Feed可以读取的文章的最大数量，不会被清理作业删除; 如果旧文章阅读后重新出现，请增加此值; 负值（如-1）会关闭此功能",
    "Maximum redirects" : "最大重定向次数",
    "How many redirects the feed fetcher should follow" : "Feed 获取器最多跟随多少次重定向",
    "Maximum feed page size" : "最大 feed 页面大小",
    "Maximum feed size in bytes. If the RSS/Atom page is bigger than this value, the update will be aborted" : "按字节计算的最大 feed 大小。如果 RSS/Atom 页面比这个值大，更新将被中止。",
    "Feed fetcher timeout" : "Feed 获取器超时",
    "Maximum number of seconds to wait for an RSS or Atom feed to load; if it takes longer the update will be aborted" : "最长的等待 RSS 或 Atom feed 加载的秒数；如果比这个时间更长更新将会中止。",
    "Explore Service URL" : "资源管理服务URL",
    "If given, this service's URL will be queried for displaying the feeds in the explore feed section. To fall back to the built in explore service, leave this input empty" : "如果给出，则会在查询Feed部分中查询此服务的URL以显示Feed。 要回到内置的探索服务，请将此输入留空",
    "For more information check the wiki" : "查看 wiki 了解更多内容",
    "Saved" : "已保存",
    "Download" : "下载",
    "Close" : "关闭",
    "filter" : "过滤器",
    "Language" : "语言",
    "Subscribe" : "订阅",
    "Got more awesome feeds? Share them with us!" : "有更好的 feeds？分享给我们！",
    "No articles available" : "没有文章可用",
    "No unread articles available" : "没有未读的文章可用",
    "Open website" : "打开网站",
    "Star article" : "文章加星",
    "Unstar article" : "取消文章加星",
    "Keep article unread" : "保持文章未读",
    "Remove keep article unread" : "取消保持文章未读",
    "by" : "发布者:",
    "from" : "来源",
    "Play audio" : "播放音频",
    "Download video" : "下载视频",
    "Download audio" : "下载音频",
    "Keyboard shortcut" : "键盘快捷键",
    "Description" : "描述",
    "right" : "右",
    "Jump to next article" : "跳到下一个文章",
    "left" : "左",
    "Jump to previous article" : "跳到上一个文章",
    "Toggle star article" : "切换文章加星状态",
    "Star article and jump to next one" : "文章加星并跳到下一个",
    "Toggle keep current article unread" : "切换保持文章未读状态设置",
    "Open article in new tab" : "在新标签页中打开文章",
    "Toggle expand article in compact view" : " 在紧凑视图中展开文章",
    "Refresh" : "刷新",
    "Load next feed" : "加载下一个 馮哦哦的",
    "Load previous feed" : "加载上一个 馮哦哦的",
    "Load next folder" : "装载下一目录",
    "Load previous folder" : "装载前一目录",
    "Scroll to active navigation entry" : "滚动来激活浏览项目",
    "Focus search field" : "聚焦搜索域",
    "Mark current article's feed/folder read" : "标记当前文章/文件夹为已读",
    "Ajax or webcron mode detected! Your feeds will not be updated!" : "检测到 Ajax 或 webcron 模式！你的 feeds 将无法被更新！",
    "How to set up the operating system cron" : "如何设置操作系统 cron",
    "Install and set up a faster parallel updater that uses the News app's update API" : "安装并设置一个更快速的更新程序，它使用新闻应用程序更新API",
    "Non UTF-8 charset for MySQL/MariaDB database detected!" : "检测到 MySQL / MariaDB 数据库的非 UTF-8 字符集！",
    "Learn how to convert your database to utf8mb4 (make a backup beforehand)" : "了解如何将数据库转换成 utf8mb4（操作前请先备份）",
    "Web address" : "网络地址",
    "Feed exists already!" : "Feed已存在！",
    "Folder" : "文件夹",
    "No folder" : "无文件夹",
    "New folder" : "新建文件夹",
    "Folder name" : "文件夹名称",
    "Go back" : "后退",
    "Folder exists already!" : "文件夹已经存在!",
    "Advanced settings" : "高级选项",
    "Credentials" : "凭证",
    "HTTP Basic Auth credentials must be stored unencrypted! Everyone with access to the server or database will be able to access them!" : "HTTP Basic Auth 认证只能被未加密保存！所有可以访问这个服务器的数据库的人都可以访问他们！",
    "Username" : "用户名",
    "Password" : "密码",
    "New Folder" : "新建文件夹",
    "Create" : "创建",
    "Explore" : "探索",
    "Update failed more than 50 times" : "更新失败超过 50 次",
    "Deleted feed" : "删除订阅",
    "Undo delete feed" : "取消删除订阅",
    "Rename" : "重命名",
    "Menu" : "菜单",
    "Mark read" : "设置为已读",
    "Unpin from top" : "取消置顶",
    "Pin to top" : "固定在顶端",
    "Newest first" : "按时间顺序",
    "Oldest first" : "按时间倒序",
    "Default order" : "删除订阅",
    "Enable full text" : "启用全文模式",
    "Disable full text" : "禁用全文模式",
    "Unread updated" : "未读更新",
    "Ignore updated" : "忽略更新",
    "Open feed URL" : "打开源网址",
    "Delete" : "删除",
    "Dismiss" : "忽略",
    "Collapse" : "折叠",
    "Deleted folder" : "删除文件夹",
    "Undo delete folder" : "取消删除文件夹",
    "Starred" : "已加星标",
    "Unread articles" : "未读文章",
    "All articles" : "全部文章",
    "Settings" : "设置",
    "Disable mark read through scrolling" : "禁用在滚动时标记文章为已读",
    "Compact view" : "紧凑视图",
    "Expand articles on key navigation" : "按键浏览时展开文章",
    "Show all articles" : "显示全部文章",
    "Reverse ordering (oldest on top)" : "逆序(最老文章先显示)",
    "Subscriptions (OPML)" : "订阅 (OPML)",
    "Import" : "导入",
    "Export" : "导出",
    "Error when importing: File does not contain valid OPML" : "导入时出错：文件不包含有效的OPML",
    "Error when importing: OPML is does neither contain feeds nor folders" : "导入错误：OPML 未包含 feed 或文件夹",
    "Unread/Starred Articles" : "未读/已加星标文章",
    "Error when importing: file does not contain valid JSON" : "导入出错：文件包含非法的JSON数据",
    "Help" : "帮助",
    "Keyboard shortcuts" : "快捷键",
    "Documentation" : "文档",
    "Report a bug" : "报告  "
},
"nplurals=1; plural=0;");
