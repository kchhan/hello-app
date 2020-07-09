class Hello {
  contructor(language) {
    this.language = language;
  }

  async getHello(ipAddress) {
    const response = await fetch(
      `https://fourtonfish.com/hellosalut/?ip=${ipAddress}`, {mode: 'cors'}
    )

    const responseData = response.json();

    return responseData;

    // ResponseData will return an object in this form
    // {
    //   code: "ca" (for country)
    //   hello: "Hello" (specific language hello)
    // }
  }
}

