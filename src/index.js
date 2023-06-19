// Imports
import chalk from "chalk";
import figlet from "figlet";
import gradient from "gradient-string";
import { createSpinner } from 'nanospinner';

// API
class SshSurfApi {
    #apiKey;
    #baseUrl;
    #headers;
    #figletDecoration;

    /**
    * Required Options:
    * 
    * @param apiKey - Your SSH.SURF API Key
    * @param figletDecoration - Whether To Show The Figlet Decoration Or Not. Vlaues: `true` or `false`. Default Value: `true`
    */

    constructor(options) {
        const { apiKey, figletDecoration } = options;

        this.#figletDecoration = figletDecoration || true;

        if (this.#figletDecoration == true) {
            console.log(gradient.pastel.multiline(figlet.textSync('SSH.SURF', {
                font: 'Big',
                horizontalLayout: 'default',
                verticalLayout: 'default',
                width: 69,
                whitespaceBreak: true
            })));
        }

        this.#apiKey = apiKey;

        this.#baseUrl = 'https://api.ssh.surf';

        this.#headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-ssh-auth': `${this.#apiKey}`
        }
    }

    async #get(path) {
        const spinner = createSpinner();
        spinner.start({ text: gradient.atlas('Processing...'), color: 'yellow' });

        const rawResponse = await fetch(`${this.#baseUrl}/${path}`, {
            headers: this.#headers,
            body: null,
            method: 'GET'
        }).catch((e) => {
            console.error(chalk.redBright(e));
        });

        const jsonResponse = await rawResponse.json();

        if (jsonResponse.success == false) {
            spinner.error({ text: gradient.fruit('Error') });
        } else {
            spinner.success({ text: gradient.cristal('Success') });
        }

        return jsonResponse;
    }

    async #post(path, payload) {
        const spinner = createSpinner();
        spinner.start({ text: gradient.summer('Processing...'), color: 'yellow' });

        const rawResponse = await fetch(`${this.#baseUrl}/${path}`, {
            headers: this.#headers,
            body: payload,
            method: 'POST'
        }).catch((e) => {
            console.error(chalk.redBright(e));
        });

        const jsonResponse = await rawResponse.json();

        if (jsonResponse.success == false) {
            spinner.error({ text: gradient.fruit('Error') });
        } else {
            spinner.success({ text: gradient.cristal('Success') });
        }

        return jsonResponse;
    }


    /**
    * This API Method allows you to test and ensure the correct user is in use.
    */

    async hello() {
        return await this.#get('hello');
    }


    /**
    * This API Method allows you get the username without the hello message.
    */

    async name() {
        return await this.#get('name');
    }


    /**
    * This API Method allows you to start your container.
    */

    async start() {
        return await this.#get('start');
    }


    /**
    * This API Method allows you to stop your container.
    */

    async stop() {
        return await this.#get('stop');
    }


    /**
    * This API Method allows you to restart your container.
    */

    async restart() {
        return await this.#get('restart');
    }


    /**
    * This API method will allow you to get information about your container.
    */

    async info() {
        return await this.#get('info');
    }


    /**
    * This API method will allow you to get resource usage stats about your container.
    */

    async stats() {
        return await this.#get('stats');
    }


    /**
    * This API method will allow you to get information about the expire time of your container.
    */

    async time() {
        return await this.#get('time');
    }


    /**
    * This API method will change the root password of your container to a random generated password.
    */

    async newRootPass() {
        return await this.#get('rootpass');
    }


    /**
    * This API method will generate a new API key for your account.
    */

    async newKey() {
        return await this.#get('new-key');
    }


    /**
    * This API method will check the time left until the key expires.
    */

    async keyTime() {
        return await this.#get('key-time');
    }


    /**
    * This API method will allow you to get information about your license key purchased at our store.
    */

    async license() {
        return await this.#get('license');
    }


    /**
    * This API Method allows you to run commands your container where you can specify the working directory used.
    * 
    * Required Options:
    * 
    * @param cmd - Name Of The Command.
    * @param pwd - Working Directory.
    */

    async exec(options) {
        const { cmd, pwd } = options;

        const payload = {
            "cmd": cmd,
            "pwd": pwd
        };

        return await this.#post("exec", JSON.stringify(payload));
    }


    /**
    * This API Method allows you to send notifications to your DiscordID as a DirectMessage.
    * 
    * Required Options:
    * 
    * @param message - The Message You Want To Send.
    */

    async notify(options) {
        const { message } = options;

        const payload = {
            "message": message
        };

        return await this.#post("notify", JSON.stringify(payload));
    }

}

export default SshSurfApi;