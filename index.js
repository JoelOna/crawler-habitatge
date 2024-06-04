require('dotenv').config();
const cheerio = require("cheerio");
const axios = require('axios');

// Function to fetch HTML data from the URL
async function getData() {
    try {
        const response = await axios.get(process.env.URL);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

// Main function to process the HTML
async function main() {
    const html = await getData();
    if (html) {
        const $ = cheerio.load(html);
        $(".ContenidoGral").each((index, element) => {
            const href = $(element).find('a').attr('href');
            if (href) {
                console.log(href);
            } else {
                console.log("No href attribute found for element:", $(element).text());
            }
            console.log($(element).text())
        });
    } else {
        console.log("No se pudo obtener el HTML.");
    }
}

main();
