// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Switch statement to determine the appropriate license badge based on the provided license
  switch (license) {
    case 'The MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'The GPL license':
      return '[![License: GPL](https://img.shields.io/badge/License-GPL-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache license':
      return '[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GMU license':
      return '[![License: GMU](https://img.shields.io/badge/License-GMU-green.svg)](https://example.com/gmu-license)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Switch statement to determine the appropriate license link based on the provided license
  switch (license) {
    case 'The MIT License':
      return 'https://opensource.org/licenses/MIT';
    case 'The GPL license':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'Apache license':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GMU license':
      return 'https://example.com/gmu-license';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
// Check if the license is empty or 'N/A'
  if (!license || license === 'N/A') {
// If there is no license, return an empty string (no license section needed)
    return '';
  }
  // Get the license section and link using these functions below
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  
  // create  a license section based on the provided license
    return `## License
  
  This project is licensed under the ${license} License. ${licenseBadge} Click [here](${licenseLink}) for more details.`;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Create a markdown content for the readMe file using the provided data
  return `
  ## Description
  ${data.title}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#test)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation || ''}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.credits}
  
  ## Tests
  ${data.test}
  
  ## Questions
  For any additional questions, you can reach out to me via:
  - GitHub: [${data.git}](https://github.com/${data.git})
  - Email: ${data.email}

`;
}

module.exports = generateMarkdown;
