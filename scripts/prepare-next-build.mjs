import { rmSync } from "node:fs";
import { join } from "node:path";

const nextDir = join(process.cwd(), ".next");

try {
  rmSync(nextDir, {
    force: true,
    maxRetries: 5,
    recursive: true,
    retryDelay: 300,
  });
} catch (error) {
  if (error?.code === "EPERM" || error?.code === "EBUSY") {
    console.error(
      [
        "Unable to clean .next before build because Windows is locking a Next.js file.",
        "Stop any running dev server first, then run npm run build again.",
        "Usually this means closing the terminal running npm run dev or killing the node process using port 3000.",
      ].join("\n"),
    );
    process.exit(1);
  }

  throw error;
}
