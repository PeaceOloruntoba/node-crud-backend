const  mongoose = require("mongoose");

const employeeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter employee name."]
        },
        role: {
            type: String,
            required: [true, "Please state employee role"]
        },
        salary: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
)

const Employee = mongoose.model('employee', employeeSchema)

module.exports = Employee