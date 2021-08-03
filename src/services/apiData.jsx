export const myHeaders = {
    "Content-Type": "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
  };
  
  export const baseUrl = "https://coding-challenge-api.aerolab.co/";
  
 
  //it calls api and gets data
  export const callApi = async (endpoint, headers) => {
    const response = await fetch(endpoint, { headers });
    const data = await response.json();
    return data;
  };