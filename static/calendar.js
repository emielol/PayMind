document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("submit").addEventListener("click", saveReminder);
    var company = "";
    var dateStr = "";
    var price = "";
    function saveReminder() {
        company = document.getElementById('subscriptionName').value;
        dateStr = document.getElementById('date').value;
        price = document.getElementById('price').value;
      };

    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      timeZone: 'UTC',
      initialView: 'multiMonthYear',
      editable: true,
      events: '',
      eventColor: '#378006',
      themeSystem: 'bootstrap5',
      
     
      headerToolbar: {
        center: 'addEventButton'
        },
        customButtons: {
            addEventButton: {
              text: 'Add your Reminder!',
              click: function() {
                
                date = new Date(dateStr + 'T00:00:00'); // will be in local time
      
                if (!isNaN(date.valueOf())) { // valid?
                    
                  calendar.addEvent({
                    title: company + '  Price: ' + price,
                    daysOfWeek: [String(date.getDay())],
                    startRecur: date,
                    allDay: true,
                   groupId: 'blueEvents',

                  });
                  alert('Great!');
                } else {
                  alert('Invalid date.');
                }
              }
            }
          },
          
    });
    
    

  calendar.render();
});
