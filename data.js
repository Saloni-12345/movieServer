let languages = ["Hindi","English","Telugu","Tamil"];
let format = ["2D","3D","4DX"];
let generation = ["Action","Adventure","Biography","Comedy"];
let cities = ["NCR","Ahmedabad","Banglore","Chennai","Mumbai","Hyderabad"];
let date = new Date();
let today = date.getDate();
let month = date.toLocaleDateString("default",{month:"short"});
let moviesData = [
    {    
        id : 25,
        title:"Kisi Ka Bhai Kisi Ki Jaan",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni43LzEwICA2NC4zSyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00339118-gvcavdpszx-portrait.jpg",  
        typeOf : ["Action","Comedy","Drama"],
        languages:["Hindi"],
        creater:"UA",
        rating:"6.7/10",
        votes:"64.3K",
        cityBookSlot:[        
            {dateID: 01, date: today, month:month,timingSlots:[
                {  place:"Chinepolis: DLF Place, Saket",like:false , timingAvailable:[
                    { time: "09:00 AM", price: 90 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]
                    },{ time: "12:00 PM", price: 120 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[6,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}, { time: "01:15 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,12,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 130 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]},
                {  place:"Chinepolis: Cross River Mall, Shahdara",like:false,  timingAvailable:[
                    { time: "09:00 AM", price: 190 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 100 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,9,15,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,5,9,11,16,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time:"06:30 PM", price: 200,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,12,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[5,13,18,22]},
                        ]}]},
                    { time: "11:20 PM", price: 300,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[9,12,16,20,25]},
                          { seatName: "E", totalSeat:22, booked:[5,8,11]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,6,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[11,15,18,22]},
                        ]}] }
                ]},
                {  place:"Carnival: TGIP",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 320 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:25, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:25, booked:[3,7,13,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 210 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[4,6,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:20, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},
                    { time: "06:40 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]}
            ]},
            {dateID: 02 ,date: +today+1, month: month ,timingSlots:[
                {  place:"Govinda: RGT Place",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 150 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
                        ]}]},{ time: "12:00 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[6,12,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 210 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]},
                {  place:"Chinepolis: Cross River Mall, Shahdara",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 270,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 110 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 340,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                    { time: "05:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}
                ]},
                {  place:"Carnival: TGIP",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 290 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 300 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 320 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]}
            ]},
            {dateID: 03,date: +today+2 , month:month,timingSlots:[
                {  place:"Lulu Mall, Laj Pat Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 160 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 190,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] }, { time: "01:15 PM", price: 180 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},{ time: "03:00 PM", price: 170 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                    { time: "06:00 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]},
                {  place:"Chinepolis: Cross River Mall, Shahdara",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 342 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 347,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                ]},
                {  place:"Carnival: TGIP",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]}
            ]}
         ], 
        cities:["Mumbai","NCR","Ahmedabad","Banglore","Chennai","Hyderabad"],
        format:["2D"]
    },
    {    
        id : 24,
        title:"Fast X",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjUxSyBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00122562-zsaqxdtsqe-portrait.jpg",
        typeOf : ["Action","Adventure","Crime","Thriller"],
        languages:["English","Hindi","Tamil","Telugu"],
        creater:"UA",
        rating:"6.7/10",
        votes:"64.3K",
        cityBookSlot:[        
            {dateID: 01, date: today, month:month,timingSlots:[
                {  place:"Kathy: White Place, Saket",like:false , timingAvailable:[
                    { time: "09:00 AM", price: 90 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]
                    },{ time: "12:00 PM", price: 120 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[6,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}, { time: "01:15 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,12,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 130 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]},
                {  place:"Lulu Mall, Shahdara Nagar",like:false,  timingAvailable:[
                    { time: "09:00 AM", price: 190 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 100 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,9,15,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,5,9,11,16,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time:"06:30 PM", price: 200,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,12,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[5,13,18,22]},
                        ]}]},
                    { time: "11:20 PM", price: 300,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[9,12,16,20,25]},
                          { seatName: "E", totalSeat:22, booked:[5,8,11]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,6,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[11,15,18,22]},
                        ]}] }
                ]},
                {  place:"Rajdhani Marg: Near Kotok Bank",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 320 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:25, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:25, booked:[3,7,13,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 210 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[4,6,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:20, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},
                    { time: "06:40 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]}
            ]},
            {dateID: 02 ,date: +today+1, month: month ,timingSlots:[
                {  place:"Govind Nagar, Near Ambedkar park",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 150 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
                        ]}]},{ time: "12:00 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[6,12,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 210 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]},
                {  place:"Lulu Mall, Krishna nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 270,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 110 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 340,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                    { time: "05:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}
                ]},
                {  place:"Ram Nagar, Mohini takeej",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 290 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 300 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 320 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]}
            ]},
            {dateID: 03,date: +today+2 , month:month,timingSlots:[
                {  place:"Chinepolis: DLF Place, Saket",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 160 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 190,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] }, { time: "01:15 PM", price: 180 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},{ time: "03:00 PM", price: 170 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                    { time: "06:00 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]},
                {  place:"Chinepolis: Cross River Mall, Shahdara",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 342 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 347,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                ]},
                {  place:"Carnival: Raj Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]}
            ]}
         ], 
        cities:["Mumbai","NCR","Ahmedabad","Banglore","Chennai","Hyderabad"],
        format:["2D","3D","IMAX 3D","4DX","4DX 3D"]
    },
    {    
        id : 23,
        title:"Ponniyin Selvan - Part 2",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC44LzEwICAyMC4ySyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00348725-ftkedqllrt-portrait.jpg",
        typeOf : ["Action","Adventure","Drama","Historical"],
        languages:["Hindi","Tamil","Telugu","Kannada","Malayalam"],
        creater:"U",
        rating:"6.7/10",
        votes:"64.3K",
        cityBookSlot:[        
            {dateID: 01, date: today, month:month,timingSlots:[
                {  place:"Aryavart Nagar, Joohu mall",like:false , timingAvailable:[
                    { time: "09:00 AM", price: 90 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]
                    },{ time: "12:00 PM", price: 120 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[6,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}, { time: "01:15 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,12,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 130 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]},
                {  place:"Saket Nagar, Near Soft Pro Company",like:false,  timingAvailable:[
                    { time: "09:00 AM", price: 190 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 100 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,9,15,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,5,9,11,16,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time:"06:30 PM", price: 200,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,12,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[5,13,18,22]},
                        ]}]},
                    { time: "11:20 PM", price: 300,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[9,12,16,20,25]},
                          { seatName: "E", totalSeat:22, booked:[5,8,11]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,6,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[11,15,18,22]},
                        ]}] }
                ]},
                {  place:"Gandhi Nagar, Malala Chaurah",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 320 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:25, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:25, booked:[3,7,13,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 210 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[4,6,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:20, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},
                    { time: "06:40 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]}
            ]},
            {dateID: 02 ,date: +today+1, month: month ,timingSlots:[
                {  place:"Deepo Mall, Sakti Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 150 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
                        ]}]},{ time: "12:00 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[6,12,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 210 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]},
                {  place:"Hajrat Jhan road, Krishna Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 270,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 110 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 340,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                    { time: "05:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}
                ]},
                {  place:"Surya Nagar, Near Chai Sai",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 290 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 300 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 320 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]}
            ]},
            {dateID: 03,date: +today+2 , month:month,timingSlots:[
                {  place:"Mohan Nagar, Kamukh Mall",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 160 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 190,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] }, { time: "01:15 PM", price: 180 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},{ time: "03:00 PM", price: 170 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                    { time: "06:00 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]},
                {  place:"Mohan Nagar, Kamukh Mall",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 342 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 347,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                ]},
                {  place:"Hina River Mall, Govind Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]}
            ]}
         ], 
        cities:["Mumbai","NCR","Ahmedabad","Banglore","Chennai","Hyderabad"],
        format:["2D","4DX"]
    },
    {    
        id : 22,
        title:"Agent",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni8xMCAgMTEuNUsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00310078-fkyazsqyfj-portrait.jpg",
        typeOf : ["Action","Thriller"],
        languages:["Malayalam","Telugu"],
        creater:"UA",
        rating:"6.7/10",
        votes:"64.3K",
        cityBookSlot:[        
            {dateID: 01, date: today, month:month,timingSlots:[
                {  place:"Shyam Nagar, Hajrat Chaurah",like:false , timingAvailable:[
                    { time: "09:00 AM", price: 90 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]
                    },{ time: "12:00 PM", price: 120 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[6,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}, { time: "01:15 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,12,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 130 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]},
                {  place:"Chinepolis: Cross River Mall, Shahdara",like:false,  timingAvailable:[
                    { time: "09:00 AM", price: 190 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 100 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,9,15,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,5,9,11,16,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time:"06:30 PM", price: 200,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,12,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[5,13,18,22]},
                        ]}]},
                    { time: "11:20 PM", price: 300,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[9,12,16,20,25]},
                          { seatName: "E", totalSeat:22, booked:[5,8,11]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,6,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[11,15,18,22]},
                        ]}] }
                ]},
                {  place:"Sakshi Kamukh Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 320 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:25, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:25, booked:[3,7,13,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 210 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[4,6,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:20, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},
                    { time: "06:40 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]}
            ]},
            {dateID: 02 ,date: +today+1, month: month ,timingSlots:[
                {  place:"Hajrat Nagar, Gola Ghat",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 150 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
                        ]}]},{ time: "12:00 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[6,12,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 210 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]},
                {  place:"Chinees River Mall, Shahdara",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 270,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 110 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 340,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                    { time: "05:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}
                ]},
                {  place:"Kathy Mall, Maurya Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 290 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 300 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 320 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]}
            ]},
            {dateID: 03,date: +today+2 , month:month,timingSlots:[
                {  place:"Local City Mall, Ahmad Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 160 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 190,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] }, { time: "01:15 PM", price: 180 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},{ time: "03:00 PM", price: 170 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                    { time: "06:00 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]},
                {  place:"Gola Ghat, Anmol Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 342 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 347,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                ]},
                {  place:"Carnival: Near RGP Classic",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]}
            ]}
         ], 
        cities:["Mumbai","NCR","Ahmedabad","Banglore","Chennai","Hyderabad"],
        format:["2D"]
    },
    {    
        id : 21,
        title:"Virupaksha",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS40LzEwICA1Mi4zSyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00346626-vnzlbbnyzy-portrait.jpg",
        typeOf : ["Action","Mystery","Thriller"],
        languages:["Hindi","Tamil","Telugu","Kannada","Malayalam"],
        creater:"A",
        rating:"6.7/10",
        votes:"64.3K",
         cityBookSlot:[        
            {dateID: 01, date: today, month:month,timingSlots:[
                {  place:"Hojari Mall, Sakti Nagar",like:false , timingAvailable:[
                    { time: "09:00 AM", price: 90 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]
                    },{ time: "12:00 PM", price: 120 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[6,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}, { time: "01:15 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,12,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 130 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]},
                {  place:"Roja Mall, Shahdara Nagar",like:false,  timingAvailable:[
                    { time: "09:00 AM", price: 190 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 100 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,9,15,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,5,9,11,16,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time:"06:30 PM", price: 200,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,12,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[5,13,18,22]},
                        ]}]},
                    { time: "11:20 PM", price: 300,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[9,12,16,20,25]},
                          { seatName: "E", totalSeat:22, booked:[5,8,11]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,6,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[11,15,18,22]},
                        ]}] }
                ]},
                {  place:"Lulu Mall, Prashant Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 320 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:25, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:25, booked:[3,7,13,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 210 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[4,6,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:20, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},
                    { time: "06:40 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]}
            ]},
            {dateID: 02 ,date: +today+1, month: month ,timingSlots:[
                {  place:"Rajat Takeej, Sakti Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 150 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
                        ]}]},{ time: "12:00 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[6,12,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 210 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]},
                {  place:"Hoja ganjj, Ganga Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 270,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 110 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 340,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                    { time: "05:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}
                ]},
                {  place:"Sakshi Nagar, Near Virat Chaurah",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 290 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 300 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 320 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]}
            ]},
            {dateID: 03,date: +today+2 , month:month,timingSlots:[
                {  place:"Chinepolis: Delux Place, Saket",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 160 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 190,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] }, { time: "01:15 PM", price: 180 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},{ time: "03:00 PM", price: 170 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                    { time: "06:00 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]},
                {  place:"Maharaja Nagar, GRJ Place",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 342 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 347,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                ]},
                {  place:"Kotak Ganj: TGIP Place",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]}
            ]}
         ], 
        cities:["Mumbai","NCR","Ahmedabad","Banglore","Chennai","Hyderabad"],
        format:["2D"]
    },
    {    
       id : 20,
       title:"Sisu",
       url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4xLzEwICA3Mzcgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00357229-zrnawyaqvt-portrait.jpg",
       typeOf : ["Action","War"],
       languages:["English","Hindi"],
       creater:"A",
       rating:"6.7/10",
       votes:"64.3K",
        cityBookSlot:[        
            {dateID: 01, date: today, month:month,timingSlots:[
                {  place:"Chinepolis: DLF Place, Saket",like:false , timingAvailable:[
                    { time: "09:00 AM", price: 90 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]
                    },{ time: "12:00 PM", price: 120 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[6,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}, { time: "01:15 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,12,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 130 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]},
                {  place:"Z Square Mall, Shahdara",like:false,  timingAvailable:[
                    { time: "09:00 AM", price: 190 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 100 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,9,15,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,5,9,11,16,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time:"06:30 PM", price: 200,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,12,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[5,13,18,22]},
                        ]}]},
                    { time: "11:20 PM", price: 300,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[9,12,16,20,25]},
                          { seatName: "E", totalSeat:22, booked:[5,8,11]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,6,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[11,15,18,22]},
                        ]}] }
                ]},
                {  place:"Mohit Nagar, Near TGR Store",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 320 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:25, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:25, booked:[3,7,13,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 210 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[4,6,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:20, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},
                    { time: "06:40 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]}
            ]},
            {dateID: 02 ,date: +today+1, month: month ,timingSlots:[
                {  place:"Ahamdabad Rayal Place, Saket",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 150 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
                        ]}]},{ time: "12:00 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[6,12,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 210 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]},
                {  place:"Chanpoos: Cross River Mall, Shahdara",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 270,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 110 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 340,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                    { time: "05:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}
                ]},
                {  place:"Carnival: GRSK Place",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 290 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 300 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 320 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]}
            ]},
            {dateID: 03,date: +today+2 , month:month,timingSlots:[
                {  place:"Rajat Nagar, DLF Place, Saket",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 160 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 190,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] }, { time: "01:15 PM", price: 180 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},{ time: "03:00 PM", price: 170 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                    { time: "06:00 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]},
                {  place:"Maurya River Mall, Shahdara",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 342 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 347,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                ]},
                {  place:"Rohit Mall, Ganga Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]}
            ]}
         ], 
       cities:["Mumbai","NCR","Ahmedabad","Banglore","Chennai","Hyderabad"],
       format:["2D"]
    },
    {    
         id : 19,
         title:"The Super Mario Bros. Movie",
         url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICA2LjdLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00343051-yuqjyzxvvj-portrait.jpg",
         typeOf : ["Adventure","Animation"],
         languages:["English","Hindi"],
         creater:"U",
         rating:"6.7/10",
         votes:"64.3K",
          cityBookSlot:[        
            {dateID: 01, date: today, month:month,timingSlots:[
                {  place:"Kaushalya Place, Saket",like:false , timingAvailable:[
                    { time: "09:00 AM", price: 90 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]
                    },{ time: "12:00 PM", price: 120 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[6,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}, { time: "01:15 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,12,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 130 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]},
                {  place:"Cross River Mall, Govind Nagar",like:false,  timingAvailable:[
                    { time: "09:00 AM", price: 190 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 100 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,9,15,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,5,9,11,16,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time:"06:30 PM", price: 200,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,12,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[5,13,18,22]},
                        ]}]},
                    { time: "11:20 PM", price: 300,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[9,12,16,20,25]},
                          { seatName: "E", totalSeat:22, booked:[5,8,11]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,6,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[11,15,18,22]},
                        ]}] }
                ]},
                {  place:"Gotak Nagar, Hamdabad",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 320 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:25, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:25, booked:[3,7,13,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 210 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[4,6,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:20, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},
                    { time: "06:40 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]}
            ]},
            {dateID: 02 ,date: +today+1, month: month ,timingSlots:[
                {  place:"Chinepolis: GHYU Place, Saket",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 150 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
                        ]}]},{ time: "12:00 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[6,12,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 210 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]},
                {  place:"Z Square Mall, Govind Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 270,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 110 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 340,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                    { time: "05:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}
                ]},
                {  place:"Green Park, GOLD Restaurant",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 290 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 300 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 320 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]}
            ]},
            {dateID: 03,date: +today+2 , month:month,timingSlots:[
                {  place:"DLF Place, Saket Restaurant",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 160 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 190,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] }, { time: "01:15 PM", price: 180 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},{ time: "03:00 PM", price: 170 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                    { time: "06:00 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]},
                {  place:"Shahdara Nagar, Maurya Chaurah",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 342 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 347,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                ]},
                {  place:"Carnival: TGIP",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]}
            ]}
         ], 
         cities:["Mumbai","NCR","Ahmedabad","Banglore","Chennai","Hyderabad"],
         format:["2D","ICE 3D","3D"]
    },
    {    
        id : 18,
        title:"Rudhran",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny4yLzEwICA1LjNLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00333202-zsnfnlghtq-portrait.jpg",
        typeOf : ["Action","Drama"],
        languages:["Tamil"],
        creater:"U",
        rating:"6.7/10",
        votes:"64.3K",
          cityBookSlot:[        
            {dateID: 01, date: today, month:month,timingSlots:[
                {  place:"Ganga Place, Saket",like:false , timingAvailable:[
                    { time: "09:00 AM", price: 90 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]
                    },{ time: "12:00 PM", price: 120 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[6,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}, { time: "01:15 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,12,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 130 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]},
                {  place:"Tata River Mall, Shahdara",like:false,  timingAvailable:[
                    { time: "09:00 AM", price: 190 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 100 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,9,15,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,5,9,11,16,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time:"06:30 PM", price: 200,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,12,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[5,13,18,22]},
                        ]}]},
                    { time: "11:20 PM", price: 300,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[9,12,16,20,25]},
                          { seatName: "E", totalSeat:22, booked:[5,8,11]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,6,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[11,15,18,22]},
                        ]}] }
                ]},
                {  place:"Carnival: Raja Mall",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 320 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:25, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:25, booked:[3,7,13,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 210 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[4,6,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:20, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},
                    { time: "06:40 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]}
            ]},
            {dateID: 02 ,date: +today+1, month: month ,timingSlots:[
                {  place:"Chinepolis: Satya Place, Govinda",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 150 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
                        ]}]},{ time: "12:00 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[6,12,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 210 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]},
                {  place:"Chinepolis: Lulu River Mall, Shahdara",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 270,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 110 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 340,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                    { time: "05:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}
                ]},
                {  place:"Carnival: KGF Restaurant",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 290 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 300 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 320 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]}
            ]},
            {dateID: 03,date: +today+2 , month:month,timingSlots:[
                {  place:"Yak Place, Saket Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 160 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 190,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] }, { time: "01:15 PM", price: 180 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},{ time: "03:00 PM", price: 170 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                    { time: "06:00 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]},
                {  place:"Z Square Mall, Shahdara",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 342 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 347,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                ]},
                {  place:"Ahmad: TGIP Place",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]}
            ]}
         ], 
        cities:["Chennai",],
        format:["2D"]
    },
    {    
       id : 17,
       title:"Viduthalai Part - 1",
       url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4zLzEwICAyOS41SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00310832-mxsdusckzk-portrait.jpg",
       typeOf : ["Action","Crime","Drama"],
       languages:["Tamil"],
       creater:"A",
       rating:"6.7/10",
       votes:"64.3K",
      cityBookSlot:[        
            {dateID: 01, date: today, month:month,timingSlots:[
                {  place:"Surya: DLF Place, Saket Nagar",like:false , timingAvailable:[
                    { time: "09:00 AM", price: 90 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]
                    },{ time: "12:00 PM", price: 120 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[6,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}, { time: "01:15 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,12,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 130 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]},
                {  place:"Chinepolis: Krishna River Mall, Gokul",like:false,  timingAvailable:[
                    { time: "09:00 AM", price: 190 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 100 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,9,15,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,5,9,11,16,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time:"06:30 PM", price: 200,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,12,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[5,13,18,22]},
                        ]}]},
                    { time: "11:20 PM", price: 300,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[9,12,16,20,25]},
                          { seatName: "E", totalSeat:22, booked:[5,8,11]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,6,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[11,15,18,22]},
                        ]}] }
                ]},
                {  place:"Carnival: Mauraya",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 320 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:25, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:25, booked:[3,7,13,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 210 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[4,6,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:20, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},
                    { time: "06:40 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]}
            ]},
            {dateID: 02 ,date: +today+1, month: month ,timingSlots:[
                {  place:"Chinepolis: Lulu Place, Saket",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 150 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
                        ]}]},{ time: "12:00 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[6,12,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 210 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]},
                {  place:"Chinepolis: Gomti River Mall, poni",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 270,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 110 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 340,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                    { time: "05:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}
                ]},
                {  place:"Carnival: GTKY Place",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 290 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 300 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 320 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]}
            ]},
            {dateID: 03,date: +today+2 , month:month,timingSlots:[
                {  place:"DLF Place, Saket Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 160 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 190,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] }, { time: "01:15 PM", price: 180 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},{ time: "03:00 PM", price: 170 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                    { time: "06:00 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]},
                {  place:"Ganga Restaurant, Gomti Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 342 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 347,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                ]},
                {  place:"Carnival: TGIP Place",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]}
            ]}
         ], 
       cities:["Banglore","Chennai"],
       format:["2D"]
    },
    {    
        id : 16,
        title:"Evil Dead Rise",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny42LzEwICAxNi4xSyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00349309-ynqvrxxagk-portrait.jpg",
        typeOf : ["Horror"],
        languages:["English"],
        creater:"A",
        rating:"6.7/10",
        votes:"64.3K",
        cityBookSlot:[        
            {dateID: 01, date: today, month:month,timingSlots:[
                {  place:"Saumaya Place, Gokul Nagar",like:false , timingAvailable:[
                    { time: "09:00 AM", price: 90 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]
                    },{ time: "12:00 PM", price: 120 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[6,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}, { time: "01:15 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,12,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 130 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]},
                {  place:"Ganga Nagar, Chai Sai Restaurant",like:false,  timingAvailable:[
                    { time: "09:00 AM", price: 190 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 100 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,9,15,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,5,9,11,16,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time:"06:30 PM", price: 200,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,12,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[5,13,18,22]},
                        ]}]},
                    { time: "11:20 PM", price: 300,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[9,12,16,20,25]},
                          { seatName: "E", totalSeat:22, booked:[5,8,11]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,6,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[11,15,18,22]},
                        ]}] }
                ]},
                {  place:"Carnival: River Mall",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 320 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:25, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:25, booked:[3,7,13,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]}
                        ]}]},{ time: "03:00 PM", price: 210 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[4,6,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:20, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},
                    { time: "06:40 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]}
            ]},
            {dateID: 02 ,date: +today+1, month: month ,timingSlots:[
                {  place:"TGH Place, Saket Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 150 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
                        ]}]},{ time: "12:00 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[6,12,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 210 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]},
                {  place:"Z Square River Mall, Hamdabad Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 270,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 110 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 340,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                    { time: "05:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}
                ]},
                {  place:"HPG Place, Govinda Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 290 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 300 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 320 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]}
            ]},
            {dateID: 03,date: +today+2 , month:month,timingSlots:[
                {  place:"Gokul Baba Road, Alishan Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 160 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 190,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] }, { time: "01:15 PM", price: 180 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},{ time: "03:00 PM", price: 170 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                    { time: "06:00 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]},
                {  place:"Sweet River Mall, Shahdara",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 342 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 347,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                ]},
                {  place:"Mauka Place, Hajrat Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]}
            ]}
         ], 
        cities:["Mumbai","NCR","Ahmedabad","Banglore","Chennai","Hyderabad"],
        format:["2D","4DX","MX4D"]
    },
    {
        id: 15,
        title:"Mrs. Chatterjee Vs Norway",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICAxNi43SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00319185-nvrfwjnfvv-portrait.jpg",
        typeOf: ["Biography","Drama"],
        languages:["Hindi"],
        creater:"U",
        rating:"6.7/10",
        votes:"64.3K",
        cityBookSlot:[        
            {dateID: 01, date: today, month:month,timingSlots:[
                {  place:"Kota Nagar, Hazrat Restaurant",like:false , timingAvailable:[
                    { time: "09:00 AM", price: 90 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]
                    },{ time: "12:00 PM", price: 120 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[6,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}, { time: "01:15 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,12,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 130 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]},
                {  place:"Shahdara Nagar, Zaika Restaurant",like:false,  timingAvailable:[
                    { time: "09:00 AM", price: 190 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 100 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,9,15,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,5,9,11,16,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time:"06:30 PM", price: 200,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,12,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[5,13,18,22]},
                        ]}]},
                    { time: "11:20 PM", price: 300,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[9,12,16,20,25]},
                          { seatName: "E", totalSeat:22, booked:[5,8,11]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,6,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[11,15,18,22]},
                        ]}] }
                ]},
                {  place:"GOLD Sagar Mall, Gokul Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 320 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:25, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:25, booked:[3,7,13,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 210 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[4,6,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:20, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},
                    { time: "06:40 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]}
            ]},
            {dateID: 02 ,date: +today+1, month: month ,timingSlots:[
                {  place:"Halat Restaurant, Hazrat Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 150 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
                        ]}]},{ time: "12:00 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[6,12,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 210 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]},
                {  place:"Chinepolis: Cross River Mall, Shahdara",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 270,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 110 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 340,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                    { time: "05:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}
                ]},
                {  place:"Gokul Nagar, Alishan Restaurant",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 290 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 300 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 320 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]}
            ]},
            {dateID: 03,date: +today+2 , month:month,timingSlots:[
                {  place:"Near Kajal Store, Gomukh Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 160 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 190,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] }, { time: "01:15 PM", price: 180 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},{ time: "03:00 PM", price: 170 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                    { time: "06:00 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]},
                {  place:"Styam Mall, Shahdara",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 342 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 347,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                ]},
                {  place:"Carnival: GTJK Mall",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]}
            ]}
         ], 
        cities:["Mumbai","NCR","Ahmedabad","Banglore"],
        format:["2D"]
    },
    {
        id: 14,
        title:"Bera Ek Aghori",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny43LzEwICBOZXcgUmVsZWFzZQ%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00358042-qlcmceprfw-portrait.jpg",
        typeOf: ["Horror","Thriller"],
        languages:["Hindi"],
        creater:"A",
        rating:"6.7/10",
        votes:"64.3K",
         cityBookSlot:[        
            {dateID: 01, date: today, month:month,timingSlots:[
                {  place:"BGR Place , Sakshi Nagar",like:false , timingAvailable:[
                    { time: "09:00 AM", price: 90 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]
                    },{ time: "12:00 PM", price: 120 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[6,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}, { time: "01:15 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,12,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 130 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]},
                {  place:"Sroj River Mall, Shahdara",like:false,  timingAvailable:[
                    { time: "09:00 AM", price: 190 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 100 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,9,15,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,5,9,11,16,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time:"06:30 PM", price: 200,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,12,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[5,13,18,22]},
                        ]}]},
                    { time: "11:20 PM", price: 300,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[9,12,16,20,25]},
                          { seatName: "E", totalSeat:22, booked:[5,8,11]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,6,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[11,15,18,22]},
                        ]}] }
                ]},
                {  place:"Satyam Market ,Neha Mall",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 320 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:25, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:25, booked:[3,7,13,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 210 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[4,6,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:20, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},
                    { time: "06:40 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]}
            ]},
            {dateID: 02 ,date: +today+1, month: month ,timingSlots:[
                {  place:"Akbar Nagar, Sandeep Mall",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 150 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
                        ]}]},{ time: "12:00 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[6,12,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 210 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]},
                {  place:"Z Square Mall, Zuhu Road, Lal ganj",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 270,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 110 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 340,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                    { time: "05:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}
                ]},
                {  place:"Smasta Mahal, Govind Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 290 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 300 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 320 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]}
            ]},
            {dateID: 03,date: +today+2 , month:month,timingSlots:[
                {  place:"Styam Nagar, Near Pooja Bakery",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 160 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 190,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] }, { time: "01:15 PM", price: 180 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},{ time: "03:00 PM", price: 170 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                    { time: "06:00 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]},
                {  place:"Lajpat Nagar, Smasta",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 342 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 347,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                ]},
                {  place:"Agartala Road, Gandhi gram",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]}
            ]}
         ], 
        cities:["Mumbai","Hyderabad"],
        format:["2D"]
    },
    {
        id: 13,
        title:"Everything Everywhere All at Once",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICA3LjdLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00337077-hpdszpszml-portrait.jpg",
        typeOf: ["Action","Adventure","Sci-Fi"],
        languages:["English"],
        creater:"A",
        rating:"8.7/10",
        votes:"78.3K",
         cityBookSlot:[        
            {dateID: 01, date: today, month:month,timingSlots:[
                {  place:"Satya: DLF Place, Saket",like:false , timingAvailable:[
                    { time: "09:00 AM", price: 90 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[10,12,19]},{ seatName: "B", totalSeat:15, booked:[1,12]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[3,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]
                    },{ time: "12:00 PM", price: 120 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[5,12,16]},{ seatName: "B", totalSeat:15, booked:[10]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[6,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}, { time: "01:15 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,12,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 130 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]},
                {  place:"Ahmad: Ganga River Mall, Sagar",like:false,  timingAvailable:[
                    { time: "09:00 AM", price: 190 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 100 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,9,15,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,5,9,11,16,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time:"06:30 PM", price: 200,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,12,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[5,13,18,22]},
                        ]}]},
                    { time: "11:20 PM", price: 300,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[9,12,16,20,25]},
                          { seatName: "E", totalSeat:22, booked:[5,8,11]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,6,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[11,15,18,22]},
                        ]}] }
                ]},
                {  place:"Zuhu Lala Nagar, Sroj",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 320 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:25, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:25, booked:[3,7,13,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 210 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[4,6,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:20, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},
                    { time: "06:40 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]}
            ]},
            {dateID: 02 ,date: +today+1, month: month ,timingSlots:[
                {  place:"Mansh Kheda, Kainal Road",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 150 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
                        ]}]},{ time: "12:00 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[6,12,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 210 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]},
                {  place:"Agatha River Mall, Satyam",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 270,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 110 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 340,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                    { time: "05:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}
                ]},
                {  place:"GRD Place, Sakshi Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 290 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 300 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 320 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]}
            ]},
            {dateID: 03,date: +today+2 , month:month,timingSlots:[
                {  place:"Hajrat Jaha Road, Mohit Palace",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 160 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 190,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] }, { time: "01:15 PM", price: 180 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},{ time: "03:00 PM", price: 170 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                    { time: "06:00 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]},
                {  place:"Lakh Place, Surya",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 342 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 347,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                ]},
                {  place:"Govind Nagar, Surya Mall",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]}
            ]}
         ], 
        cities:["Mumbai","Banglore"],
        format:["2D"]
    }, 
    {
        id: 12,
        title:"Ant-Man and the Wasp: Quantumania",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC8xMCAgMzYuOUsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00302402-gwqypmksaq-portrait.jpg",
        typeOf: ["Action","Adventure","Comedy","Sci-Fi"],
        languages:["English","Hindi","Tamil","Telugu"],
        creater:"UA",
        rating:"7.2/10",
        votes:"68.63K",
        cityBookSlot:[        
            {dateID: 01, date: today, month:month,timingSlots:[
                {  place:"Chinepolis: Golden Place, Satyam",like:false , timingAvailable:[
                    { time: "09:00 AM", price: 90 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]
                    },{ time: "12:00 PM", price: 120 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[6,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}, { time: "01:15 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,12,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 130 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]},
                {  place:"Chinepolis: Frozen Mall, Roma",like:false,  timingAvailable:[
                    { time: "09:00 AM", price: 190 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 100 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,9,15,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,5,9,11,16,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time:"06:30 PM", price: 200,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,12,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[5,13,18,22]},
                        ]}]},
                    { time: "11:20 PM", price: 300,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[9,12,16,20,25]},
                          { seatName: "E", totalSeat:22, booked:[5,8,11]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,6,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[11,15,18,22]},
                        ]}] }
                ]},
                {  place:"Roza Mahat, Gomti",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 320 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:25, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:25, booked:[3,7,13,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 210 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[4,6,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:20, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},
                    { time: "06:40 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]}
            ]},
            {dateID: 02 ,date: +today+1, month: month ,timingSlots:[
                {  place:"Amar Nagar, Saket",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 150 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
                        ]}]},{ time: "12:00 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[6,12,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 210 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[6,11]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]},
                {  place:"Shahdara Nagar, Samasta",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 270,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[3,17]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 110 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 340,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                    { time: "05:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[7,19,23]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}
                ]},
                {  place:"Carnival: Lok Laj Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 290 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 300 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 320 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]}
            ]},
            {dateID: 03,date: +today+2 , month:month,timingSlots:[
                {  place:"Chinepolis: Tiger Place, Saket",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 160 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[4,15,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 190,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] }, { time: "01:15 PM", price: 180 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},{ time: "03:00 PM", price: 170 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                    { time: "06:00 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]},
                {  place:"Delux: Cross River Mall, Gomti",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 342 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 347,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                ]},
                {  place:"Mahal Mall, Surya",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]}
            ]}
         ], 
        cities:["Mumbai","NCR"],
        format:["2D","3D","4DX","MX4D 3D","4DX 3D"]
    },
    {
        id: 11,
        title:"Chengiz",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAxM0sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00345849-pelkursyjj-portrait.jpg",
        typeOf: ["Action","Crime","Period","Thriller"],
        languages:["Bengali","Hindi"],
        creater:"UA",
        rating:"7/10",
        votes:"56.9K",
        cityBookSlot:[        
            {dateID: 01, date: today, month:month,timingSlots:[
                {  place:"ROhini: DLF Place, Gomti",like:false , timingAvailable:[
                    { time: "09:00 AM", price: 90 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]
                    },{ time: "12:00 PM", price: 120 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[6,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}, { time: "01:15 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,12,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 130 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]},
                {  place:"Saharan Pur, Golden",like:false,  timingAvailable:[
                    { time: "09:00 AM", price: 190 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 100 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,9,15,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,5,9,11,16,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time:"06:30 PM", price: 200,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,12,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[5,13,18,22]},
                        ]}]},
                    { time: "11:20 PM", price: 300,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[9,12,16,20,25]},
                          { seatName: "E", totalSeat:22, booked:[5,8,11]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,6,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[11,15,18,22]},
                        ]}] }
                ]},
                {  place:"Rose Mall, Govinda",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 320 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:25, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:25, booked:[3,7,13,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 210 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[4,6,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:20, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},
                    { time: "06:40 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]}
            ]},
            {dateID: 02 ,date: +today+1, month: month ,timingSlots:[
                {  place:"Akbar Pur, Gayatri",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 150 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
                        ]}]},{ time: "12:00 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[6,12,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 210 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]},
                {  place:"Ahmad Nagar, Gomti Chauk",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 270,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 110 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 340,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                    { time: "05:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}
                ]},
                {  place:"Carnival: TGIP",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 290 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 300 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 320 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]}
            ]},
            {dateID: 03,date: +today+2 , month:month,timingSlots:[
                {  place:"Green River Mall, Mohini",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 160 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 190,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] }, { time: "01:15 PM", price: 180 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},{ time: "03:00 PM", price: 170 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                    { time: "06:00 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]},
                {  place:"Manju Takeej, Vijay Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 342 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 347,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                ]},
                {  place:"Carnival: RGJD",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]}
            ]}
         ], 
        cities:["Mumbai","NCR","Ahmedabad"],
        format:["2D"]
    },
    {
        id: 10,
        title:"John Wick: Chapter 4",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS8xMCAgNTcuN0sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00311714-erxuyflesv-portrait.jpg",
        typeOf: ["Action","Thriller"],
        languages:["English","Hindi","Tamil","Telugu"],
        creater:"U",
        rating:"8.1/10",
        votes:"59K",
        cityBookSlot:[        
            {dateID: 01, date: today, month:month,timingSlots:[
                {  place:"Rohini: DLF Place, Saket",like:false , timingAvailable:[
                    { time: "09:00 AM", price: 90 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]
                    },{ time: "12:00 PM", price: 120 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[6,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}, { time: "01:15 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,12,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 130 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]},
                {  place:"Gaytri Takeej, Raj Nagar",like:false,  timingAvailable:[
                    { time: "09:00 AM", price: 190 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 100 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,9,15,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,5,9,11,16,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time:"06:30 PM", price: 200,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,12,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[5,13,18,22]},
                        ]}]},
                    { time: "11:20 PM", price: 300,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[9,12,16,20,25]},
                          { seatName: "E", totalSeat:22, booked:[5,8,11]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,6,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[11,15,18,22]},
                        ]}] }
                ]},
                {  place:"Gola Nath, Krishna Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 320 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:25, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:25, booked:[3,7,13,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 210 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[4,6,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:20, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},
                    { time: "06:40 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]}
            ]},
            {dateID: 02 ,date: +today+1, month: month ,timingSlots:[
                {  place:"Amrat Jaha, Rohini Place",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 150 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
                        ]}]},{ time: "12:00 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[6,12,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 210 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]},
                {  place:"Agartala Road, Lulu Mall",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 270,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 110 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 340,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                    { time: "05:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}
                ]},
                {  place:"Satyam Place, Ram Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 290 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 300 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 320 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]}
            ]},
            {dateID: 03,date: +today+2 , month:month,timingSlots:[
                {  place:"Sikarabad, Ganga Place",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 160 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 190,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] }, { time: "01:15 PM", price: 180 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},{ time: "03:00 PM", price: 170 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                    { time: "06:00 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[2,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]},
                {  place:"Sharan Pur, Satyam Complex",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1,11]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[12,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 342 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 347,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[12,19,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                ]},
                {  place:"Data Complex, Rohit Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[3,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[13,15]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[12,17]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[12,17]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[10]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[9,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[19,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]}
            ]}
         ], 
        cities:["Mumbai","NCR","Ahmedabad","Banglore","Hyderabad"],
        format:["2D","MX4D","4DX"]
    },
    {
        id: 9,
        title:"Dilwale Dulhania Le Jayenge",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4yLzEwICAyNC42SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00000652-tdprjssvgn-portrait.jpg",
        typeOf: ["Classic","Drama","Romantic"],
        languages:["Hindi"],
        creater:"U",
        rating:"7.7/10",
        votes:"74.3K",
        cityBookSlot:[        
            {dateID: 01, date: today, month:month,timingSlots:[
                {  place:"Jagat Place, Srojani",like:false , timingAvailable:[
                    { time: "09:00 AM", price: 90 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]
                    },{ time: "12:00 PM", price: 120 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[6,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}, { time: "01:15 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,12,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 130 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]},
                {  place:"Raja Nagar, GRD Place",like:false,  timingAvailable:[
                    { time: "09:00 AM", price: 190 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 100 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,9,15,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,5,9,11,16,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time:"06:30 PM", price: 200,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,12,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[5,13,18,22]},
                        ]}]},
                    { time: "11:20 PM", price: 300,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[9,12,16,20,25]},
                          { seatName: "E", totalSeat:22, booked:[5,8,11]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,6,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[11,15,18,22]},
                        ]}] }
                ]},
                {  place:"Raja Complex, Visal Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 320 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:25, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:25, booked:[3,7,13,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 210 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[4,6,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:20, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},
                    { time: "06:40 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]}
            ]},
            {dateID: 02 ,date: +today+1, month: month ,timingSlots:[
                {  place:"Kajal Place, Naina",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 150 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
                        ]}]},{ time: "12:00 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[6,12,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 210 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]},
                {  place:"Satya Nagar, Govind Complex",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 270,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 110 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 340,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                    { time: "05:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}
                ]},
                {  place:"Compute: WRD Place",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 290 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 300 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 320 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]}
            ]},
            {dateID: 03,date: +today+2 , month:month,timingSlots:[
                {  place:"Lal ganj, Hajrat",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 160 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 190,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] }, { time: "01:15 PM", price: 180 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},{ time: "03:00 PM", price: 170 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                    { time: "06:00 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]},
                {  place:"Lok Jahageer Nagar, Madan Takeej",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 342 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 347,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                ]},
                {  place:"Carnival: Govind",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]}
            ]}
         ], 
        cities:["Mumbai"],
        format:["2D"]
    },
    {
        id: 8,
        title:"Polite Society",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni42LzEwICBOZXcgUmVsZWFzZQ%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00355447-pdaktkuxke-portrait.jpg",
        typeOf: ["Adventure","Comedy"],
        languages:["English"],
        creater:"A",
        rating:"6.9/10",
        votes:"56.3K",
        cityBookSlot:[        
            {dateID: 01, date: today, month:month,timingSlots:[
                {  place:"Dada Mall, Govinda Complex",like:false , timingAvailable:[
                    { time: "09:00 AM", price: 90 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]
                    },{ time: "12:00 PM", price: 120 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[6,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}, { time: "01:15 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,12,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 130 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]},
                {  place:"Surya Complex, Gomti Takeej",like:false,  timingAvailable:[
                    { time: "09:00 AM", price: 190 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 100 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,9,15,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,5,9,11,16,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time:"06:30 PM", price: 200,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,12,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[5,13,18,22]},
                        ]}]},
                    { time: "11:20 PM", price: 300,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[9,12,16,20,25]},
                          { seatName: "E", totalSeat:22, booked:[5,8,11]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,6,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[11,15,18,22]},
                        ]}] }
                ]},
                {  place:"A1 Complex, Dada Takeej",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 320 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[10,13,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[20,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:25, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[11,15]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[12]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:25, booked:[3,7,13,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 210 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[4,6,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:20, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},
                    { time: "06:40 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]}
            ]},
            {dateID: 02 ,date: +today+1, month: month ,timingSlots:[
                {  place:"Naina Takeej, Mohini",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 150 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
                        ]}]},{ time: "12:00 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[6,12,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 210 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]},
                {  place:"Carnival: Cross River Mall, Sakshi",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 270,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 110 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 340,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                    { time: "05:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}
                ]},
                {  place:"Frozen Mall, Rooma",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 290 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 300 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 320 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]}
            ]},
            {dateID: 03,date: +today+2 , month:month,timingSlots:[
                {  place:"Amrat, Delux Complex",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 160 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 190,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] }, { time: "01:15 PM", price: 180 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},{ time: "03:00 PM", price: 170 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                    { time: "06:00 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]},
                {  place:"Rohit Restaurant, Girja",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 342 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 347,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                ]},
                {  place:"Mohit Nagar, Makhana",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]}
            ]}
         ], 
        cities:["Mumbai","NCR","Ahmedabad","Banglore","Chennai","Hyderabad"],
        format:["2D"]
    },
    {
        id: 7,
        title:"The Pope's Exorcist",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny4yLzEwICAxMC40SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00353346-twzksncnqj-portrait.jpg",
        typeOf: ["Horror","Thriller"],
        languages:["English","Hindi","Tamil","Telugu"],
        creater:"A", 
        rating:"5.8/10",
        votes:"60.9K",
        cityBookSlot:[        
            {dateID: 01, date: today, month:month,timingSlots:[
                {  place:"Lakhya Nagar, Saraswati",like:false , timingAvailable:[
                    { time: "09:00 AM", price: 90 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]
                    },{ time: "12:00 PM", price: 120 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[6,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}, { time: "01:15 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,12,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 130 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]},
                {  place:"Chinepolis: Mohini River Mall, Satyam",like:false,  timingAvailable:[
                    { time: "09:00 AM", price: 190 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 100 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,9,15,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,5,9,11,16,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time:"06:30 PM", price: 200,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,12,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[5,13,18,22]},
                        ]}]},
                    { time: "11:20 PM", price: 300,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[9,12,16,20,25]},
                          { seatName: "E", totalSeat:22, booked:[5,8,11]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,6,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[11,15,18,22]},
                        ]}] }
                ]},
                {  place:"Rohini Ganga, Himan Takeej",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 320 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:25, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:25, booked:[3,7,13,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 210 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[4,6,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:20, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},
                    { time: "06:40 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]}
            ]},
            {dateID: 02 ,date: +today+1, month: month ,timingSlots:[
                {  place:"Gandhi Nagar, River Mall",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 150 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
                        ]}]},{ time: "12:00 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[6,12,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 210 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]},
                {  place:"Satym Takeej, Prapti",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 270,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 110 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 340,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                    { time: "05:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}
                ]},
                {  place:"Govind Complex, Rajveer Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 290 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 300 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 320 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]}
            ]},
            {dateID: 03,date: +today+2 , month:month,timingSlots:[
                {  place:"Mamata Takeej, Shyam Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 160 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 190,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] }, { time: "01:15 PM", price: 180 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},{ time: "03:00 PM", price: 170 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                    { time: "06:00 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]},
                {  place:"Krishna Nagar, Samasta",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 342 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 347,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                ]},
                {  place:"Brahma Nagar, Gomti",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]}
            ]}
         ], 
        cities:["Mumbai","NCR","Ahmedabad","Banglore","Chennai"],
        format:["2D","MX4D"]
    },
    {
        id: 6,
        title:"Avatar: The Way of Water",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICAyMjUuM0sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00037264-bdbylvqqwb-portrait.jpg",
        typeOf: ["Action","Adventure","Fantasy"],
        languages:["English","Kannada","Hindi","Tamil","Telugu","Malayalam"],
        creater:"UA",
        rating:"8.9/10",
        votes:"98.8K",
        cityBookSlot:[        
            {dateID: 01, date: today, month:month,timingSlots:[
                {  place:"Alvar grameen, DRG Place",like:false , timingAvailable:[
                    { time: "09:00 AM", price: 90 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]
                    },{ time: "12:00 PM", price: 120 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[6,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}, { time: "01:15 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,12,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 130 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]},
                {  place:"Mohit Takeej, Ahmad Nagar",like:false,  timingAvailable:[
                    { time: "09:00 AM", price: 190 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 100 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,9,15,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,5,9,11,16,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time:"06:30 PM", price: 200,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,12,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[5,13,18,22]},
                        ]}]},
                    { time: "11:20 PM", price: 300,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[9,12,16,20,25]},
                          { seatName: "E", totalSeat:22, booked:[5,8,11]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,6,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[11,15,18,22]},
                        ]}] }
                ]},
                {  place:"Mukta Complex, DLF Place",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 320 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:25, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:25, booked:[3,7,13,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 210 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[4,6,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:20, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},
                    { time: "06:40 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]}
            ]},
            {dateID: 02 ,date: +today+1, month: month ,timingSlots:[
                {  place:"Golkana: DLF Place, Amrat",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 150 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
                        ]}]},{ time: "12:00 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[6,12,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 210 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]},
                {  place:"Satyam Nagar, Sansani",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 270,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 110 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 340,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                    { time: "05:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}
                ]},
                {  place:"Poornima Place, DRB Road",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 290 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 300 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 320 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]}
            ]},
            {dateID: 03,date: +today+2 , month:month,timingSlots:[
                {  place:"Reeta Mall, Roja Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 160 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 190,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] }, { time: "01:15 PM", price: 180 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},{ time: "03:00 PM", price: 170 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                    { time: "06:00 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]},
                {  place:"Manju River Mall, Shahdara",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 342 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 347,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                ]},
                {  place:"Carnival: Rohit Restaurant",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]}
            ]}
         ], 
        cities:["NCR","Ahmedabad","Banglore"],
        format:["2D","3D","4DX"]
    },
    {
        id: 5,
        title:"Amar Akbar Anthony (1977)",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4xLzEwICAzMzUgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00058522-vrnetngynq-portrait.jpg",
        typeOf: ["Classic","Comedy","Musical"],
        languages:["Hindi"],
        creater:"U",
        rating:"7.8/10",
        votes:"85.2K",
         cityBookSlot:[        
            {dateID: 01, date: today, month:month,timingSlots:[
                {  place:"Sagar River Mall, Samasta",like:false , timingAvailable:[
                    { time: "09:00 AM", price: 90 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]
                    },{ time: "12:00 PM", price: 120 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[6,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}, { time: "01:15 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,12,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 130 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]},
                {  place:"Rohini Nagar, Mohit Complex",like:false,  timingAvailable:[
                    { time: "09:00 AM", price: 190 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 100 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,9,15,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,5,9,11,16,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time:"06:30 PM", price: 200,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,12,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[5,13,18,22]},
                        ]}]},
                    { time: "11:20 PM", price: 300,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[9,12,16,20,25]},
                          { seatName: "E", totalSeat:22, booked:[5,8,11]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,6,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[11,15,18,22]},
                        ]}] }
                ]},
                {  place:"Mary Takeej, Seeta Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 320 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:25, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:25, booked:[3,7,13,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 210 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[4,6,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:20, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},
                    { time: "06:40 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]}
            ]},
            {dateID: 02 ,date: +today+1, month: month ,timingSlots:[
                {  place:"Hanumaan Nagar, Sarita",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 150 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
                        ]}]},{ time: "12:00 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[6,12,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 210 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]},
                {  place:"Mahnat Mall, Birhana",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 270,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 110 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 340,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                    { time: "05:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}
                ]},
                {  place:"Carnival: Hotel & Palace",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 290 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 300 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 320 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]}
            ]},
            {dateID: 03,date: +today+2 , month:month,timingSlots:[
                {  place:"DLF Place, Saharan",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 160 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 190,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] }, { time: "01:15 PM", price: 180 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},{ time: "03:00 PM", price: 170 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                    { time: "06:00 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]},
                {  place:"Krishna Nagar, Data Complex",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 342 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 347,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                ]},
                {  place:"Mastani: GTF Place",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]}
            ]}
         ], 
        cities:["Mumbai","NCR","Ahmedabad","Banglore","Chennai","Hyderabad"],
        format:["2D"]
    },
    {
        id: 4,
        title:"Bhola",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny42LzEwICA0OS4ySyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00326977-scnvhurlwr-portrait.jpg",
        typeOf: ["Action","Drama","Thriller"],
        languages:["Hindi"],
        creater:"UA",
        rating:"6.4/10",
        votes:"66.3K",
        cityBookSlot:[        
            {dateID: 01, date: today, month:month ,timingSlots:[
                {  place:"Mahnat Takeej, Gomukh",like:false , timingAvailable:[
                    { time: "09:00 AM", price: 90 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[1,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]
                    },{ time: "12:00 PM", price: 120 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[6,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}, { time: "01:15 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,12,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 130 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]},
                {  place:"Girza Mall, Dhava Road",like:false,  timingAvailable:[
                    { time: "09:00 AM", price: 190 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[9,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 100 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,9,15,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,5,9,11,16,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time:"06:30 PM", price: 200,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,12,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[5,13,18,22]},
                        ]}]},
                    { time: "11:20 PM", price: 300,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[9,12,16,20,25]},
                          { seatName: "E", totalSeat:22, booked:[5,8,11]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,6,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[11,15,18,22]},
                        ]}] }
                ]},
                {  place:"Delux Mall, Kailasha",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 320 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:25, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:25, booked:[3,7,13,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 210 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[4,6,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:20, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},
                    { time: "06:40 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]}
            ]},
            {dateID: 02 ,date: +today+1, month: month ,timingSlots:[
                {  place:"Mohommad Nagar, Gomukha",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 150 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
                        ]}]},{ time: "12:00 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[6,12,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 210 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]},
                {  place:"Rajani Palace, River Mall",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 270,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 110 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 340,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                    { time: "05:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}
                ]},
                {  place:"Satya Complex, Kailash lawn",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 290 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 300 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 320 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]}
            ]},
            {dateID: 03,date: +today+2 , month:month,timingSlots:[
                {  place:"Mohan Market, Girja Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 160 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 190,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] }, { time: "01:15 PM", price: 180 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},{ time: "03:00 PM", price: 170 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                    { time: "06:00 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]},
                {  place:"Surya Nagar, PGT Place",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 342 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 347,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                ]},
                {  place:"Raj Mahal Takeej, Satyam",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]}
            ]}
         ], 
        cities:["Mumbai","NCR","Ahmedabad","Banglore"],
        format:["2D","3D","4DX"]
    },
    {
        id: 3,
        title:"Bad Boy (Hindi)",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC40LzEwICAyMi44SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00103092-tklyclcfud-portrait.jpg",
        typeOf: ["Drama","Romantic"],
        languages:["Hindi"],
        creater:"UA",
        rating:"6/10",
        votes:"60.3K",
        cityBookSlot:[        
            {dateID: 01, date: today, month:month,timingSlots:[
                {  place:"Samasta: KGY Place, Saket",like:false , timingAvailable:[
                    { time: "09:00 AM", price: 90 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]
                    },{ time: "12:00 PM", price: 120 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[6,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}, { time: "01:15 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,12,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 130 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]},
                {  place:"Chinepolis: Mohan River Mall, Lok Nagar",like:false,  timingAvailable:[
                    { time: "09:00 AM", price: 190 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 100 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,9,15,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,5,9,11,16,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time:"06:30 PM", price: 200,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,12,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[5,13,18,22]},
                        ]}]},
                    { time: "11:20 PM", price: 300,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[9,12,16,20,25]},
                          { seatName: "E", totalSeat:22, booked:[5,8,11]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,6,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[11,15,18,22]},
                        ]}] }
                ]},
                {  place:"Krishna Nagar, RajRatan",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 320 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:25, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:25, booked:[3,7,13,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 210 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[4,6,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:20, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},
                    { time: "06:40 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]}
            ]},
            {dateID: 02 ,date: +today+1, month: month ,timingSlots:[
                {  place:"Subhash, TYK Place",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 150 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
                        ]}]},{ time: "12:00 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[6,12,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 210 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]},
                {  place:"Yamuna Mall, Shahdara",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 270,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 110 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 340,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                    { time: "05:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}
                ]},
                {  place:"Carnival: Govinda Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 290 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 300 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 320 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]}
            ]},
            {dateID: 03,date: +today+2 , month:month,timingSlots:[
                {  place:"Himani Nagar, Witch Mall",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 160 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 190,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] }, { time: "01:15 PM", price: 180 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},{ time: "03:00 PM", price: 170 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                    { time: "06:00 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]},
                {  place:"Vishal Mega Mart, Kailasha",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 342 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 347,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                ]},
                {  place:"Kartik River Mall, Pooja Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[10,13]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]}
            ]}
         ], 
        cities:["Mumbai","NCR","Ahmedabad","Banglore","Hyderabad"],
        format:["2D"]
    },
    {
        id: 2,
        title:"Suzume",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS41LzEwICAxMS4xSyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00352085-aghrdlnkqp-portrait.jpg",
        typeOf: ["Action","Adventure","Anime"],
        languages:["Hindi","Japanese"],
        creater:"UA",
        rating:"6.7/10",
        votes:"56.9K",
        cityBookSlot:[        
            {dateID: 01, date: today, month:month,timingSlots:[
                {  place:"Naina Complex, Dhavan Road",like:false , timingAvailable:[
                    { time: "09:00 AM", price: 90 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]
                    },{ time: "12:00 PM", price: 120 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[6,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}, { time: "01:15 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,12,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 130 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]},
                {  place:"Poni Mall, Brahama Nagar",like:false,  timingAvailable:[
                    { time: "09:00 AM", price: 190 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 100 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,9,15,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,5,9,11,16,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time:"06:30 PM", price: 200,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,12,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[5,13,18,22]},
                        ]}]},
                    { time: "11:20 PM", price: 300,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[9,12,16,20,25]},
                          { seatName: "E", totalSeat:22, booked:[5,8,11]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,6,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[11,15,18,22]},
                        ]}] }
                ]},
                {  place:"Jackson Restaurant, Munshi Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 320 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:25, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:25, booked:[3,7,13,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 210 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[4,6,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:20, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},
                    { time: "06:40 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]}
            ]},
            {dateID: 02 ,date: +today+1, month: month ,timingSlots:[
                {  place:"Surya Mall, Govind Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 150 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
                        ]}]},{ time: "12:00 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[6,12,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 210 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]},
                {  place:"Roza Mall, Binda Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 270,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 110 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 340,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                    { time: "05:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}
                ]},
                {  place:"Lala Lajpat Complex, Rajdhani Road",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 290 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 300 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 320 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]}
            ]},
            {dateID: 03,date: +today+2 , month:month,timingSlots:[
                {  place:"Nainshi Market, GRF Place, Hem Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 160 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 190,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] }, { time: "01:15 PM", price: 180 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},{ time: "03:00 PM", price: 170 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                    { time: "06:00 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]},
                {  place:"Cross River Mall, Shyam Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 342 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 347,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                ]},
                {  place:"Gurraj: RGT Place",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]}
            ]}
         ], 
        cities:["Mumbai","NCR","Ahmedabad","Chennai"],
        format:["2D","4DX"]
    },
    {
        id: 1,
        title:"Guardians of the Galaxy Vol. 3",
        url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4zLzEwICAzNS4zSyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00310794-nmwukaluxy-portrait.jpg",
        typeOf: ["Action","Adventure","Comedy"],
        languages:["English","Hindi","Tamil","Telugu"],
        creater:"UA", 
        rating:"7.7/10",
        votes:"74.3K",
        cityBookSlot:[        
            {dateID: 01, date: today, month:month,timingSlots:[
                {  place:"Sket Nagar, FGR Place",like:false , timingAvailable:[
                    { time: "09:00 AM", price: 90 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]
                    },{ time: "12:00 PM", price: 120 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[6,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}, { time: "01:15 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,12,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 130 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]},
                {  place:"Himansha: Cross River Mall, Shahdara",like:false,  timingAvailable:[
                    { time: "09:00 AM", price: 190 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 100 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[5,7,9,15,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[1,5,9,11,16,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time:"06:30 PM", price: 200,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,12,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[5,13,18,22]},
                        ]}]},
                    { time: "11:20 PM", price: 300,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[9,12,16,20,25]},
                          { seatName: "E", totalSeat:22, booked:[5,8,11]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,6,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[11,15,18,22]},
                        ]}] }
                ]},
                {  place:"Carnival: Zuhu Mall",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 320 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:25, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:25, booked:[3,7,13,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 210 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[4,6,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:20, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},
                    { time: "06:40 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]}
            ]},
            {dateID: 02 ,date: +today+1, month: month ,timingSlots:[
                {  place:"Moza Place, Rishi Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 150 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
                        ]}]},{ time: "12:00 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[6,12,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 210 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 200 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]},
                {  place:"Alvar, Krishna Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 270,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 110 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 340,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                    { time: "05:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}
                ]},
                {  place:"Carnival: TGIP",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 290 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 300 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 320 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 390 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                ]}
            ]},
            {dateID: 03,date: +today+2 , month:month,timingSlots:[
                {  place:"Kailasha, Gomti Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 160 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "12:00 PM", price: 190,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] }, { time: "01:15 PM", price: 180 ,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}]},{ time: "03:00 PM", price: 170 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},
                    { time: "06:00 PM", price: 390 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]}
                ]},
                {  place:"Amar Takeej, Govind Place",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 220,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[9,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[12,17]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}] },{ time: "12:00 PM", price: 210 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 342 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "03:00 PM", price: 347,seats:[
                            { seatType:"RECLINER", seatValue:420, seatInfo:[
                              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                            ]}] },
                ]},
                {  place:"Govinda Complex, Kailash Nagar",like:false, timingAvailable:[
                    { time: "09:00 AM", price: 230 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},{ time: "12:00 PM", price: 220 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]}, { time: "01:15 PM", price: 180 ,seats:[
                      { seatType:"RECLINER", seatValue:420, seatInfo:[
                        { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                      ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                        { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                        { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                        { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                        { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      ]}]},{ time: "03:00 PM", price: 310 ,seats:[
                        { seatType:"RECLINER", seatValue:420, seatInfo:[
                          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                        ]}]},
                ]}
            ]}
         ], 
        cities:["Mumbai","NCR","Ahmedabad","Banglore","Hyderabad"],
        format:["2D","3D","4DX"]
    }, 
];
let loginData = [
{
  id : 101,
  username : "Saloni",
  email : "saloni@123.com",
  firstName : "Saloni",
  lastName : "Sharma",
  marriedStatus : "No",
  mobileNo : 8423370180,
},
{
  id : 102,
  username : "Test",
  email : "test@test.com",
  firstName : "Jane",
  lastName : "Doe",
  marriedStatus : "Yes",
  mobileNo : 9811576789,
},
]
let bookingArr = [
  {
    bookingId: 1,
    userId : 101,
    amount: 1090,
    date: "12 May",
    movieHall: "Chinepolis: DLF Place, Saket",
    tickets: ['A 13', 'B 13', 'H 12'],
    time: "12:00 PM",
    title: "Kisi Ka Bhai Kisi Ki Jaan",
  },
  {
    bookingId: 2,
    userId: 102,
    amount:1260,
    date:"10 May",
    movieHall:"Chinepolis: DLF Place, Saket",
    tickets: ['A 4', 'A 11', 'B 14'],
    time: "09:00 AM",
    title:"Ponniyin Selvan - Part 2"
  }
]
module.exports = { moviesData,loginData,bookingArr };