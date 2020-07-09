class Hello {
  constructor(ipAddress) {
    this.ipAddress = ipAddress;
  }

  async getHello() {
    const response = await fetch(
      `https://fourtonfish.com/hellosalut/?ip=${this.ipAddress}`, {mode: 'cors'}
    )

    const responseData = response.json();

    return responseData;

    // ResponseData will return an object in this form
    // {
    //   code: "ca" (for state or country)
    //   hello: "Hello" (specific language hello)
    // }
  }
}

