const NodeCache=require("node-cache");
const mycache=new NodeCache();

console.log("Setting 'key' values to expire in 60 seconds")
mycache.set("key","value",60);

let value=mycache.get("key");
if(value===undefined){
    console.log("cache miss:'key' not found");
}
else{
    console.log(`Retrived value for 'key' : ${value}`);
}

console.log("\waiting for 3 seconds to demonstarate cache behaviour...")
setTimeout(() =>{
    let expiredvalue=mycache.get("key");
    if(expiredvalue===undefined){
    console.log("cache miss:'key' is now undefined (or expired)");
}
else{
    console.log(`Retrived value for 'key' after 3 secondss `);
}
}
,3000);

console.log("\waiting for 65 seconds to demonstarate cache expired...")
setTimeout(() =>{
    let trulyexpiredvalue=mycache.get("key");
    if(trulyexpiredvalue===undefined){
    console.log("cache miss:'key' has expired ");
}
else{
    console.log(`Retrived value for 'key' after 65 secondss ${trulyexpiredvalue}`);
}
}
,65000);