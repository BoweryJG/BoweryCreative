import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fiozmyoedptukpkzuhqm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpb3pteW9lZHB0dWtwa3p1aHFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4MTUxODcsImV4cCI6MjA2NTM5MTE4N30.XrzLFbtoOKcX0kU5K7MSPQKwTDNm6cFtefUGxSJzm-o';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database
export interface Contact {
  id?: string;
  created_at?: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  interest?: string;
  message: string;
  status?: string;
}

export interface Subscriber {
  id?: string;
  created_at?: string;
  email: string;
  status?: string;
  source?: string;
}

export interface Analytics {
  id?: string;
  created_at?: string;
  event_type: string;
  page_path?: string;
  referrer?: string;
  user_agent?: string;
  session_id?: string;
  metadata?: Record<string, any>;
}