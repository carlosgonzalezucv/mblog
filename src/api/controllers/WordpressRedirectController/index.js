import { BaseController } from "../BaseController";
import { WordpressOauth2Service } from "../../../services/WordpressOauth2Service";
import { BaseError } from "../../../domain-model/DomainErrors";
import { FindUserById } from "../../../modules/Users/useCases/FindUserById";

export class WordpressRedirectController extends BaseController {

    constructor() {
        super();
        this.wordpressOauth2Service = new WordpressOauth2Service();
        this.findUserById = new FindUserById();
    }

    async executeImpl(req, res) {

        console.log(`'Executing wordpress redirect...'`);
        console.log(`'Reciving: ${req.query}'`);
        const { userId } = req.query;
        console.log(`'req.query: ${req.query}'`);
        
        let url = this.wordpressOauth2Service.getAuthorizeUser();
        console.log(`'URL: ${url}'`);

        return res.redirect(308, url);
    }

}