
        document.getElementById('brandSearch').addEventListener('input', function() {
            let filter = this.value.toLowerCase();
            let items = document.querySelectorAll('.brand-item');
            let container = document.getElementById('container');
            let found = false;

            items.forEach(item => {
                let text = item.querySelector('span').innerText.toLowerCase();
                if(text.includes(filter)) {
                    item.style.display = "flex";
                    found = true;
                } else {
                    item.style.display = "none";
                }
            });

            let existingError = document.getElementById('search-error');
            if (!found) {
                if (!existingError) {
                    let msg = document.createElement('p');
                    msg.id = 'search-error';
                    msg.innerHTML = "> UNKNOWN SYSTEM IDENTIFIER";
                    msg.style.cssText = "color: #ff4d4d; grid-column: 1/-1; text-align: center; padding: 40px; font-family: 'Syncopate'; font-size: 11px; letter-spacing: 2px;";
                    container.appendChild(msg);
                }
            } else if (existingError) {
                existingError.remove();
            }
        });
    