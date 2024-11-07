export default function json2html(data) {
    const columns = [...new Set(data.flatMap(Object.keys))];
  
    let html = `<table data-user="kavyasri1yakkala@gmail.com">`;
    
    html += `<thead><tr>${columns.map(col => `<th>${col}</th>`).join('')}</tr></thead>`;
    
    html += `<tbody>`;
    data.forEach(row => {
      html += `<tr>${columns.map(col => `<td>${row[col] || ''}</td>`).join('')}</tr>`;
    });
    html += `</tbody></table>`;
    
    return html;
  }
  