<img src="https://cdn.sefinek.net/images/animals/cat/neva-masquerade-cats-1375033-min.jpg" alt="Just a cat" height="230px" align="left">
<div align="center">
    <h1>
        » About this package «<br>
        😽 🦊
    </h1>
    <p>This package for npm returns random images of animals (cats, dogs, foxes etc.) from the official <a href="https://api.sefinek.net" target="_blank">API</a>.</p>
    <a href="https://www.npmjs.com/package/@sefinek/random-animals">
        <img src="https://img.shields.io/npm/dt/@sefinek/random-animals?maxAge=3600" alt="The number of downloads">
        <img src="https://img.shields.io/github/last-commit/sefinek/random-animals" alt="Last commit">
        <img src="https://img.shields.io/github/issues/sefinek/random-animals" alt="Issues">
    </a>
    <br><br>
</div>

## 📥 » Installation
```bash
npm install @sefinek/random-animals
```

## 🐈 » Usage
### • Async/await example
```js
const random = require('@sefinek/random-animals');

(async () => {
    const data = await random.cat();
    console.log(data.message);
})();
```

### • Promise example
```js
const random = require('@sefinek/random-animals');

random.fox().then(data => console.log(data.message));
```

## 😻 » Available functions
| Name                                                                                                                         | Usage                   | Description                                   |
|------------------------------------------------------------------------------------------------------------------------------|-------------------------|-----------------------------------------------|
| [cat](https://github.com/sefinek/random-animals/blob/6f0104fe82471644e89cbc52281ac73fa578a267/test/index.test.js#L4)         | `<random>.cat()`        | Return random cats                            |
| [dog](https://github.com/sefinek/random-animals/blob/6f0104fe82471644e89cbc52281ac73fa578a267/test/index.test.js#L9)         | `<random>.dog()`        | Return random dogs                            |
| [fox](https://github.com/sefinek/random-animals/blob/6f0104fe82471644e89cbc52281ac73fa578a267/test/index.test.js#L14)        | `<random>.fox()`        | Return random foxes                           |
| [fish](https://github.com/sefinek/random-animals/blob/6f0104fe82471644e89cbc52281ac73fa578a267/test/index.test.js#L19)       | `<random>.fish()`       | Return random fishes                          |
| [alpaca](https://github.com/sefinek/random-animals/blob/6f0104fe82471644e89cbc52281ac73fa578a267/test/index.test.js#L24)     | `<random>.alpaca()`     | Return random alpacas                         |
| [bird](https://github.com/sefinek/random-animals/blob/6f0104fe82471644e89cbc52281ac73fa578a267/test/index.test.js#L29)       | `<random>.bird()`       | Return random bird                            |
|                                                                                                                              |                         |                                               |
| [version](https://github.com/sefinek/random-animals/blob/6f0104fe82471644e89cbc52281ac73fa578a267/test/index.test.js#L35)    | `<random>.version()`    | Return version of this module                 |
| [apiVersion](https://github.com/sefinek/random-animals/blob/6f0104fe82471644e89cbc52281ac73fa578a267/test/index.test.js#L39) | `<random>.apiVersion()` | Return API version                            |


## 📃 » Returned object
```json
{
  "success": true,
  "status": 200,
  "info": { "category": "animals", "endpoint": "cat" },
  "message": "https://cdn.sefinek.net/images/animals/cat/neva-masquerade-cats-1375033-min.jpg"
}
```

## 🤝 » Help
If you encounter any issues or have questions, please open a new [Issue](https://github.com/sefinek/random-animals/issues/new) on GitHub.

## ⭐ » Thank you
If you find this package useful, please consider giving it a star on [GitHub](https://github.com/sefinek/random-animals) page.
