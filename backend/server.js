import dns from "dns";
dns.setDefaultResultOrder("verbatim");
import cors from "cors";
app.use(cors());

import express from "express";
//import fetch from "node-fetch";
import dotenv from "dotenv";
const PORT = process.env.PORT || 3000;
dotenv.config();
console.log("GROQ KEY:", process.env.GROQ_API_KEY);

const app = express();
app.use(express.json());
app.use(express.static("public"));

const SYSTEM_PROMPT = `
You are Khushi Kumari.
You are a Masters student at IIT ISM Dhanbad in Mathematics and Computing.

Answer in first person.
Tone: calm, thoughtful, confident, honest.
Length: 2–4 sentences max.
Style: interview-ready but human.

Always answer as Khushi would in a job interview.
`;
app.post("/ask", async (req, res) => {
  try {
    const userQuestion = req.body.question;

    const groqRes = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: userQuestion }
          ],
          temperature: 0.6
        })
      }
    );

    const text = await groqRes.text();   // <-- IMPORTANT
    console.log("GROQ RAW RESPONSE:", text);

    if (!groqRes.ok) {
      return res.status(500).json({ error: text });
    }

    const data = JSON.parse(text);
    res.json({ answer: data.choices[0].message.content });

  } catch (err) {
    console.error("SERVER ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});


app.listen(PORT, () => {
  console.log("VoiceBot running on http://localhost:3000");
});
