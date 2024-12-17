const express = require("express");
const cors = require("cors");

let app = express();
app.use(cors());

app.get("/indianCrickterTeam",(req,res)=>{
    let indianCrickterTeamArr=[{Name:"Rohit Sharma",
                                Image:"https://documents.bcci.tv/resizedimageskirti/107_compress.png",
                                RoleImg:"https://www.bcci.tv/img/bat.svg",
                                Role:"Batter",
                                Age:"Age:37",
                                Style:"Style:RHB"
                              },

                                {Name:"Virat Kohli",
                                 Image:"https://documents.bcci.tv/resizedimageskirti/164_compress.png",
                               RoleImg:"https://www.bcci.tv/img/bat.svg",
                                Role:"Batter",
                                Age:"Age:36",
                                Style:"Style:RHB"

                                },
                                {Name:"Jasprit Bumrah",
                                    Image:"https://documents.bcci.tv/resizedimageskirti/1124_compress.png",
                                    RoleImg:"https://www.bcci.tv/img/ball.svg",
                                    Role:"Bowler",
                                    Age:"Age:31",
                                Style:"Style:RHB"
                                },
                                {Name:"Jadeja",
                                    Image:"https://documents.bcci.tv/resizedimageskirti/9_compress.png",
                                    RoleImg:"https://www.bcci.tv/img/all-rounder.svg",
                                    Role:"AllRounder",
                                    Age:"Age:36",
                                Style:"Style:LHB"
                                },
                                {Name:"R.Ashwin",
                                    Image:"https://documents.bcci.tv/resizedimageskirti/8_compress.png",
                                    RoleImg:"https://www.bcci.tv/img/ball.svg",
                                    Role:"Bowler",
                                    Age:"Age:38",
                                Style:"Style:RHB"
                                },
                                {Name:"Siraj",
                                    Image:"https://documents.bcci.tv/resizedimageskirti/3840_compress.png",
                                    RoleImg:"https://www.bcci.tv/img/ball.svg",
                                    Role:"Bowler",
                                    Age:"Age:30",
                                Style:"Style:RHB"
                                },
                                {Name:"Shami",
                                    Image:"https://documents.bcci.tv/resizedimageskirti/94_compress.png",
                                    RoleImg:"https://www.bcci.tv/img/ball.svg",
                                    Role:"Bowler",
                                    Age:"Age:34",
                                Style:"Style:RHB"
                                },
                                {Name:"KL.Rahul",
                                    Image:"https://documents.bcci.tv/resizedimageskirti/1125_compress.png",
                                  RoleImg:  "https://www.bcci.tv/img/plyr-keeper.svg",
                                  Role:"Wicket Keeper",
                                  Age:"Age:32",
                                Style:"Style:RHB"
                                }
    ]

    res.json(indianCrickterTeamArr);

})

app.listen(8090,()=>{
    console.log("Listening to port 8090")
})