import  { exec } from "child_process";
const doit = () => {
  setTimeout(()=>{
    console.log('Saving game...');
    exec("yarn copy7days", (error, stdout, stderr) => {
      if (error) {
          console.log(`error: ${error.message}`);
          return;
      }
      if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
      }
      console.log(`stdout: ${stdout}`);
      doit();
  });
  },1*1800*1000);
};
 doit();
