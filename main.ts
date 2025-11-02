// @ts-types="npm:@types/express@5.0.3"

import express from "express";

const app = express();

app.get("/setInMeeting", async (_req, res) => { 
  await Deno.writeTextFile("/data/in_meeting.txt", "In Meeting");
  res.sendStatus(200);
});

app.get("/setOutMeeting", async (_req, res) => {
  await Deno.writeTextFile("/data/in_meeting.txt", "Out of Meeting");
  res.sendStatus(200);
});

app.get("/getInMeeting", async (_req, res) => {
  try {
    const text = await Deno.readTextFile("/data/in_meeting.txt");
    res.send(text === "In Meeting");
  } catch {
    res.send(false);
  }
});

app.listen(8000);
console.log(`Server is running on http://localhost:8000`);