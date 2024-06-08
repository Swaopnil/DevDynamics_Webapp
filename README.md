## How to Set Up and Run the Project on Windows

This project uses ReactJS, TypeScript, and TailwindCSS. It also requires Node.js version 18 and uses Prettier for code formatting. To get started, follow these steps:

## 1. Install NVM (Node Version Manager) for Windows
   
Step 1: Download NVM for Windows
Go to the nvm-windows releases page.
Download the nvm-setup.zip file for the latest version.
Step 2: Extract and Run the Installer
Extract the downloaded zip file.
Run the nvm-setup.exe installer.
Step 3: Follow Installation Instructions
Follow the prompts in the installer to complete the installation.
Step 4: Check Environment Variables
Open the Start Menu and search for "Environment Variables."
Select "Edit the system environment variables."
In the System Properties window, click on "Environment Variables."
Under "System variables," find and select the Path variable, then click "Edit."
Ensure the path to your NVM installation (e.g., C:\Program Files\nvm) is listed. If not, add it manually.

## 2. Verify NVM Installation
Open a new Command Prompt or PowerShell window.
Run the following command to check if NVM is installed correctly:
nvm --version

## 3. Clone the Git Repository
Open a Command Prompt or PowerShell window.
Navigate to the directory where you want to clone the repository.
Run:
git clone <repository_url>
(Replace <repository_url> with the URL of the repository you want to clone.)


## 4. Set Up Node.js with NVM
Change to the project directory:
cd <project_directory>
(Replace <project_directory> with the name of your project directory.)
nvm use <version>
(mention the version in .nvmrc file)

## 5. Install Project Dependencies
In the project directory, run:
npm install


## 6. Run the Project
Start the development server:
npm run start

Open your web browser and navigate to http://localhost:3000 to see the project running.


## API Calls

Please Note: The OpenWeather API is using an API Key. In the repository you fill find a `.env.example` file which you need to copy/save as `.env` and paste the value of your API key (which you can get when you register on the OpenWeather API website).
