import { Router } from 'express';
import { OauthRedirectController } from '../../controllers/OauthRedirectController';
import { FacebookCallbackController } from '../../controllers/FacebookCallbackController';
import { InstagramRedirectController } from "../../controllers/InstagramRedirectContoller";
import { InstagramCallbackController } from "../../controllers/InstagramCallbackController";
import { WordpressRedirectController } from "../../controllers/WordpressRedirectController";

const oauth2Router = Router();

const oauthRedirectController = new OauthRedirectController();
const facebookCallbackController = new FacebookCallbackController();
const instagramRedirectController = new InstagramRedirectController();
const instagramCallbackController = new InstagramCallbackController();
const wordpressRedirectController = new WordpressRedirectController();


oauth2Router.route('/facebook').get((req, res) => oauthRedirectController.execute(req, res));
oauth2Router.route('/facebook/callback').get((req, res) => facebookCallbackController.execute(req, res));

// Instagram
// Definition: 'api/v1/oauth2/instagram'
oauth2Router.route('/instagram').get((req, res) => instagramRedirectController.execute(req, res));

// Definition: 'api/v1/oauth2/instagram/callback'
oauth2Router.route('/instagram/callback').get( (req, res) => instagramCallbackController.execute(req, res));

// Wordpress
// Definition: 'api/v1/oauth2/wordpress'
oauth2Router.route('/wordpress').get((req, res) => wordpressRedirectController.execute(req, res));

// Definition: 'api/v1/oauth2/wordpress/callback'
oauth2Router.route('/wordpess/callback').get( (req, res) => {
    console.log("executing callback");
})

export { oauth2Router };