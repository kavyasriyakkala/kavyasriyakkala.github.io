export default function json2html(data) {
    // Extract all unique keys from the data array to form table headers
    const columns = [...new Set(data.flatMap(Object.keys))];
  
    // Start the HTML table string with the data-user attribute
    let html = `<table data-user="kavyasri1yakkala@gmail.com">`;
    
    // Add table headers
    html += `<thead><tr>${columns.map(col => `<th>${col}</th>`).join('')}</tr></thead>`;
    
    // Add table body rows
    html += `<tbody>`;
    data.forEach(row => {
      html += `<tr>${columns.map(col => `<td>${row[col] || ''}</td>`).join('')}</tr>`;
    });
    html += `</tbody></table>`;
    
    return html;
  }
  