const express = require("express");
const mongoose = require("mongoose");
const Employee = require("./models/employeeModel");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Dude ");
});

app.get("/employees", async (req, res) => {
  try {
    const employees = await Product.find({});
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/emplyees/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Product.findById(id);
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/employees", async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(200).json(employee);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.put("employees/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByIdAndUpdate(id, req.body);
    if (!employee) {
      return res
        .status(404)
        .json({ message: `cannot find employee with ID ${id}` });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://peaceoloruntoba22:Aded@m0la$1@cluster0.yfios4b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("MongoDB Connected Successfully");
    app.listen(3000, () => {
      console.log("I am running");
    });
  })
  .catch((error) => {
    console.log(error);
  });
