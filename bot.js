require("dotenv").config();

console.log("🚀 Polymarket Arb Bot booting...");
console.log("Mode:", process.env.MODE || "DRY_RUN");

setInterval(() => {
  console.log("⏱ Bot heartbeat:", new Date().toISOString());
}, 15000);
