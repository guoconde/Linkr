import api from "./api";

export default class GeolocationApi {
  insertGeolocation(data, headers) {
    return api.post('/geolocation', data, headers);
  }
}