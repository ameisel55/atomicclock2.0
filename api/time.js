export default function handler(req, res) {
  const now = new Date();
  res.status(200).json({
    timestamp: now.getTime(),
    datetime: now.toISOString(),
    status: "LIVE",
    timezone: "America/New_York"
  });
}
