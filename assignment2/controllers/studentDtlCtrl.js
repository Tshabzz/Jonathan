const students = [{
    class: 'SS1',
    name: 'John Doe',
    age: 15
},{
    class: 'SS1',
    name: 'Paul Gotham',
    age: 13
}
]

const data = {
    ss1Students: (req, res)=>{
        res.json(students)
    },
    ss1StudentNames: (req, res)=>{
        let names = students.map((_)=>{return _.name})
        res.json(names)
    },
    ss1StudentClass: (req, res)=>{
        let classes = students.map((_)=>{return _.class})
        res.json(classes)
    },
    ss1StudentAge: (req, res)=>{
        let ages = students.map((_)=>{return _.age})
        res.json(ages)
    },

}

module.exports = data;