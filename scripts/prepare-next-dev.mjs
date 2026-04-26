import { rmSync } from "node:fs";
import { join } from "node:path";

const traceFile = join(process.cwd(), ".next", "trace");

try {
  rmSync(traceFile, {
    force: true,
    maxRetries: 5,
    retryDelay: 300,
  });
} catch (error) {
  if (error?.code === "EPERM" || error?.code === "EBUSY") {
    console.error(
      [
        "Unable to prepare Next.js dev because Windows is locking .next/trace.",
        "Stop the existing dev server first, then run npm run dev again.",
        "You can find it with: netstat -ano | findstr :3000",
        "Then stop that PID with: taskkill /PID <pid> /F",
      ].join("\n"),
    );
    process.exit(1);
  }

  throw error;
}
