export const summaryDonations = (donations) => (
  donations.reduce((accumulator, value) => (accumulator + (value || 0)), 0)
);

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};