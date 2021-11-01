let spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ' ];
let timer = 100;
const timesTospin = 10;
for (let i = 0; i < timesTospin; i++) {
  for (let item of spinner) {
    setTimeout(() => {
      process.stdout.write(item);
    }, timer);
    timer += 200;
  
  }
  
}

