const fs = require('fs');
const xlsx = require('xlsx');

// Load the Excel file
const filePath = './DSA-Sheet.xlsx';
const workbook = xlsx.readFile(filePath);

// Read the first sheet into a JSON array
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(sheet);

// Function to convert Excel date to JS date string
function excelDateToJSDate(excelDate) {
    const date = new Date(Math.floor((excelDate - (25567 + 1)) * 86400 * 1000));
    return date.toISOString().split('T')[0]; // Convert to YYYY-MM-DD format
}

// Function to convert fractional day to time string
function fractionalDayToTime(fraction) {
    const totalSeconds = Math.round(fraction * 86400); // Convert fractional day to total seconds
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Convert the data to Markdown format
function dataframeToMarkdown(data) {
    let md = "| Date       | Topic    | Question | Tag  | Time Taken | Remarks |\n";
    md += "|------------|----------|----------|------|------------|---------|\n";

    data.forEach(row => {
        // Extract data from the row
        const date = excelDateToJSDate(row['Date']);
        const topic = row['Topic'];
        const question = row['Question'];
        const tag = row['Tag'];
        const timeTaken = fractionalDayToTime(row['Time Taken']);
        const remarks = row['REMARKS'];

        // Construct the question link if the format is correct
        const questionParts = question.split(". ");
        let questionMd;
        if (questionParts.length > 1) {
            const questionTitle = questionParts[1];
            const questionLink = `https://leetcode.com/problems/${questionTitle.toLowerCase().split(' ').join('-')}/`;
            questionMd = `[${question}](${questionLink})`;
        } else {
            questionMd = question;
        }

        // Append the row to the markdown string
        md += `| ${date} | ${topic} | ${questionMd} | ${tag} | ${timeTaken} | ${remarks} |\n`;
    });

    return md;
}

// Convert the data to markdown format
const markdownContent = dataframeToMarkdown(data);

// Save the markdown content to a README.md file
const outputPath = './Readme.md';
fs.writeFileSync(outputPath, markdownContent);

console.log(markdownContent);
