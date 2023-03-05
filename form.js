function getForm() {
    const webhookURL = 'https://discord.com/api/webhooks/1081996091257524329/RxnXhqNI6rhrNbylQldTAQwxd_a6KhvwRQSnsi3vfuLuwwCjSioU8LXoP3fgws1NVbJE';
    const name = document.getElementById("Name").value;
    const phone = document.getElementById("Phone-Number").value;
    const address = document.getElementById("Address").value;
    const email = document.getElementById("Email").value;
    const service = document.getElementById("Requested-service").value;
    const dayOfService = document.getElementById("Day-of-service").value;
    const message = document.getElementById("Message").value;
  
    const payload = {
      content: `
----------------------------------------------------------------------
New service request from **${name}**
Phone: **${phone}**
Address: **${address}**
Email: **${email}**
Service: **${service}**
Day of Service: **${dayOfService}**
Message: ${message}
----------------------------------------------------------------------
`
    };
  
    fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to send message to Discord webhook');
      }
      console.log('Message sent to Discord webhook');
    })
    .catch(error => {
      console.error(error);
    });
  }
