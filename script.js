// Dark Mode Toggle
const toggleSwitch = document.getElementById("dark-mode-toggle");

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark");
    toggleSwitch.checked = true;
}

toggleSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("darkMode", document.body.classList.contains("dark") ? "enabled" : "disabled");
});
// Support Form Submission
document.getElementById("supportForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("responseMessage").innerHTML = "Thank you for reaching out! Our team will get back to you soon.";
        document.getElementById("supportForm").reset();
    } else {
        document.getElementById("responseMessage").innerHTML = "Please fill out all fields.";
    }
});

// FAQ Toggle
document.querySelectorAll(".faq-item").forEach(item => {
    item.addEventListener("click", () => {
        let answer = item.querySelector(".answer");
        let toggle = item.querySelector(".toggle");

        if (answer.style.display === "block") {
            answer.style.display = "none";
            toggle.textContent = "+";
        } else {
            answer.style.display = "block";
            toggle.textContent = "-";
        }
    });
});

// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (name && email && subject && message) {
        document.getElementById("responseMessage").innerHTML = "Your message has been sent successfully!";
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("responseMessage").innerHTML = "Please fill out all fields.";
    }
});

// Open Chat
function openChat() {
    document.getElementById("chatbot").classList.remove("hidden");
}

// Close Chat
function closeChat() {
    document.getElementById("chatbot").classList.add("hidden");
}

// Function to send a message
function sendMessage() {
    let userInput = document.getElementById("user-input");
    let chatBody = document.getElementById("chat-body");

    if (userInput.value.trim() === "") return;

    // Add user message
    let userMessageDiv = document.createElement("div");
    userMessageDiv.classList.add("chat-message", "user");
    userMessageDiv.innerText = userInput.value;
    chatBody.appendChild(userMessageDiv);

    // Clear input field
    userInput.value = "";

    // Auto-reply from bot
    setTimeout(() => {
        let botReplyDiv = document.createElement("div");
        botReplyDiv.classList.add("chat-message", "bot");
        botReplyDiv.innerText = "I'm here to help! How can I assist you?";
        chatBody.appendChild(botReplyDiv);
        
        // Scroll to bottom
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);

    // Scroll to bottom
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Handle Enter key press
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
