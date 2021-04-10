// TODO: Create a function that returns a license badge based on which license is passed in
const noLicense = ``

function renderLicenseBadge(license) {
  if (license === `MIT`) {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else return noLicense
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === `MIT`) {
    return `<a href = "https://opensource.org/licenses/MIT">License Link</a>`
  } else return noLicense
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === `MIT`) {
    return `This project is licensed under MIT`

  } else return noLicense
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    
      # Badge: ${renderLicenseBadge(data.license)}

      # Table of Contents
      1. Description(#description)
      2. Technologies Used(#tech)
      3. Installation(#install)
      4. Usage(#usage)
      5. Contributions(#contribute)
      6. License(#license)
      7. Testing Instructions(#test)
      8. Questions(#questions)

      # Description
      ${data.description}

      # Technologies Used
      ${data.tech}
      
      # Installation
      ${data.install}

      # Usage
      ${data.usage}

      # Contributions
      ${data.contribute}

      # License
      ${renderLicenseSection(data.license)}

      # Testing Instructions
      ${data.test}

      # Questions
      1. My Github Profile: "https://github.com/${data.githubID}"
      2. My Website: "https://" + ${data.website}"
      3. My Email: ${data.email}

`;
}


module.exports = generateMarkdown;