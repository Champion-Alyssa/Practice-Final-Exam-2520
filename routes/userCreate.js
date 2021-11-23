const router = express.Router();
const express = require("express");
let { database } = require("../database.json")

router.post("/create", (req,res) => {
    function submitData (event){
        let newUser = new FormData(event.target);
        const value = data.get('fullName');
        console.log({value});
    }
    const form = document.querySelector('form');
    form.addEventListener('submit', submitData);
})
