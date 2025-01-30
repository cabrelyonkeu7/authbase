const { glob } = require('glob');
const fs = require('fs');
/**
 * Gets all lcov.info files within a directory
 * @param {string} src - The source directory
 * @returns {Promise<string[]>} - An array of lcov.info file paths
 */
const getLcovFiles = async function (src) {
  try {
    const lcovFiles = await glob(`${src}/**/lcov.info`, { ignore: 'node_modules/**' });
    return lcovFiles;
  } catch (error) {
    console.error(error)
    return [];
  }
};
/**
 * Create a lcov.info file in a directory
 * @param {string} directory - Directory to save coverage
 * @param {string} data - Content of lcov.info file
 */
const createCoverageFile = (directory, data) => {
  fs.writeFile(`${directory}/lcov.info`, data, (err) => {
    if (err) {
      console.log('No coverage report generated');
      return;
    }
    console.log('The coverage files has been merged!');
  });
}
/**
 * Merges multiple lcov.info files into a single report
 */
(async function () {
  const coverageDirectory = 'coverage';
  const libsFiles = await getLcovFiles('coverage/libs');
  const packagesFiles = await getLcovFiles('coverage/packages');
  const appsFiles = await getLcovFiles('coverage/apps');
  const files = [...libsFiles, ...packagesFiles, ...appsFiles]
  const mergedReport = files.map((file) => fs.readFileSync(file, 'utf-8')).join('\n');
  fs.stat(coverageDirectory, (err, stats) => {
    if (err && err.code === 'ENOENT') {
      // Coverage Directory doesn't exist so create it
      fs.mkdir(coverageDirectory, { recursive: true }, (error) => {
        if (error) {
          console.error('Error occurred while creating directory:', err);
        } else {
          createCoverageFile(coverageDirectory, mergedReport);
        }
      })
    } else {
      // Coverage Directory already exist
      createCoverageFile(coverageDirectory, mergedReport);
    }
  })
})();