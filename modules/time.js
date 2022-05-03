import { DateTime } from './luxon.js';

const currenttime = (daytime) => {
  let now = DateTime.now();
  now = now.toLocaleString({
    month: 'long', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit',
  });
  daytime.textContent = now;
  setTimeout(() => { currenttime(daytime); }, 1000);
};

export default currenttime;