const API_KEY = "eee8e4b0376449f5bd1e7429729fe3d1";

const ips = ["8.8.8.8", "1.1.1.1", "208.67.222.222"];

ips.forEach(ip => {
  fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}&ip=${ip}`)
    .then(res => res.json())
    .then(data => {
      console.log("IP:", ip);
      console.log("País:", data.country_name);
      console.log("Ciudad:", data.city);
      console.log("ISP:", data.isp);
      console.log("--------------");
    });
});