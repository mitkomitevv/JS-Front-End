function solve(arr) {
    let n = Number(arr.shift());
    let crew = new Map();

    for (let i = 0; i < n; i++) {
        let [name, section, skills] = arr.shift().split(' ');
        crew.set(name, { section, skills: skills.split(',') });
    }
    console.log(crew)

    while (arr[0] !== 'End') {
        let tokens = arr.shift().split(' / ');
        let command = tokens[0];
        let name = tokens[1];
        
        switch (command) {
            case 'Perform':
                let section = tokens[2];
                let skill = tokens[3];
                
                if (crew.get(name).section === section && crew.get(name).skills.includes(skill)) {
                    console.log(`${name} has successfully performed the skill: ${skill}!`);
                } else {
                    console.log(`${name} cannot perform the skill: ${skill}.`);
                }
                break;
                
            case 'Transfer':
                let newSection = tokens[2];
                crew.get(name).section = newSection;
                console.log(`${name} has been transferred to: ${newSection}`);
                break;
                
            case 'Learn Skill':
                let newSkill = tokens[2];
                
                if (crew.get(name).skills.includes(newSkill)) {
                    console.log(`${name} already knows the skill: ${newSkill}.`);
                } else {
                    crew.get(name).skills.push(newSkill);
                    console.log(`${name} has learned a new skill: ${newSkill}.`);
                }
                break;
        }
    }

    for (let [name, data] of crew) {
        console.log(`Astronaut: ${name}, Section: ${data.section}, Skills: ${data.skills.sort().join(', ')}`);
    }
}
