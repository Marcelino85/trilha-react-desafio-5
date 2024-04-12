import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://trtezezrslvdjjenjkmk.supabase.co/rest/v1',
    headers: {
        apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRydGV6ZXpyc2x2ZGpqZW5qa21rIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMjkyMTQ5MCwiZXhwIjoyMDI4NDk3NDkwfQ.3dnj8NMkn80SooU722GiaDKhdSZKFsjy8AkreFMIq6E', 
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRydGV6ZXpyc2x2ZGpqZW5qa21rIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMjkyMTQ5MCwiZXhwIjoyMDI4NDk3NDkwfQ.3dnj8NMkn80SooU722GiaDKhdSZKFsjy8AkreFMIq6E'
    }
})