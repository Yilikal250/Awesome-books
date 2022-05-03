export const hidemsga = (messages1) => {
  messages1.classList.add('active');
  setTimeout(() => { messages1.classList.remove('active'); }, 2000);
};
export const hidemsgb = (messages2) => {
  messages2.classList.add('active');
  setTimeout(() => { messages2.classList.remove('active'); }, 2000);
};
export const hidemsgc = (messages3) => {
  messages3.classList.add('active');
  setTimeout(() => { messages3.classList.remove('active'); }, 2000);
};