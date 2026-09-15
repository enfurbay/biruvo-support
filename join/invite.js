'use strict';
const token = window.location.hash.slice(1);
const button = document.getElementById('open');
if (/^[0-9a-f]{64}$/.test(token)) {
  button.href = 'biruvo://invite/' + token;
  button.hidden = false;
} else {
  document.getElementById('message').textContent = 'This invitation link is incomplete. Ask the organizer to share a new link from Biruvo.';
}
