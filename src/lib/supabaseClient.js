import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tbsvxeztjdtikbzowhhb.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRic3Z4ZXp0amR0aWtiem93aGhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk0NzcwMjMsImV4cCI6MTk5NTA1MzAyM30.XVee3dij0il9P_FEWomzLk_nbifWOOU0pvDYZDLfQ5I';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
