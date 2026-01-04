import express from "express";
import cors from "cors";
import { google } from "googleapis";
import fs from "fs";

const app = express();
app.use(cors());

const PORT = 5000;

// Load service account credentials
const credentials = JSON.parse(
  fs.readFileSync("./service-account.json", "utf8")
);

// GA4 Property ID (replace with yours)
const PROPERTY_ID = "518251207";

const analyticsDataClient = new google.analyticsdata({
  version: "v1beta",
  auth: new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
  }),
});

app.get("/api/pageviews", async (req, res) => {
  try {
    const response = await analyticsDataClient.properties.runReport({
      property: `properties/${PROPERTY_ID}`,
      requestBody: {
        dateRanges: [{ startDate: "2020-01-01", endDate: "today" }],
        metrics: [{ name: "screenPageViews" }],
      },
    });

    const totalViews =
      response.data.rows?.[0]?.metricValues?.[0]?.value || "0";

    res.json({ totalViews });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch analytics data" });
  }
});

app.listen(PORT, () => {
  console.log(`Analytics backend running on port ${PORT}`);
});
