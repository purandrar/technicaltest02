var Object = {
    "staf": [
        {
            "id_mg": "MG1",
            "name": "Samuel",
            "id_st": "STI"
        },
        {
            "id_mg": "MG1",
            "name": "Sebastian",
            "id_st": "ST2"
        },
        {
            "id_mg": "MG2",
            "name": "Jason",
            "id_st": "ST3"
        },
        {
            "id_mg": "MG2",
            "name": "Jordan",
            "id_st": "ST4"
        },
        {
            "id_mg": "MG3",
            "name": "Cooper",
            "id_st": "ST5"
        }
    ],
    "Manager": [
        {
            "company": "Apple",
            "id_mg": "MG1",
            "name": "Tim Cook"
        },
        {
            "company": "Microsoft",
            "id_mg": "MG2",
            "name": "Bill Gates"
        },
        {
            "company": "Facebook",
            "id_mg": "MG1",
            "name": "Tim Cook"
        }
    ]
}
for (const property in Object) {
    for (let i = 0; i < x[property].length; i++) {
        console.log(x[property][i]);
    }
}
