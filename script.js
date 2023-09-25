function toggleContent(contentType) {
    const contentContainer = document.getElementById('contentContainer');
    const buttonsContainer = document.querySelector('.buttons-container');
    const languageContainer = document.querySelector('.lang-container');
    const iframe1 = document.getElementById('iframe1');
    const dialogflowContainer = document.getElementById('dialogflowContainer');

    buttonsContainer.style.display = 'none';
    languageContainer.style.display = 'none';

    contentContainer.innerHTML = '';

    if (contentType === 'iframe1') {
        const iframe = document.createElement('iframe');
        iframe.id = 'iframe1';
        iframe.allow = 'microphone;';
        iframe.width = 390;
        iframe.height = 600;
        iframe.src = 'https://console.dialogflow.com/api-client/demo/embedded/f666b0bc-c985-47a7-bd7a-8a06cb42e215';
        contentContainer.appendChild(iframe);
    } else if (contentType === 'dialogflow') {
        const dialogflowScript = document.createElement('script');
        dialogflowScript.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
        dialogflowScript.async = true;

        dialogflowScript.onload = function () {
            const messengerContainer = document.createElement('div');
            messengerContainer.id = 'dialogflowContainer';
            messengerContainer.innerHTML = `
                <df-messenger
                    intent="WELCOME"
                    chat-title="JustiBot"
                    agent-id="f666b0bc-c985-47a7-bd7a-8a06cb42e215"
                    language-code="hi"
                ></df-messenger>
            `;
            contentContainer.appendChild(messengerContainer);
            window.dfMessenger.openChat();
        };

        document.head.appendChild(dialogflowScript);
    }
}
