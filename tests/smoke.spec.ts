import { test, expect } from "@playwright/test";

test("home page renders without console errors", async ({ page, baseURL }) => {
  const errors: string[] = [];
  page.on("pageerror", (err) => errors.push(err.message));
  page.on("console", (msg) => {
    if (msg.type() !== "error") return;
    // Third-party assets can be blocked by the network the tests run on; only same-origin failures count.
    const isThirdPartyLoad =
      msg.text().startsWith("Failed to load resource") && !msg.location().url.startsWith(baseURL!);
    if (!isThirdPartyLoad) errors.push(msg.text());
  });

  await page.goto("/");
  await expect(page.locator("nav")).toBeVisible();
  await expect(page.locator("form").first()).toBeVisible();
  expect(errors).toEqual([]);
});
