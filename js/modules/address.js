class Address {
  constructor(address) {
    this.address = address;
  }

  async getAddress() {
    const response = await fetch(
      `http://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query`,
      { mode: 'cors' }
    );

    const responseData = await response.json();

    return responseData;

    // Response data will return a wide variety of information
  }
}