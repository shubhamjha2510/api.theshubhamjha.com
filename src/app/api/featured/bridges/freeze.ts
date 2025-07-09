import axios from "axios";
import fs from "fs";
import path from "path";
import { URL } from "url";

const apiUrl = "https://rec.theshubhamjha.com/project/api.php?category=Bridge";

const API_TOKEN = "aRXYXs$wZ#UrmcYdbl1V%iJG9ONq&ZjzksY$N8BAq4W6CiUHIb";

const url = new URL(apiUrl);
const categoryParam = url.searchParams.get("category") || "unknown";
const platform = categoryParam.toLowerCase();

(async () => {
  try {
    const response = await axios.get(apiUrl);
    const projects = response.data;

    // Add platform, replace thumbnail with thumbnail_id, and remove unnecessary fields
    const updatedProjects = projects.map((project: any) => {
      const updated = {
        ...project,
        thumbnail: project.thumbnail_id,
        platform: platform,
      };
      delete updated.thumbnail_id;
      delete updated.gallery; // ✅ Remove gallery if still present (extra safe)
      return updated;
    });

    const outputPath = path.join(__dirname, "response.json");
    fs.writeFileSync(outputPath, JSON.stringify(updatedProjects, null, 2));

    console.log(`✅ ${categoryParam} projects saved to response.json with platform "${platform}"`);
  } catch (error) {
    if (error instanceof Error) {
      console.error("❌ Failed to fetch from API:", error.message);
    } else {
      console.error("❌ Failed to fetch from API:", error);
    }
  }
})();
