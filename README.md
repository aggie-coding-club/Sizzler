# Welcome to Sizzler Frontend

## Get started

The project runs with the expectation you have Expo Go installed already from either the App Store or Google Play Store. Additionally, it is assumed that you already have node installed with some package manager. This document will assume you are using `npm`, so change the commands as needed.

1. Clone Files

   **HTTPS**

   ```bash
   git clone https://github.com/aggie-coding-club/Sizzler.git
   ```

   **SSH**

   ```bash
   git clone git@github.com:aggie-coding-club/Sizzler.git
   ```

2. Enter Project

   ```bash
   cd Sizzler
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Start the app

   ```bash
   npm run start
   ```

5. Scan QR code with phone to open application in Expo Go

## .env Setup

Correctly linking the backend and frontend will require correct .env setup.

1. Create .env at the root of project

   ```bash
   ── app
   │   ├── (tabs)
   │   └── ...
   ├── assets
   │   ├── fonts
   │   └── images
   ├── components
   │   ├── __tests__
   │   ├── navigation
   │   └── ...
   ├── constants
   │   └── ...
   ├── hooks
   │   └── ...
   ├── node_modules
   │   └── ...
   ├── README.md
   ├── package.json
   ├── .gitignore
   ├── .env ←──────────────── here
   └── ...
   ```

2. Add environment variables to .env

   Replace `<Your WiFi IP>` with your local WiFi IP. If you are using the TAMU WiFi, then leave the option blank as `EXPO_PUBLIC_WIFI_HOST=`. If for whatever reason the backend port changes, change the `EXPO_PUBLIC_BACKEND_PORT` variable accordingly.

   ```txt
   EXPO_PUBLIC_BACKEND_PORT=3000
   EXPO_PUBLIC_TAMU_WIFI_HOST=10.247.6.151
   EXPO_PUBLIC_WIFI_HOST=<Your Local WiFi IP>
   ```

   **all variables must begin with EXPO_PUBLIC_**

3. Get local WiFi IP

   - **Windows 10:**
     1. `Command Prompt`
     2. run command `ipconfig`
     3. copy IP labeled as `IPv4 Address`
   - **Windows 11:**
     - Option 1
       1. `Windows Terminal`→`Command Prompt`
       2. run command `ipconfig`
       3. copy IP labeled as `IPv4 Address`
     - Option 2
       1. <kbd>⊞ Win</kbd> + <kbd>I</kbd> (open `Windows Settings`)
       2. `Network & Internet`
       3. `Properties`
       4. `IPv4 Address`
   - **macOS:**
     1. `System Settings`
     2. `Network`
     3. `Wi-Fi`
     4. `Details...`
     5. `IP Address`

## Wireframe Design

Design is based on work done in Figma. Contact Art Young if you are a working member of the project and need access.

## Debugging

For any unaddressed issues, please contact Andrew Mao or Art Young for assistance.

### Mismatched Expo SDK Version

There is a possibility that you may run into a mismatched version for expo go. Sizzler currently is running on Expo SDK 52. Whether you need to downgrade or upgrade your application version, simply run these commands to realign your repository.

```bash
npm install expo@52
```

```bash
npm expo install --fix
```

```bash
npm install
```