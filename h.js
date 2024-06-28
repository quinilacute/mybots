const visaInfo = {
    tourist: "A tourist visa is for those visiting the country for leisure or vacation. Requirements include a valid passport, proof of accommodation, and return travel tickets.",
    work: "A work visa requires a job offer from a company within the country. Necessary documents include a work contract, proof of qualifications, and health insurance.",
    student: "A student visa is for those pursuing studies. You need an admission letter from a recognized educational institution, proof of funds, and health insurance.",
    medical: "A medical visa is for those seeking medical treatment. Required documents include a medical appointment confirmation, proof of funds, and a valid passport.",
    family: "A family reunion visa allows family members to join a resident in the country. Required documents include proof of relationship, proof of residence, and financial support evidence."
};

document.addEventListener('DOMContentLoaded', function() {
    showVisaTypes();
});

document.getElementById('chat-form').addEventListener('submit', function(event) {
    event.preventDefault();
    sendMessage();
});

function sendMessage() {
    const chatInput = document.getElementById('chat-input').value;
    if (chatInput.trim() === "") return;

    const chatOutput = document.getElementById('messages');

    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.innerText = chatInput;
    const userLabel = document.createElement('div');
    userLabel.className = 'user-label';
    userLabel.innerText = "user";
    userMessage.appendChild(userLabel);
    chatOutput.appendChild(userMessage);

    const botResponse = document.createElement('div');
    botResponse.className = 'bot-response';
    botResponse.innerText = getBotResponse(chatInput);
    const botLabel = document.createElement('div');
    botLabel.className = 'bot-label';
    botLabel.innerText = "bot";
    botResponse.appendChild(botLabel);
    chatOutput.appendChild(botResponse);

    document.getElementById('chat-input').value = "";
    chatOutput.scrollTop = chatOutput.scrollHeight;
}

function getBotResponse(input) {
    input = input.toLowerCase();
    if (input.includes("visa")) {
        if (input.includes("tourist")) {
            return visaInfo.tourist;
        } else if (input.includes("work")) {
            return visaInfo.work;
        } else if (input.includes("student")) {
            return visaInfo.student;
        } else if (input.includes("medical")) {
            return visaInfo.medical;
        } else if (input.includes("family")) {
            return visaInfo.family;
        } else {
            return "Please specify the type of visa you are interested in (e.g., tourist, work, student, medical, family).";
        }
    } else {
        return "I'm here to help with information about visas. Please ask about a specific type of visa.";
    }
}



document.getElementById('toggle-btn').addEventListener('click', function() {
    const sidebar1 = document.querySelector('.sidebar1');
    const sidebar2 = document.querySelector('.sidebar2');
    
    sidebar1.classList.toggle('hidden');
    sidebar2.classList.toggle('hidden');
});

document.getElementById('visa-toggle-btn').addEventListener('click', function() {
    const visaListContainer = document.getElementById('visa-list-container');
    visaListContainer.classList.toggle('hidden');
});

function showVisaTypes() {
    const visaInfoDiv = document.getElementById('visa-info');
    visaInfoDiv.innerHTML = `
        <p>Tourist Visa: ${visaInfo.tourist}</p>
        <p>Work Visa: ${visaInfo.work}</p>
        <p>Student Visa: ${visaInfo.student}</p>
        <p>Medical Visa: ${visaInfo.medical}</p>
        <p>Family Reunion Visa: ${visaInfo.family}</p>
    `;
}
//     for (const [type, description] of Object.entries(visaInfo)) {
//         const listItem = document.createElement('li');
//         listItem.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)} Visa: ${description}`;
//         visaList.appendChild(listItem);
//     }
// }
