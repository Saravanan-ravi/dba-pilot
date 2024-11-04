import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Chart from 'chart.js/auto';
import { registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import the plugin
import { ChartOptions, ChartData, TooltipItem } from 'chart.js'; // Import required types
import { DatePipe } from '@angular/common';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


Chart.register(...registerables, ChartDataLabels);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  public barChart: any;
  public pieChart: any;
  public lineChart: any;
  dayWiseData: any = [];
  sortDateWise: any = [];
  countPDF: any;
  PDFcount: any;
  textCount: any;
  grandtotaltext: any;

  dayWiseData5: any = [];
  countPDF5: any;
  PDFcount5: any;
  textCount5: any;
  grandtotaltext5: any;

  constructor(private httpClient: HttpClient, private datePipe: DatePipe) { }

  ngOnInit() {
    this.DayWise();
    this.lastFiveDays();
  }

  DayWise() {
    this.httpClient.get<any>('/eqrequestapi/getDayWise').subscribe(
      response => {
        this.dayWiseData = response;
        this.textCount = this.dayWiseData.countpnr;
        this.PDFcount = this.dayWiseData.countpage;
        this.countPDF = this.dayWiseData.countPdf;
        this.grandtotaltext = this.dayWiseData.totalpnr;
        //  console.log("DayWise", this.dayWiseData);

        // Update Charts
        this.updateBarChart();
        this.updatePieChart();
        this.updateLineChart();

      },
      error => {
        console.error('Error fetching status counts:', error);
      }
    );
  }

  lastFiveDays() {
    this.httpClient.get<any>('/eqrequestapi/getLastFiveDays').subscribe(
      response => {
        this.dayWiseData5 = response;
        this.textCount5 = this.dayWiseData5.countpnr;
        this.PDFcount5 = this.dayWiseData5.countpage;
        this.countPDF5 = this.dayWiseData5.countPdf;
        this.grandtotaltext5 = this.dayWiseData5.totalpnr;

        this.sortDateWise = response.sort((a, b) => new Date(b.Daywise).getTime() - new Date(a.Daywise).getTime());
        // console.log("last5DaysWise", this.dayWiseData5);

        // Update Charts
        this.updateLineChart();

      },
      error => {
        console.error('Error fetching status counts:', error);
      }
    );
  }

  ngOnDestroy() {
    if (this.barChart) this.barChart.destroy();
    if (this.pieChart) this.pieChart.destroy();
    if (this.lineChart) this.lineChart.destroy();
  }


  updateBarChart() {
    if (this.barChart) {
      this.barChart.destroy();
    }

    this.barChart = new Chart("MyBarChart", {
      type: 'bar',
      data: {
        labels: ['Categories'], // Single label for the entire dataset
        datasets: [
          {
            label: "Count PDF",
            data: [this.countPDF], // Single data point for Count PDF
            backgroundColor: 'blue'
          },
          {
            label: "Count Page",
            data: [this.PDFcount], // Single data point for Count Page
            backgroundColor: 'limegreen'
          },
          {
            label: "Count PNR",
            data: [this.textCount], // Single data point for Count PNR
            backgroundColor: 'orange'
          },
          {
            label: "Total PNR",
            data: [this.grandtotaltext], // Single data point for Total PNR
            backgroundColor: 'purple'
          }
        ]
      },
      options: {
        aspectRatio: 2,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top', // Position legend at the top
            labels: {
              font: {
                size: 8 // Adjust the font size of the legend labels
              }
            }
          }
        }
      }
    });
  }


  updatePieChart() {
    if (this.pieChart) {
      this.pieChart.destroy();
    }
    this.pieChart = new Chart("MyPieChart", {
      type: 'pie',
      data: {
        labels: ['Count PDF', 'Count Page', 'Count PNR', 'Total PNR'],
        datasets: [{
          label: "Daywise Data (Pie)",
          data: [this.countPDF, this.PDFcount, this.textCount, this.grandtotaltext].map(Number), // Ensure all values are numbers
          backgroundColor: ['blue', 'limegreen', 'orange', 'purple']
        }]
      },
      options: {
        aspectRatio: 2,
        layout: {
          padding: {
            top: 40,
            bottom: 30
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'right' // Position legend at the bottom
          },
          datalabels: {
            formatter: (value, context) => {
              const data = context.chart.data.datasets[0].data as number[]; // Cast to number array
              const total = data.reduce((acc, val) => acc + val, 0); // Sum the numbers
              const percentage = ((value / total) * 100).toFixed(2) + '%'; // Safely calculate the percentage
              return percentage; // Return the percentage as a string
            },
            color: 'red', // Change label color
            align: 'end',
            anchor: 'end',
            font: {
              weight: 'bold'
            },
            textAlign: 'center',
            borderColor: 'white', // Change the line color
            borderWidth: 1, // Customize the line width
            offset: 5 // Increase the distance of labels from the slices
          }
        }
      },
      plugins: [ChartDataLabels] // Register the plugin outside options
    });
  }



  updateLineChartf() {
    // Destroy the previous line chart instance if it exists
    if (this.lineChart) this.lineChart.destroy();

    // Create the new line chart
    this.lineChart = new Chart("MyLineChart", {
      type: 'line',
      data: {
        labels: ['Data Point 1', 'Data Point 2', 'Data Point 3', 'Data Point 4'], // Adjust as needed for your x-axis
        datasets: [
          {
            label: "PDF Count",
            data: [this.countPDF, this.countPDF + 5, this.countPDF - 3, this.countPDF + 2], // Sample data points for each label
            backgroundColor: 'blue',
            borderColor: 'blue',
            fill: false,
            tension: 0.3
          },
          {
            label: "Page Count",
            data: [this.PDFcount, this.PDFcount + 4, this.PDFcount - 2, this.PDFcount + 3],
            backgroundColor: 'green',
            borderColor: 'green',
            fill: false,
            tension: 0.3
          },
          {
            label: "PNR Count",
            data: [this.textCount, this.textCount + 3, this.textCount - 1, this.textCount + 4],
            backgroundColor: 'orange',
            borderColor: 'orange',
            fill: false,
            tension: 0.3
          },
          {
            label: "Total PNR",
            data: [this.grandtotaltext, this.grandtotaltext + 2, this.grandtotaltext - 4, this.grandtotaltext + 1],
            backgroundColor: 'purple',
            borderColor: 'purple',
            fill: false,
            tension: 0.3
          }
        ]
      },
      options: {
        aspectRatio: 1.5,
        scales: {
          y: { beginAtZero: true }
        },
        plugins: {
          legend: { display: true }
        }
      }
    });
  }

  updateLineChart() {
    if (this.lineChart) this.lineChart.destroy();

    const labels = this.dayWiseData5.slice(-5).map(day =>
      this.datePipe.transform(day.Daywise, 'dd-MM-yy') || '');
    const countPdfData = this.dayWiseData5.slice(-5).map(day => day.countPdf || 0);
    const countPageData = this.dayWiseData5.slice(-5).map(day => day.countpage || 0);
    const countPnrData = this.dayWiseData5.slice(-5).map(day => day.countpnr || 0);
    const totalPnrData = this.dayWiseData5.slice(-5).map(day => day.totalpnr || 0);

    this.lineChart = new Chart("MyLineChart", {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: "Count PDF",
            data: countPdfData,
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            borderColor: 'blue',
            fill: true,
            tension: 0.3
          },
          {
            label: "Count Page",
            data: countPageData,
            backgroundColor: 'rgba(40, 167, 69, 0.2)',
            borderColor: 'green',
            fill: true,
            tension: 0.3
          },
          {
            label: "Count PNR",
            data: countPnrData,
            backgroundColor: 'rgba(255, 193, 7, 0.2)',
            borderColor: 'orange',
            fill: true,
            tension: 0.3
          },
          {
            label: "Total PNR",
            data: totalPnrData,
            backgroundColor: 'rgba(220, 53, 69, 0.2)',
            borderColor: 'purple',
            fill: true,
            tension: 0.3
          }
        ]
      },
      options: {
        aspectRatio: 1.5,
        scales: {
          y: {
            beginAtZero: true,
            min: 1,
            max: 60,
            ticks: {
              stepSize: 10
            }
          },
          x: {
            title: {
              display: true,
              text: 'Date-wise'
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              font: {
                size: 8
              }
            }
          }
        }
      }
    });
  }

  refresh() {
    window.location.reload();
  }

  // Function to download Excel
  last5DaysToExcel(): void {
    const dataToExport = this.dayWiseData5.map((item, index) => ({
      'Sl. No': index + 1,
      'Dates': new Date(item.Daywise).toLocaleString(),
      'PDF Count': item.countPdf,
      'Page Count': item.countpage,
      'PNR Count': item.countpnr,
      'Total PNR': item.totalpnr,
    }));

    const date = new Date().toLocaleDateString('en-GB');
    const time = new Date().toLocaleTimeString('en-GB');
    var dateAndTime = `${date} ${time}`;

    // Create a worksheet and workbook
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Last 5 Days Report');

    // Trigger the file download
    XLSX.writeFile(wb, 'Last 5 Days Report_' + `${dateAndTime}` + '.xlsx');
  }

  // Function to download PDF
  last5DaysToPDF(): void {
    const doc = new jsPDF();
    const columns = ['Sl. No', 'Dates', 'PDF Count', 'Page Count', 'PNR Count', 'Total PNR'];
    const rows: any[] = [];

    this.dayWiseData5.forEach((item, index) => {
      rows.push([
        index + 1,
        new Date(item.createdAt).toLocaleString(),
        item.Daywise,
        item.countPdf,
        item.countpage,
        item.countpnr,
        item.totalpnr,

      ]);
    });
    const date = new Date().toLocaleDateString('en-GB');
    const time = new Date().toLocaleTimeString('en-GB');
    var dateAndTime = `${date} ${time}`;

    // Add a title to the PDF
    doc.text('Last 5 Days Report ' + dateAndTime, 14, 10);

    // Add the table using autoTable plugin
    (doc as any).autoTable({
      head: [columns],
      body: rows,
      startY: 20,
    });

    // Save the PDF file
    doc.save('Last 5 Days Report_' + dateAndTime + '.pdf');
  }
}