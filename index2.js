const delay = 15;
await (async ()=>{
  console.log(`Pause for ${delay} sec ...`);
  setTimeout(()=>{
    console.log('Continue');
  },delay * 1000);
})()


