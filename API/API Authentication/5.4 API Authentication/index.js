import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "sreeraj_sree";
const yourPassword = "Sreeraj@2024";
const yourAPIKey = "c1936ec0-e7e1-48a6-913e-e850738c687c";
const yourBearerToken = "73c41ef6-6843-42fb-9d66-8f12f5f41458";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async(req, res) => {
  try{
    const result = await axios.get(API_URL + "random")
    console.log(response.data)
    res.render("index.ejs", {content: JSON.stringify(result.data)})
  }
  catch(error){
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    })
  }
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", async(req, res) => {
  try{
    const response = await axios.get(`${API_URL}/all?page=2`,
    {},
    { auth: {
        username: username,
        password: password,
      }
    }
);
res.render("index.ejs", {content: JSON.stringify(response.data)})
  } catch (error){
    res.status(404).send(error.message)
  }
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
});

app.get("/apiKey", (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

app.get("/bearerToken", (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
