![](https://img.shields.io/badge/Project-VimaanWay-yellow.svg)
![](https://img.shields.io/badge/Tools-ICP,_Motoko_React-skyblue.svg)
![](https://img.shields.io/badge/Level-Intermediate-orange.svg)
![](https://img.shields.io/badge/Status-Building-orange.svg) 

![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

<br />
<p align="center">
    <img src="https://i.postimg.cc/2SRQwGpk/airplane.png" alt="Logo" width="80">
  </a>

  <h3 align="center">VimaanWay</h3>

  <p align="center">
    A decentralized flight ticket booking system.
    <br />
      <a href="https://4e7g7-eiaaa-aaaag-qcpua-cai.icp0.io/">View Live</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li> <a href="#about-the-project">About The Project</a> </li>
    <li> <a href="#built-with">Built With</a> </li>    
    <li> <a href="#screenshots">Screenshots</a> </li>
    <li> <a href="#getting-started">Getting Started</a> </li>
  </ol>
</details>

## About The Project

This decentralized flight ticket booking system was developed using the ICP (Internet Computer Protocol), Motoko programming language for the backend, and React for the front end. It  lets users search for flights, book tickets securely, and conveniently download e-tickets. Say goodbye to intermediaries and embrace a transparent, efficient, and decentralized approach to flight bookings.

## Built With

The following technologies and libraries are used for the development of this website

- [ICP](https://internetcomputer.org/ecosystem)
- [Motoko](https://web3.motoko-book.dev/)
- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)

## Screenshots

<p align = "center">
  <img src="https://i.postimg.cc/GmxPnzJG/1.png" width="80%"/>
  <br>
  <img src="https://i.postimg.cc/RVfQXvWP/2.png" width="80%"/>
  <br>
  <img src="https://i.postimg.cc/WpxwGd1F/3.png" width="80%"/>
  <br>
  <img src="https://i.postimg.cc/wMzfpZ0m/ticket.png" width="80%"/>
  <br>
  <img src="https://i.postimg.cc/YCgpK0Bt/three.png" width="80%"/>
</p>

## Getting Started

If you want to test your project locally, you can use the following commands:

```bash
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```

Once the job completes, your application will be available at `http://localhost:4943?canisterId={asset_canister_id}`.

If you have made changes to your backend canister, you can generate a new candid interface with

```bash
npm run generate
```

at any time. This is recommended before starting the frontend development server, and will be run automatically any time you run `dfx deploy`.

If you are making frontend changes, you can start a development server with

```bash
npm start
```

Which will start a server at `http://localhost:8080`, proxying API requests to the replica at port 4943.
