export const summaryDonations = (donations) => (
  donations.reduce((accumulator, value) => (accumulator + (value || 0)), 0)
);
