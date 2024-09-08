const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const appConfig = {
  vdgEndpoint: `${backendUrl}/videogames`,
  genreEndpoint: `${backendUrl}/genres`,
  platformEndpoint: `${backendUrl}/platforms`,
};

//console.log("Backend URL:", backendUrl);
//console.log("VDG Endpoint:", appConfig.vdgEndpoint);
//console.log("Genre Endpoint:", appConfig.genreEndpoint);
//console.log("Platform Endpoint:", appConfig.platformEndpoint);//