// JavaScript to control the chatbot interaction
document.getElementById("chatbot-btn").addEventListener("click", function() {
  document.getElementById("chatbot-container").style.display = "block";
});

document.getElementById("close-chat").addEventListener("click", function() {
  document.getElementById("chatbot-container").style.display = "none";
});

document.getElementById("send-btn").addEventListener("click", function() {
  const userMessage = document.getElementById("user-input").value;
  if (userMessage.trim() !== "") {
    addMessage("You", userMessage);
    document.getElementById("user-input").value = "";
    simulateBotResponse(userMessage);
  }
});

function addMessage(sender, message) {
  const messageContainer = document.createElement("div");
  messageContainer.classList.add(sender === "You" ? "user-message" : "bot-message");
  messageContainer.textContent = `${sender}: ${message}`;
  document.getElementById("chat-messages").appendChild(messageContainer);
  document.getElementById("chat-messages").scrollTop = document.getElementById("chat-messages").scrollHeight;
}

function simulateBotResponse(userMessage) {
  setTimeout(() => {
    addMessage("Bot", "I'm here to help! You said: " + userMessage);
  }, 1000);
}
