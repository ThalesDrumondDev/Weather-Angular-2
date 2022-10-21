import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 
  url = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = 'babc934eac0a72a6f268d43f6d419437'
  
  
  constructor(private http: HttpClient) { }

  // Método para retornar os Parametros de 'latitude' e 'longitude' da API

  getWeatherDataByCoords( lat: number , lon: number ) {

    const params = new HttpParams()

    .set('lat', lat)
    .set('lon', lon)
    .set('units', 'metrics')
    .set('appid', this.apiKey);

    return this.http.get(this.url, { params });
  }

  getWeatherDataByCityName(city: string) {
    const params = new HttpParams()

      .set('q', city)
      .set('units', 'metric')
      .set('appid', this.apiKey);

    return this.http.get(this.url, { params });
  }
  
}
