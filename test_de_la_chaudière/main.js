
    document.getElementById('diagSearch').addEventListener('input', function() {
        let filter = this.value.toUpperCase(); // تحويل البحث لأحرف كبيرة لتطابق الأكواد
        let cards = document.querySelectorAll('.error-card');
        let grid = document.getElementById('errorGrid');
        let found = false;

        cards.forEach(card => {
            // البحث داخل الكود، العنوان، والوصف
            let code = card.querySelector('.error-code').innerText.toUpperCase();
            let title = card.querySelector('.error-title').innerText.toUpperCase();
            let desc = card.querySelector('.error-desc').innerText.toUpperCase();
            
            if (code.includes(filter) || title.includes(filter) || desc.includes(filter)) {
                card.style.display = ""; // إظهار البطاقة
                found = true;
                // إضافة تأثير وميض خفيف عند ظهور النتائج
                card.style.animation = "fadeIn 0.3s ease";
            } else {
                card.style.display = "none"; // إخفاء البطاقة
            }
        });

        // رسالة تنبيه في حال عدم وجود نتائج
        let existingError = document.getElementById('search-error');
        if (!found) {
            if (!existingError) {
                let msg = document.createElement('div');
                msg.id = 'search-error';
                msg.innerHTML = `
                    <p style="color: #ff4d4d; font-family: 'Syncopate'; font-size: 12px; letter-spacing: 3px;">
                        > ERROR CODE NOT FOUND IN DATABASE
                    </p>
                    <p style="color: #64748b; font-size: 11px; margin-top: 10px;">
                        Check the identifier and try again.
                    </p>
                `;
                msg.style.cssText = "grid-column: 1/-1; text-align: center; padding: 60px 20px; border: 1px dashed rgba(255, 77, 77, 0.3); border-radius: 10px; background: rgba(255, 77, 77, 0.02);";
                grid.appendChild(msg);
            }
        } else if (existingError) {
            existingError.remove();
        }
    });

    // إضافة أنيميشن بسيط للظهور
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
