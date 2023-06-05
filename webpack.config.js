const path = require('path');

module.exports = {
    entry: {
        server: './server/index.js', // Replace with your server entry file
        html: './public/index.html' // Replace with the correct path to your HTML file
    },
    output: {
        filename: 'built.js',
        path: path.resolve(__dirname, 'dist') // Replace 'dist' with your desired output folder name
    }
};