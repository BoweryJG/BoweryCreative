# Render Environment Variables Setup

Add these environment variables to your Render service:

1. Go to: https://dashboard.render.com/web/srv-d16156emcj7s73dt9m7g/env
2. Add the following environment variables:

```
# Supabase Configuration
SUPABASE_URL=https://fiozmyoedptukpkzuhqm.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpb3pteW9lZHB0dWtwa3p1aHFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4MTUxODcsImV4cCI6MjA2NTM5MTE4N30.XrzLFbtoOKcX0kU5K7MSPQKwTDNm6cFtefUGxSJzm-o

# Get this from Supabase Dashboard > Settings > API > Service Key
SUPABASE_SERVICE_KEY=your_service_key_here

# Resend Configuration (your actual key)
RESEND_API_KEY=re_5aDHGigQ_2Sjq8BR1o5C2v9eTBsf4r1Ux

# OpenRouter Configuration (your actual key)
OPENROUTER_API_KEY=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

# API Security
API_KEY=generate_a_secure_random_key_here

# Frontend URL (update when you have custom domain)
FRONTEND_URL=https://bowerycreative.netlify.app

# Port (Render sets this automatically)
PORT=10000
```

## To Generate a Secure API Key:

In terminal, run:
```bash
openssl rand -base64 32
```

Or use this online generator: https://randomkeygen.com/

## Next Steps:

1. Copy the `backend-implementation.js` content to your `BoweryCreative-backend` repo as `src/index.js`

2. Update your `package.json` in the backend repo to include these dependencies:
```json
{
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "@supabase/supabase-js": "^2.39.0",
    "resend": "^2.0.0",
    "express-rate-limit": "^7.1.5",
    "helmet": "^7.1.0",
    "dotenv": "^16.3.1"
  }
}
```

3. Commit and push to trigger a new deployment on Render

4. Update your frontend `.env.local` with the generated API_KEY:
```
VITE_API_KEY=your_generated_api_key
```