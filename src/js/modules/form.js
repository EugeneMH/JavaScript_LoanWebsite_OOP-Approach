export default class Form {
    constructor () {
        this.forms = document.querySelectorAll('.form');
        this.postData = async (url, data) => {
            let response = await fetch(url, {
                method: 'POST',
                body: data
            });

        return await response;
        };
    }

    maskPhone() {
        const phoneFields = document.querySelectorAll('[name="phone"]');
        phoneFields.forEach(field => {
            field.addEventListener('input', (e) => {
                let a = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
                e.target.value = !a[2] ? a[1] : '(' + a[1] + ') ' + a[2] + (a[3] ? '-' + a[3] : '');
              });
        });
    }

    checkForCyrillics() {
        let inputs = document.querySelectorAll('[name="email"]');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                input.value = input.value.replace(/[а-яА-ЯЁё]/, '');
            });
        });
    }   

    init() { 
        this.checkForCyrillics();
        this.maskPhone();
        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                const data = new FormData(form);


                let info;
                if (form.querySelector('.btn').nextElementSibling) {
                    info = form.querySelector('.btn').nextElementSibling;
                } else {
                    info = document.createElement('div');
                    info.style.cssText = `
                    font-size: 15px;
                    font-weight: 900;
                    line-height: 20px;
                    margin-top: 11px;
                    width: 340px;
                    `;
                    form.appendChild(info);
                }
                info.classList.add('animated', 'fadeIn');

                this.postData('./assets/question.php', data)
                .then(response => {
                    console.log(response.ok);
                    // console.log(info);
                    info.innerHTML = 'Data sent successfully';

                    if (!response.ok) {
                        info.innerHTML = 'Something went wrong, please try again later';
                    }
                })
                .catch( () => {
                    info.innerHTML = 'Something went wrong, please try again later';
                    console.log('wrong');
                })
                .finally( ()=> {
                    setTimeout( ()=> {
                        info.innerHTML = '';
                    }, 3000);
                });
            });
        });
    }
}