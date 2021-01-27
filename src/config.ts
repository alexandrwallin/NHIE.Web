const config = {
  API_URL:
    process.env.REACT_APP_API_URL ??
    'http://localhost:5001/never-have-i-ever-73ecd/us-central1/api/api/',
  API_KEY: process.env.REACT_APP_API_KEY ?? 'api-key',
};

export default config;
