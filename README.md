# Welcome to Sizzler Frontend

## Get started

1. Clone Files

   ```bash HTTPS
   git clone https://github.com/aggie-coding-club/Sizzler.git
   ```
   ```bash SSH
   git clone git@github.com:aggie-coding-club/Sizzler.git
   ```
   ```bash Github CLI
   gh repo clone aggie-coding-club/Sizzler
   ```

2. 

3. Install dependencies

   ```bash
   npm install
   ```

4. Start the app

   ```bash
   npm run start
   ```

## .env Setup

Correctly linking the backend and frontend will require correct .env setup.

1. Create .env at the root of project

   ```bash
   ── app
   │   └── (tabs)
   ├── assets
   │   ├── fonts
   │   └── images
   ├── components
   │   ├── __tests__
   │   └── navigation
   ├── constants
   ├── hooks
   ├── node_modules
   ├── README.md
   ├── package.json
   ├── .gitignore
   ├── .env ←──────────────── here
   └── ...
   ```

2. Add environment variables to .env (note that all variables must begin with EXPO_PUBLIC_)

   ```txt
   EXPO_PUBLIC_BACKEND_PORT=3000
   EXPO_PUBLIC_TAMU_WIFI_HOST=10.247.6.151
   EXPO_PUBLIC_LOCAL_WIFI_HOST=<Your Local WiFi IP>
   ```

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

