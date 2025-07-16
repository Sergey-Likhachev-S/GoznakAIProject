
document.addEventListener('DOMContentLoaded', () => {

    // Плавный скролл для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Интерактивная консоль AI-агента
    const aiAskButton = document.getElementById('ai-ask-button');
    const aiQuestionInput = document.getElementById('ai-question-input');
    const aiResponseOutput = document.getElementById('ai-response-output');

    aiAskButton.addEventListener('click', () => {
        const question = aiQuestionInput.value.trim();
        if (question) {
            aiResponseOutput.classList.remove('visible');
            
            // Имитация задержки ответа от AI
            setTimeout(() => {
                const p = aiResponseOutput.querySelector('p');
                p.textContent = `Анализирую ваш вопрос: "${question}"...`;
                aiResponseOutput.classList.add('visible');

                setTimeout(() => {
                    p.textContent = "Ответ сгенерирован! AI Agent предлагает комплексное решение, включающее оптимизацию бизнес-процессов и внедрение передовых технологий для масштабирования.";
                }, 2000);

            }, 500);
        }
    });

    // Анимация появления блоков при прокрутке (ScrollReveal)
    // Подключите ScrollReveal.js в HTML, если хотите использовать эту функцию.
    // <script src="https://unpkg.com/scrollreveal"></script>
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal().reveal('.features-section, .interactive-section, .testimonials-section, .pricing-section, .subscribe-section', {
            origin: 'bottom',
            distance: '50px',
            duration: 800,
            easing: 'ease-in-out',
            reset: false
        });
        ScrollReveal().reveal('.feature-card, .testimonial-card, .pricing-card', {
            interval: 200,
            scale: 0.95,
        });
    } else {
        console.log("ScrollReveal is not loaded. Animations will be disabled.");
    }
});

