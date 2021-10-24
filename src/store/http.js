export class Http {
  static async get(url) {
    try {
      return await request(url, 'GET');
    } catch (error) {
      console.log(error);
    }
  }
  static async post(url) {
    try {
      return await request(url, 'POST');
    } catch (error) {
      console.log(error);
    }
  }
}

async function request(url, method, data) {
  const config = {
    method: method,
  };
  const response = await fetch(url, config)
    .then(res => res.json())
    .then(result => {
      return result;
    });

  return await response;
}
