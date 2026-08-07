// Vercel Serverless Function：定时任务每5分钟访问一次，保持应用活跃，避免冷启动
export default function handler(req, res) {
  res.status(200).json({
    status: 'ok',
    message: 'Yumi shop keepalive ping',
    timestamp: new Date().toISOString()
  });
}
