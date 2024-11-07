document.addEventListener('DOMContentLoaded', () => {
    const datetimeElement = document.getElementById('datetime');
    const refreshBtn = document.getElementById('refreshBtn');
    const formatToggleBtn = document.getElementById('formatToggleBtn');
    const timezoneSelect = document.getElementById('timezoneSelect');
  
    let is24HourFormat = false;
  
    function updateDateTime() {
      const now = new Date();
      const timezone = timezoneSelect.value;
      let formattedDate;
  
      if (timezone === 'local') {
        formattedDate = formatDateTime(now);
      } else {
        formattedDate = formatDateTime(new Date(now.toLocaleString('en-US', { timeZone: timezone })));
      }
  
      datetimeElement.textContent = formattedDate;
    }
  
    function formatDateTime(date) {
      const options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: !is24HourFormat,
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      return date.toLocaleString('en-US', options);
    }
  
    refreshBtn.addEventListener('click', updateDateTime);
    formatToggleBtn.addEventListener('click', () => {
      is24HourFormat = !is24HourFormat;
      updateDateTime();
    });
    timezoneSelect.addEventListener('change', updateDateTime);
  
    // Initial load
    updateDateTime();
  });
  