import { SocialMediaService } from "../SocialMediaService";
import config from "config";
import logger from "../../infraestructure/logger";

export class WordpressOauth2Service extends SocialMediaService {
    
    static BASE_URL = "https://public-api.wordpress.com";
    // static BASE_URL = "https://public-api.wordpress.com/oauth2/token";
    static WORDPRESS_REDIRECT_URI = `${config.get('baseUrl')}/api/v1/oauth2/wordpress/callback`;

    getAccessToken(code) {
        let url = `${ WordpressOauth2Service.BASE_URL }/oauth2/authorize`;
        return this.http().post(url, {
          params: {
            client_id: process.env.WORDPRESS_KEY,
            client_secret: process.env.WORDPRESS_SECRET,
            grant_type: 'authorization_code',
            redirect_uri: `${ WordpressOauthService.WORDPRESS_REDIRECT_URI }`,
            code: code,
          }
        })
          .then(resp => resp.data)
          .then(data => data.access_token)
          .catch(err => {
            console.log("error", err);
            logger.fatal('COULD_NOT_GET_TOKEN');
            return null;
        });
      }
  
  
    getAuthorizeUser() {
        return [
          `${ WordpressOauth2Service.BASE_URL }/oauth2/authorize`,
          `?client_id=70478`,
          `&redirect_uri=${ WordpressOauth2Service.WORDPRESS_REDIRECT_URI }`,
          `&response_type=code`,
        ].join("")
      }  
}