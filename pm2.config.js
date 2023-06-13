// pm2 start pm2.config.js
module.exports = {
  apps: [
    {
      name: 'unpkg',
      script: './server.js', // 启动的服务js文件路径
      cwd: './', // current workspace
      watch: [
        // watch directorys and restart when they change
        // '.next'
      ],
      ignore_watch: [
        // ignore watch
        'node_modules',
        'logs',
        'static'
      ],
      max_memory_restart: '1024M',
      instances: 1, // 为了保证稳定向，开启了2个实例
      node_args: '--harmony',
      env: {
        NODE_ENV: 'production',
        PORT: 8090
      },
      out_file: '/var/log/unpkg/info.log', // 日志输出目录
      error_file: '/var/log/unpkg/error.log', // 报错日志输出
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm Z' // 日志时间格式
    }
  ]
};
