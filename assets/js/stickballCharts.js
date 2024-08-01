function createPieChart(canvasId, data) {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext('2d');

  // Set the radius and center of the pie chart
  const radius = Math.min(canvas.width, canvas.height) / 2;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  // Calculate the total value of all data points
  const total = data.reduce((sum, point) => sum + point.value, 0);

  // Calculate the total percentage of all data points
  const totalPercentage = data.reduce((sum, point) => sum + (point.value / total) * 100, 0);

  // Start angle for drawing each data point slice
  let startAngle = 0;

  // Iterate over the data points and draw each slice
  data.forEach((point) => {
    // Calculate the percentage for the current data point
    const percentage = (point.value / total) * 100;
    // Calculate the angle for the current slice based on the percentage
    const sliceAngle = (percentage / 100) * 2 * Math.PI;

    // Set the fill color for the current slice
    context.fillStyle = point.color;

    // Draw the slice
    context.beginPath();
    context.moveTo(centerX, centerY);
    context.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
    context.closePath();
    context.fill();

    // Update the start angle for the next slice
    startAngle += sliceAngle;
  });
}

const dataSets = {
  mens01: [
    { value: 146, color: '#ff0000' },
    { value: 0, color: '#c5b4e3' }
  ],
  mens02: [
    { value: 106, color: '#ffffff' },
    { value: 40, color: '#0000ff' }
  ],
  mens03: [
    { value: 5, color: '#00ff00' },
    { value: 141, color: '#ffcc33' }
  ],
  mens04: [
    { value: 5, color: '#800000' },
    { value: 139, color: '#000080' }
  ],
  mens05: [
    { value: 50, color: 'purple' },
    { value: 50, color: 'orange' }
  ],
  mens06: [
    { value: 50, color: '#ff0000' },
    { value: 50, color: '#c5b4e3' }
  ],
  mens07: [
    { value: 50, color: 'purple' },
    { value: 50, color: 'orange' }
  ],
  mens08: [
    { value: 50, color: 'purple' },
    { value: 50, color: 'orange' }
  ],
  mens09: [
    { value: 50, color: 'purple' },
    { value: 50, color: 'orange' }
  ],
  mens10: [
    { value: 50, color: 'purple' },
    { value: 50, color: 'orange' }
  ],
  womens01: [
    { value: 133, color: '#000080' },
    { value: 12, color: '#ff0000' }
  ],
  womens02: [
    { value: 64, color: '#800000' },
    { value: 81, color: '#aaffdd' }
  ],
  womens03: [
    { value: 139, color: '#0000ff' },
    { value: 6, color: '#eaf205' }
  ],
  womens04: [
    { value: 133, color: '#05C7F2' },
    { value: 12, color: '#d3d3d3' }
  ],
  womens05: [
    { value: 109, color: '#ffcc33' },
    { value: 180, color: '#b4d2ff' }
  ],
  womens06: [
    { value: 50, color: 'purple' },
    { value: 50, color: 'orange' }
  ],
  womens07: [
    { value: 50, color: 'purple' },
    { value: 50, color: 'orange' }
  ],
  womens08: [
    { value: 50, color: 'purple' },
    { value: 50, color: 'orange' }
  ],
  womens09: [
    { value: 50, color: 'purple' },
    { value: 50, color: 'orange' }
  ],
  womens10: [
    { value: 50, color: 'purple' },
    { value: 50, color: 'orange' }
  ],
  womens11: [
    { value: 50, color: 'purple' },
    { value: 50, color: 'orange' }
  ],
  womens12: [
    { value: 50, color: 'purple' },
    { value: 50, color: 'orange' }
  ],
  // Add more data sets as needed for other chart IDs
};

function getDataForChart(chartId) {
  return dataSets[chartId] || [];
}

document.addEventListener('DOMContentLoaded', () => {
  const chartIds = ['mens01', 'mens02', 'mens03', 'mens04', 'mens05', 'mens06', 'mens07', 'mens08', 'mens09', 'mens10', 'womens01', 'womens02', 'womens03', 'womens04', 'womens05', 'womens06', 'womens07', 'womens08', 'womens09', 'womens10'];

  chartIds.forEach((chartId) => {
    const chartDiv = document.getElementById(chartId);

    if (chartDiv) {
      const canvasId = `${chartId}-canvas`;
      const canvas = document.createElement('canvas');
      canvas.id = canvasId;
      canvas.width = 250;
      canvas.height = 250;
      chartDiv.appendChild(canvas);

      const data = getDataForChart(chartId);

      createPieChart(canvasId, data);
    }
  });
});
