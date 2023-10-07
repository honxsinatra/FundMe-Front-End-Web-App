# FundMe-Front-End-Web-App
# Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - You'll know you've installed it right if you can run:
    - `git --version`
- [Metamask](https://metamask.io/)
  - This is a browser extension that lets you interact with the blockchain.
- [Nodejs](https://nodejs.org/en/)
  - You'll know you've installed nodejs right if you can run:
    - `node --version` And get an ouput like: `vx.x.x`
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) instead of `npm`
  - You'll know you've installed yarn right if you can run:
    - `yarn --version` And get an output like: `x.x.x`
    - You might need to install it with npm

  # Quickstart

1. Clone the repo

```
git clone https://github.com/honxsinatra/FundMe-Front-End-Web-App.git
cd FundMe-Front-End-Web-App
```

2. Run the file.

You can usually just double click the file to "run it in the browser". Or you can right click the file in your VSCode and run "open with live server".

Optionally:

If you'd like to run with prettier formatting, or don't have a way to run your file in the browser, run:
```
yarn
yarn http-server
```

And you should see a small buttons that say "connect to metamask".

![Connect to metamask](metamask.png)

Hit it, and you should see metamask pop up.

#You can;
-Run transaction by hitting the "fund" button
-See the balance of the contract by hitting "getBalance" Button

#Only the owner can withdraw the balance available.

#NB: The contract intergrated to this web app deployed to SEPOLIA testnet since it's an app template

# Thank you!

If you appreciated this, feel free to follow me or donate!

