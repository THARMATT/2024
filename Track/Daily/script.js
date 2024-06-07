const fs = require('fs');
const xlsx = require('xlsx');

// Load the Excel file
const filePath = './DSA-Sheet.xlsx';
const workbook = xlsx.readFile(filePath);

// Read the first sheet into a JSON array
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(sheet);

// Convert the data to Markdown format
function dataframeToMarkdown(data) {
    let md = "| Day   | Ques No. | Topic    | Question | Tag  | Time Taken | Remarks |\n";
    md += "|-------|----------|----------|----------|------|------------|---------|\n";

    data.forEach(row => {
        // Extract data from the row
        const day = row['Day'];
        const quesNo = row['Ques No.'];
        const topic = row['Topic'];
        const question = row['Question'];
        const tag = row['Tag'];
        const timeTaken = row['Time Taken'];
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
        md += `| ${day} | ${quesNo} | ${topic} | ${questionMd} | ${tag} | ${timeTaken} | ${remarks} |\n`;
    });

    return md;
}

// Convert the data to markdown format
const markdownContent = dataframeToMarkdown(data);

// Save the markdown content to a README.md file
const outputPath = './Readme.md';
fs.writeFileSync(outputPath, markdownContent);

console.log(markdownContent);
