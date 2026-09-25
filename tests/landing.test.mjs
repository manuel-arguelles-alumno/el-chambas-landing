import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const read = (file) => readFileSync(join(root, file), "utf8");

test("landing contains the primary page and referenced assets", () => {
  const html = read("index.html");
  assert.match(html, /<html lang="es">/);
  assert.match(html, /assets\/hero-route\.png/);
  assert.match(html, /assets\/el-chambas-promo\.mp4/);
  assert.ok(existsSync(join(root, "assets/hero-route.png")));
  assert.ok(existsSync(join(root, "assets/el-chambas-promo.mp4")));
});

test("visual assets are not empty placeholders", () => {
  assert.ok(statSync(join(root, "assets/hero-route.png")).size > 100_000);
  assert.ok(statSync(join(root, "assets/el-chambas-promo.mp4")).size > 1_000_000);
});

test("front-end sources parse and include the intended interaction", () => {
  execFileSync(process.execPath, ["--check", join(root, "script.js")], { stdio: "pipe" });
  assert.match(read("styles.css"), /@media\(max-width:820px\)/);
  assert.match(read("script.js"), /IntersectionObserver/);
});

test("promotional video is exactly 60 seconds when ffprobe is available", () => {
  try {
    const duration = execFileSync("ffprobe", [
      "-v", "error", "-show_entries", "format=duration",
      "-of", "default=noprint_wrappers=1:nokey=1",
      join(root, "assets/el-chambas-promo.mp4")
    ], { encoding: "utf8" }).trim();
    assert.equal(Number(duration).toFixed(3), "60.000");
  } catch (error) {
    if (error.code === "ENOENT") assert.ok(true, "ffprobe is optional outside CI");
    else throw error;
  }
});
