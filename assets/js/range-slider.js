const rangeSlider = document.querySelector('#range-slider');
const rangeSlider2 = document.querySelector('#range-slider2');

if (rangeSlider) {

    noUiSlider.create(rangeSlider, {
        start: [500, 25000],
        connect: true,
        step: 1,
        range: {
            'min': [500],
            'max': [25000]
        }
    });

    const input0 = document.querySelector('#input-0');
    const input1 = document.getElementById('input-1');


    const inputs = [input0, input1];

    rangeSlider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = Math.round(values[handle]);
    });

    const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;
        rangeSlider.noUiSlider.set(arr)
    }

    inputs.forEach((e, index) => {
        e.addEventListener('change', (e) => {
            setRangeSlider(index, e.currentTarget.value)
        })
    })
}

if (rangeSlider2) {

    noUiSlider.create(rangeSlider2, {
        start: [1, 12],
        connect: true,
        step: 1,
        range: {
            'min': [1],
            'max': [12]
        }
    });

    const input0 = document.querySelector('#input-3');
    const input1 = document.getElementById('input-4');


    const inputs = [input0, input1];

    rangeSlider2.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = Math.round(values[handle]);
    });

    const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;
        rangeSlider2.noUiSlider.set(arr)
    }

    inputs.forEach((e, index) => {
        e.addEventListener('change', (e) => {
            setRangeSlider(index, e.currentTarget.value)
        })
    })
}