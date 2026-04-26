import { rmSync } from "node:fs";
import { join } from "node:path";

const nextDir = join(process.cwd(), ".next");
const retryableCodes = new Set(["EPERM", "EBUSY", "ENOTEMPTY"]);

const sleep = (milliseconds) => {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, milliseconds);
};

let cleaned = false;

for (let attempt = 1; attempt <= 8 && !cleaned; attempt += 1) {
  try {
    rmSync(nextDir, {
      force: true,
      maxRetries: 5,
      recursive: true,
      retryDelay: 300,
    });
    cleaned = true;
  } catch (error) {
    if (retryableCodes.has(error?.code) && attempt < 8) {
      sleep(400);
      continue;
    }

    if (retryableCodes.has(error?.code)) {
      console.error(
        [
          "Unable to clean .next before build because Windows is locking a Next.js file.",
          "Stop any running dev server first, then run npm run build again.",
          "You can find it with: netstat -ano | findstr :3000",
          "Then stop that PID with: taskkill /PID <pid> /F",
        ].join("\n"),
      );
      process.exit(1);
    }

    throw error;
  }
}
