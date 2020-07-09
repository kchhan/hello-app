class Address {
  async getAddress() {
    const response = await fetch(
      `https://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query`,
      { mode: 'cors' }
    );

    const responseData = await response.json();

    return responseData;

    // Response data will return:
    // country, country code, region, regionName, city, zip, lat, lon, timezone, isp, org, as, query(ipAddress)
  }
}
