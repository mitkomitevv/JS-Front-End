document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let ratios = { days: 1, hours: 24, minutes: 1440, seconds: 86400 };
    let inputs = {
        days: document.getElementById('days-input'),
        hours: document.getElementById('hours-input'),
        minutes: document.getElementById('minutes-input'),
        seconds: document.getElementById('seconds-input')
    };

    for (let unit in ratios) {
        document.getElementById(unit + 'Btn').addEventListener('click', (event) => {
            event.preventDefault();

            let value = Number(inputs[unit].value);
            if (value < 1) {
                return;
            }

            let inDays = value / ratios[unit];
            for (let u in ratios) {
                inputs[u].value = (inDays * ratios[u]).toFixed(2);
            }
        });
    }

    let clearBtn = document.createElement('input');
    clearBtn.type = 'button';
    clearBtn.value = 'Clear';
    document.getElementsByTagName('main')[0].appendChild(clearBtn);

    clearBtn.addEventListener('click', () => {
        for (let input of Object.values(inputs)) {
            input.value = '';
        }
    });
}

