export const exportChat = (chat) => {
  if (!chat || chat.messages.length === 0) {
    alert("No conversation to export.");
    return;
  }

  let content = "";

  content += "=============================\n";
  content += "        ARIE AI CHAT\n";
  content += "=============================\n\n";

  content += `Title : ${chat.title}\n`;
  content += `Exported : ${new Date().toLocaleString()}\n\n`;

  chat.messages.forEach((msg) => {
    content += `${msg.sender === "user" ? "You" : "ARIE"}:\n`;
    content += `${msg.text}\n\n`;
  });

  const blob = new Blob([content], {
    type: "text/plain;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;

  link.download = `${chat.title}.txt`;

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};
