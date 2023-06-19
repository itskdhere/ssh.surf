<h1 align="center">SSH.SURF API Wrapper</h1>

<p align="center">
<a href="https://github.com/itskdhere/ssh.surf/actions/workflows/codeql.yml" title="CodeQL">
<img alt="CodeQL" src="https://github.com/itskdhere/ssh.surf/actions/workflows/codeql.yml/badge.svg">
</a>
<a href="https://github.com/itskdhere/ssh.surf/actions/workflows/ossar.yml" title="OSSAR">
<img alt="OSSAR" src="https://github.com/itskdhere/ssh.surf/actions/workflows/ossar.yml/badge.svg">
</a>
<!-- <a href="https://github.com/itskdhere/ssh.surf/actions/workflows/npm-publish.yml" title="Node.js Package">
<img alt="Node.js Package" src="https://github.com/itskdhere/ssh.surf/actions/workflows/npm-publish.yml/badge.svg">
</a> -->
</p>

<hr>

<h4 align="center">
A simple & easy to use wrapper for <a href="https://ssh.surf">ssh.surf</a> API written in JavaScript to manage your <a href="https://discord-linux.com/">Discord-Linux</a> , <a href="https://revolt-linux.com/">Revolt-Linux</a> & <a href="https://guilded-linux.com/">Guilded-Linux</a> containers from your Node.js Applications / Edge Functions with ease.
</h4>


<h2>🔮 CLI</h2>

```bash
npx ssh.surf
```
> CLI is not finished yet. You can use the API Wrapper for now.


<h2>🥏 Installation</h2>

```bash
npm install ssh.surf
```

<h2>🧵 Usage</h2>

<details open>
<summary><b>⚙ Initialization:</b></summary>

```js
import SshSurfApi from 'ssh.surf';

const sshsurf = new SshSurfApi({
    apiKey: 'YOUR_SSH.SURF_API_KEY_HERE'
});
```
</details>

<details open>
<summary><b>📡 Methods:</b></summary>
<br>

- `hello()` - This API Method allows you to test and ensure the correct user is in use.
```js
let response = await sshsurf.hello();
console.log(response);
```

- `name()` - This API Method allows you get the username without the hello message.
```js
let response = await sshsurf.name();
console.log(response);
```

- `start()` - This API Method allows you to start your container.
```js
let response = await sshsurf.start();
console.log(response);
```

- `stop()` - This API Method allows you to stop your container.
```js
let response = await sshsurf.stop();
console.log(response);
```

- `restart()` - This API Method allows you to restart your container.
```js
let response = await sshsurf.restart();
console.log(response);
```

- `info()` - This API method will allow you to get information about your container.
```js
let response = await sshsurf.info();
console.log(response);
```

- `stats()` - This API method will allow you to get resource usage stats about your container.
```js
let response = await sshsurf.stats();
console.log(response);
```

- `time()` - This API method will allow you to get information about the expire time of your container.
```js
let response = await sshsurf.time();
console.log(response);
```

- `newRootPass()` - This API method will change the root password of your container to a random generated password.
```js
let response = await sshsurf.newRootPass();
console.log(response);
```

- `newKey()` - This API method will generate a new API key for your account.
```js
let response = await sshsurf.newKey();
console.log(response);
```

- `keyTime()` - This API method will check the time left until the key expires.
```js
let response = await sshsurf.keyTime();
console.log(response);
```

- `license()` - This API method will allow you to get information about your license key purchased at our store.
```js
let response = await sshsurf.license();
console.log(response);
```

- `exec()` - This API Method allows you to run commands your container where you can specify the working directory used. Required Parameters:
    - `cmd` - Name Of The Command.
    - `pwd` - Working Directory.
```js
let response = await sshsurf.exec({
    cmd: 'ANY_LINUX_COMMAND_HERE',
    pwd: 'ANY_WORKING_DIRECTORY_HERE'
});
console.log(response);
```

- `notify()` - This API Method allows you to send notifications to your DiscordID as a DirectMessage. Required Parameters:
    - `message` - The Message You Want To Send.
```js
let response = await sshsurf.notify({
    message: 'ANY_MESSAGE_HERE'
});
console.log(response);
```

</details>


<h2>✨ Examples</h2>

Comming Soon..

<h2>📰 Others</h2>

License: <a href="https://github.com/itskdhere/ssh.surf/blob/main/LICENSE">MIT</a>
