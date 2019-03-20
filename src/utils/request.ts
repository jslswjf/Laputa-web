import cookie from 'react-cookies';
import router from 'umi/router';

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
  
    const error = new Error(response.statusText);

    error.response = response;
    throw error;
  }
  
  /**
   * Requests a URL, returning a promise.
   *
   * @param  {string} url       The URL we want to request
   * @param  {object} [options] The options we want to pass to "fetch"
   * @return {object}           An object containing either "data" or "err"
   */
  export default async function request(url, options) {
    
    const session = cookie.load('state/session/user');
    if(session&&session.token) {
      options.headers = {...( options.headers || {}),token:session.token}
    }
    const response = await fetch(url, options);
    

    if(response.status===401){
      cookie.remove('state/session/user');
      window.location.reload();
    }
    
    checkStatus(response);
    return response.json();
    
  }


  
