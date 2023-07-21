var point_JSON={
    type: "FeatureCollection",
    name: "point_bhaktapur",
    crs: { type: "name", properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    features: [
        {
            type: "Feature",
            properties: {
                PROJECT_NAME: "Z",
                project_type: "school",
                consultant_name: "padma",
                start_date: "2020-1-12",
                finish_date: "2021-9-15",
                budget: 10000000,
                contact_person_name: "ABC",
                contact_no: 9751246855,
                project_brief: "it is finished.",
                project_progress: "100%",
                images: "./new bkt/abc.png"
            },
            geometry: {
                type: "Point",
                coordinates: [
                    85.4408025741577,
                    27.672692024816637
                ]
            }
        },
        {
            type: "Feature",
            properties: {
                PROJECT_NAME: "A",
                project_type: "building",
                consultant_name: "Madan",
                start_date: "2021-5-4",
                finish_date: "not finished",
                budget: 20000000,
                contact_person_name: "XYZ",
                contact_no: 9741562382,
                project_brief: "it is on going project.",
                project_progress: "80%"
            },
            geometry: {
                type: "Point",
                coordinates: [
                    85.44163942337036,
                    27.673186107885215
                ]
            }
        },
        {
            type: "Feature",
            properties: {
                PROJECT_NAME: "B",
                project_type: "road",
                consultant_name: "Nitu",
                start_date: "2022-1-25",
                finish_date: "not finished",
                budget: 20000000,
                contact_person_name: "PQR",
                contact_no: 9881265784,
                project_brief: "it is ongoing project.",
                project_progress: "60%"
            },
            geometry: {
                type: "Point",
                coordinates: [
                    85.44195055961607,
                    27.672226444495806
                ]
            }
        },
        {
            type: "Feature",
            properties: {
                PROJECT_NAME: "C",
                project_type: "park",
                consultant_name: "Gyan",
                start_date: "2019-6-18",
                finish_date: "2021-5-12",
                budget: 15000000,
                contact_person_name: "MNO",
                contact_no: 9841256498,
                project_brief: "the work is finished at the site.",
                project_progress: "100%"
            },
            geometry: {
                type: "Point",
                coordinates: [
                    85.44088304042815,
                    27.671713353681053
                ]
            }
        }
    ]
}