import { createClient } from '@supabase/supabase-js';

const URL = 'https://dtcsuhsutauejkjnmikn.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0Y3N1aHN1dGF1ZWpram5taWtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkzMDUxMzMsImV4cCI6MjAxNDg4MTEzM30.c5zlZH_vpOFwp8KtEcPk_-9T_Cf7XIyPhv-y-Gup18k';

export const supabase = createClient(URL, API_KEY);