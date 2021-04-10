// TODO: Create a function that returns a license badge based on which license is passed in
const noLicense = ``

function renderLicenseBadge(license) {
  if (license === MIT) {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else return noLicense

  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license === MIT) {
      return `<a href = "https://opensource.org/licenses/MIT">License Link</a>`
    } else return noLicense
  }

  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license === MIT) {
      return `Copyright <${data.year}> <${data.name}>

      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
      
    } else return noLicense
  }
  

  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
    
      # Badge: ${renderLicenseBadge(data)}

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
      
      # Instillation
      ${data.install}

      # Usage
      ${data.usage}

      # Contributions
      ${data.contribute}

      # License
      1. Your Badge: ${renderLicenseBadge(data)}
      2. Your Badge README: ${renderLicenseSection(data)}
      3. Your Badge Link: ${renderLicenseLink(data)}
      

      # Testing Instructions
      ${data.test}

      # Questions
      1. <a href = "https://github.com/${data.githubID}">My Github Link</a>
      2. <a href = "https://" + ${data.question2}">My Website</a>
      3. My Email: ${data.email}

`;
  }
}

module.exports = generateMarkdown;