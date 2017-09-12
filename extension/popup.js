$(() => {
  let sidebarOpen = false;
  let sidebarVisible = false;
  let bulletVisble = false;
  const hashshown = false;
  chrome.tabs.query({
    active: true,
    currentWindow: true,
  }, (tabs) => {
    const sendMessage = function (type, data, callback) {
      chrome.tabs.sendMessage(tabs[0].id, {
        type,
        data,
      }, (response) => {
        if (callback) {
          callback(response);
        }
      });
    };


    sendMessage('getStatus', { url: tabs[0].url }, (status) => {
      if (status.sidebarOpen) {
        $('.connectBtn').text('Disconncet');
        if (status.sidebarVisible) {
          $('.visibleBtn').text('Hide Chat').removeAttr('disabled');
        } else {
          $('.visibleBtn').text('Show Chat').removeAttr('disabled');
        }
        if (status.bulletbarVisible) {
          $('.bulletModeBtn').text('Hide Bullet Mode').removeAttr('disabled');
        } else {
          $('.bulletModeBtn').text('Show Bullet Mode').removeAttr('disabled');
        }
      }

      if (hashshown == false) {
        const qrobj = { width: 64, height: 64, text: `http://54.213.44.54:3000/#/chat/${status.hash}` };
        jQuery('#qrcode').qrcode(qrobj);
      }

      $('.connectBtn').click(() => {
        sidebarOpen = !sidebarOpen;
        sidebarVisible = !sidebarVisible;
        sendMessage('connect', {
          url: tabs[0].url,
        }, null);

        if (sidebarOpen) {
          $('.connectBtn').text('Disconncet');
          $('.visibleBtn').text('Hide Chat').removeAttr('disabled');
          $('.bulletModeBtn').text('Show Bullet Mode').removeAttr('disabled');
        } else {
          $('.connectBtn').text('Conncet');
          $('.visibleBtn').text('Show Chat').attr('disabled', true);
          $('.bulletModeBtn').text('Show Bullet Mode').attr('disabled', true);
        }
      });

      $('.visibleBtn').click(() => {
        sidebarVisible = !sidebarVisible;
        sendMessage('showChat', {
          url: tabs[0].url,
        }), null;
        if (sidebarVisible) {
          $('.visibleBtn').text('Hide Chat');
        } else {
          $('.visibleBtn').text('Show Chat');
        }
      });


      $('.bulletModeBtn').click(() => {
        bulletVisble = !bulletVisble;
        sendMessage('bulletMode', {
          url: tabs[0].url,
        }, null);
        if (bulletVisble) {
          $('.bulletModeBtn').text('Hide Bullet Mode');
        } else {
          $('.bulletModeBtn').text('Show Bullet Mode');
        }
      });
    });
  });
});
