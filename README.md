This repository is using ReactJS, TypeScript and TailwindCSS. It also runs on node 18 (see .nvmrc) and has a formatter - prettier. If you're running this for the first time - please ensure you have nvm (node version manager).

## How To Run

If you don't have nvm installed, run the following command:
Steps to Install and Set Up nvm-windows
Download nvm-windows:

Go to the nvm-windows releases page and download the nvm-setup.zip file for the latest version.
Extract and Run the Installer:

Extract the downloaded zip file and run the nvm-setup.exe installer.
Follow Installation Instructions:

Follow the prompts provided by the installer to complete the installation.
Check Environment Variables:

Ensure that the path to the nvm executable is added to your system's PATH environment variable. This is typically handled by the installer, but you can verify it manually:

Open the Start Menu and search for "Environment Variables" and select "Edit the system environment variables."
In the System Properties window, click on "Environment Variables."
Under "System variables," find and select the Path variable, then click "Edit."
Ensure that the path to your nvm installation (e.g., C:\Program Files\nvm) is listed. If not, add it.
Open a New Command Prompt or PowerShell:

After installation and ensuring the PATH is set correctly, open a new Command Prompt or PowerShell window (to make sure the environment variables are reloaded).
Verify Installation:

Run the following command to verify that nvm is installed correctly:
sh nvm version
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`
After you got nvm installed on your machine, run `nvm i` and then `nvm use` (to have the correct nodeJs version)

Once you have the correct node version, run `npm i` to get all the required dependencies installed

After everything is installed, run `npm run start` and navigate to http://localhost:3000

## API Calls

Please Note: The OpenWeather API is using an API Key. In the repository you fill find a `.env.example` file which you need to copy/save as `.env` and paste the value of your API key (which you can get when you register on the OpenWeather API website).
