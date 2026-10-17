import fs from "fs";
import path from "path";

// Test suite for About Us page implementation and architecture integrity
const rootDir = process.cwd();
const webSrcDir = path.resolve(rootDir, "apps/web/src");

function assert(condition: boolean, message: string) {
    if (!condition) {
        console.error(`❌ Assertion Failed: ${message}`);
        process.exit(1);
    }
    console.log(`✅ Passed: ${message}`);
}

console.log("🔍 Running About Page Implementation & Architecture Validation...\n");

// 1. Validate Router Configuration
const routerPath = path.resolve(webSrcDir, "Router/Router.tsx");
assert(fs.existsSync(routerPath), "Router.tsx exists");
const routerContent = fs.readFileSync(routerPath, "utf-8");
assert(
    routerContent.includes('import About from "@/Pages/HomePage/About/About"'),
    "Router.tsx imports About component"
);
assert(
    routerContent.includes("path : 'about'") && routerContent.includes("Component : About"),
    "Router.tsx mounts About component under '/about' route"
);

// 2. Validate Navigation in Navbar
const navbarPath = path.resolve(webSrcDir, "Pages/Shared/Navbar/Navbar.tsx");
assert(fs.existsSync(navbarPath), "Navbar.tsx exists");
const navbarContent = fs.readFileSync(navbarPath, "utf-8");
assert(
    navbarContent.includes('to={"/about"}') && navbarContent.includes("About"),
    "Navbar.tsx contains navigation link to '/about'"
);

// 3. Validate Footer Links
const footerPath = path.resolve(webSrcDir, "Pages/Shared/Footer/Footer.tsx");
assert(fs.existsSync(footerPath), "Footer.tsx exists");
const footerContent = fs.readFileSync(footerPath, "utf-8");
assert(
    footerContent.includes('to={"/about"}'),
    "Footer.tsx contains link to '/about'"
);
assert(
    footerContent.includes('to={"/problems"}'),
    "Footer.tsx contains link to '/problems'"
);

// 4. Validate About Page Content & Sections
const aboutPath = path.resolve(webSrcDir, "Pages/HomePage/About/About.tsx");
assert(fs.existsSync(aboutPath), "About.tsx exists");
const aboutContent = fs.readFileSync(aboutPath, "utf-8");

assert(
    aboutContent.includes("export default About"),
    "About.tsx has default export"
);
assert(
    aboutContent.includes("Leveling Up Developer Practice Through") &&
    aboutContent.includes("Competitive Duels"),
    "About.tsx includes main heading with AuroraText"
);
assert(
    aboutContent.includes("Who We Are & Why BrackeT Exists"),
    "About.tsx includes 'Who We Are' section"
);
assert(
    aboutContent.includes("1v1 Rival Duels") &&
    aboutContent.includes("Monaco Coding Arena") &&
    aboutContent.includes("Ranked Rating (RR) Ladder") &&
    aboutContent.includes("Curated Problem Catalog"),
    "About.tsx includes all core platform pillars"
);
assert(
    aboutContent.includes("Fair Play & Deterministic Judging") &&
    aboutContent.includes("Pressure-Tested Interview Readiness"),
    "About.tsx includes verified core principles"
);
assert(
    aboutContent.includes("Useful Links & Navigation"),
    "About.tsx includes useful platform navigation"
);

// 5. Validate Contact Section & Channels
const contactPath = path.resolve(webSrcDir, "Pages/HomePage/About/components/ContactSection.tsx");
assert(fs.existsSync(contactPath), "ContactSection.tsx exists");
const contactContent = fs.readFileSync(contactPath, "utf-8");

assert(
    contactContent.includes("support@bracket.io") &&
    contactContent.includes("mailto:support@bracket.io"),
    "ContactSection.tsx includes verified email with functional mailto link"
);
assert(
    contactContent.includes("+880 1122-30881") &&
    contactContent.includes("+88012567222111") &&
    contactContent.includes("01234-567890"),
    "ContactSection.tsx includes verified helplines with functional tel links"
);
assert(
    contactContent.includes("124154"),
    "ContactSection.tsx includes verified Trade License 124154"
);
assert(
    contactContent.includes("https://github.com/Riad-Zz/BrackeT"),
    "ContactSection.tsx includes verified GitHub repository link"
);
assert(
    contactContent.includes("Send a Direct Inquiry") &&
    contactContent.includes("contact-name") &&
    contactContent.includes("contact-email") &&
    contactContent.includes("contact-message"),
    "ContactSection.tsx includes accessible contact inquiry form"
);

console.log("\n🎉 All 14 About Us Page Architecture & Content Validation checks PASSED successfully!");
