// Dummy API call for development use - eventually this file will be used to communicate with the backend.
// Send the desired response as a parameter and it will be returned after a delay.
export const apiCall = (response) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response);
    }, 500);
  });
};
