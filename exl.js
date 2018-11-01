const Excel = require("exceljs");

let workbook = new Excel.Workbook();

let arr=[];
workbook.xlsx.readFile("/Users/Olga/Desktop/DataExel3.xlsx")
    .then(function () {

//Get sheet by Name
    let worksheet=workbook.getWorksheet('Sheet2');
    // go through all rows & check for 4th value in the arr( to get prices of all fruits)

    worksheet.eachRow(function(row) {
         if (row.getCell(4).value==='fruit'){
              arr.push( [row.getCell(2).value,row.getCell(3).value] );

         }
    });
    // sort by 2nd value
        arr.sort((a,b)=>a[1]-b[1]);

    });
