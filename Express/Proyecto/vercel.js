
[{
    "version":2,
    "builds":[  
        {
            "src":"./listusers.js",
            "use":"@vercel/node"
        }
    ],
    "routes":[
        {
            "src":"/(.*)",
            "dest":"/"
        }
    ]
}]