import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3001;

// --- TOOL SYSTEM ---
const tools = {
  async web_search({ query }) {
    // Example: Use DuckDuckGo Instant Answer API (no key needed, limited)
    const url = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_redirect=1&no_html=1`;
    const { data } = await axios.get(url);
    return {
      type: 'web_search',
      query,
      abstract: data.AbstractText,
      relatedTopics: data.RelatedTopics?.slice(0, 3) || [],
      source: 'DuckDuckGo Instant Answer',
    };
  },
  async calculator({ expression }) {
    try {
      // Simple JS eval for demo (never use eval with untrusted input in production!)
      const result = eval(expression);
      return { type: 'calculator', expression, result };
    } catch {
      return { type: 'calculator', expression, error: 'Invalid expression' };
    }
  },
};

// --- AGENT ENDPOINT ---
app.post('/agent', async (req, res) => {
  const { tool, params } = req.body;
  if (!tool || !tools[tool]) {
    return res.status(400).json({ error: 'Unknown or missing tool' });
  }
  try {
    const result = await tools[tool](params || {});
    res.json({ ok: true, result });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

app.get('/', (req, res) => {
  res.send('MCP Server for Agents is running.');
});

app.listen(PORT, () => {
  console.log(`MCP Server listening on port ${PORT}`);
});
