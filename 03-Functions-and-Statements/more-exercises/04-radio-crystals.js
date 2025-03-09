function solve(arr) {
    let [target, ...chunks] = arr;
    let results = [];

    let operations = {
        'cut': (a) => a / 4,
        'lap': (a) => a * 0.80,
        'grind': (a) => a - 20,
        'etch': (a) => a - 2,
        'x-ray': (a) => a + 1,
        'washing': (a) => Math.floor(a)
    }

    for (let chunk of chunks) {
        let cut = 0;
        let lap = 0;
        let grind = 0;
        let etch = 0;
        let xRay = false;

        results.push(`Processing chunk ${chunk} microns`)

        while (true) {
            if (operations['cut'](chunk) >= target) {
                chunk = operations['cut'](chunk);
                cut++;
            } else if (operations['lap'](chunk) >= target) {
                chunk = operations['lap'](chunk);
                lap++;
            } else if (operations['grind'](chunk) >= target) {
                chunk = operations['grind'](chunk);
                grind++;
            } else if (operations['etch'](chunk) > target - 2) {
                chunk = operations['etch'](chunk);
                etch++
            }

            chunk = operations['washing'](chunk)

            if (chunk == target) {
                break;
            }

            if (operations['x-ray'](chunk) == target) {
                chunk = operations['x-ray'](chunk);
                xRay = true;
                break;
            }
        }

        if (cut) {
            results.push(`Cut x${cut}\nTransporting and washing`);
        }

        if (lap) {
            results.push(`Lap x${lap}\nTransporting and washing`);
        }

        if (grind) {
            results.push(`Grind x${grind}\nTransporting and washing`);
        }

        if (etch) {
            results.push(`Etch x${etch}\nTransporting and washing`);
        }

        if (xRay) {
            results.push(`X-ray x1`);
        }

        results.push(`Finished crystal ${chunk} microns`)
    }
    console.log(results.join('\n'))
}

