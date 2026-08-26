import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("./index.html", import.meta.url), "utf8");
const robots = readFileSync(new URL("./robots.txt", import.meta.url), "utf8");
const sitemap = readFileSync(new URL("./sitemap.xml", import.meta.url), "utf8");
const headers = readFileSync(new URL("./_headers", import.meta.url), "utf8");

describe("MPSGroup contact and deployment corrections", () => {
  it("collects and submits a required homeowner situation", () => {
    expect(html).toContain('name="situation"');
    expect(html).toContain('id="contact-situation"');
    expect(html).toContain('situation: data.situation');
    expect(html).not.toContain("data.situation || 'Not specified'");
  });

  it("preserves the working email while removing the inactive website link and source wording", () => {
    expect(html).toContain("Doug.May@MPSGroup.info");
    expect(html).not.toContain("https://mpsgroup.info");
    expect(html).not.toContain('href="https://mpsgroup.info"');
    expect(html).not.toContain("New Lead from MPSGroup.info");
    expect(html).not.toContain("New inquiry from MPSGroup.info");
  });

  it("uses the current Netlify URL in metadata, robots, sitemap, and structured data", () => {
    expect(html).toContain('rel="canonical" href="https://mpsgroup-inc.netlify.app/"');
    expect(html).toContain('"url": "https://mpsgroup-inc.netlify.app/"');
    expect(robots).toContain("https://mpsgroup-inc.netlify.app/sitemap.xml");
    expect(sitemap).not.toContain("https://mpsgroup.info");
  });

  it("preserves the ARNI Realty Inc. brokerage disclosure", () => {
    expect((html.match(/ARNI Realty Inc/g) ?? []).length).toBeGreaterThanOrEqual(4);
    expect(html).toContain('id="brokerage-disclosure"');
    expect(html).toContain("21 N Broadway Street, Suite 2");
  });

  it("adds explicit HTML cache revalidation and a visible submission failure path", () => {
    expect(headers).toContain("no-cache, no-store, must-revalidate, max-age=0");
    expect(html).toContain('id="contactError"');
    expect(html).toContain("if (!response.ok)");
  });
});
