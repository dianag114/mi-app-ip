class ApiService {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async getData() {
    const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${this.apiKey}`);
    const data = await response.json();
    return data;
  }
}

class ConnectionData {
  constructor(data) {
    this.ip = data.ip;
    this.country = data.country_name;
    this.city = data.city;
    this.isp = data.isp;
    this.timezone = data.time_zone.name;
    this.currency = data.currency.name;
    this.lat = data.latitude;
    this.lon = data.longitude;
    this.org = data.organization;
    this.continent = data.continent_name;
  }
}

class UI {
  static render(data) {
    const container = document.getElementById("data");

    container.innerHTML = `
      <ul class="list-group">
        <li class="list-group-item"><strong>IP:</strong> ${data.ip}</li>
        <li class="list-group-item"><strong>País:</strong> ${data.country}</li>
        <li class="list-group-item"><strong>Ciudad:</strong> ${data.city}</li>
        <li class="list-group-item"><strong>ISP:</strong> ${data.isp}</li>
        <li class="list-group-item"><strong>Zona horaria:</strong> ${data.timezone}</li>
        <li class="list-group-item"><strong>Moneda:</strong> ${data.currency}</li>
        <li class="list-group-item"><strong>Latitud:</strong> ${data.lat}</li>
        <li class="list-group-item"><strong>Longitud:</strong> ${data.lon}</li>
        <li class="list-group-item"><strong>Organización:</strong> ${data.org}</li>
        <li class="list-group-item"><strong>Continente:</strong> ${data.continent}</li>
      </ul>
    `;
  }
}

// EVENTO BOTÓN
document.getElementById("btnCargar").addEventListener("click", async () => {
  const api = new ApiService("eee8e4b0376449f5bd1e7429729fe3d1");

  try {
    const data = await api.getData();
    const connection = new ConnectionData(data);
    UI.render(connection);
  } catch (error) {
    console.error("Error:", error);
  }
});