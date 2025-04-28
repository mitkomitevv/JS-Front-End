function solve(arr) {
    let n = Number(arr.shift());
    let members = new Map();

    for (let i = 0; i < n; i++) {
        let [name, role, skills] = arr.shift().split(' ');
        members.set(name, { role, skills: skills.split(',') });
    }

    while (arr[0] !== 'End') {
        let tokens = arr.shift().split(' / ');
        let cmd = tokens[0];
        let name = tokens[1];

        switch (cmd) {
            case 'Perform':
                let role = tokens[2];
                let skill = tokens[3];

                if (members.get(name).role === role && members.get(name).skills.includes(skill)) {
                    console.log(`${name} has successfully performed the skill: ${skill}!`);
                } else {
                    console.log(`${name} cannot perform the skill: ${skill}.`);
                }
                break;
            
            case 'Reassign':
                let newRole = tokens[2];

                members.get(name).role = newRole;
                console.log(`${name} has been reassigned to: ${newRole}`);
                break;

            case 'Learn Skill':
                let newSkill = tokens[2];

                if (members.get(name).skills.includes(newSkill)) {
                    console.log(`${name} already knows the skill: ${newSkill}.`);
                } else {
                    members.get(name).skills.push(newSkill);
                    console.log(`${name} has learned a new skill: ${newSkill}.`);
                }
        }
    }
    
    for (let [name, data] of members) {
        console.log(`Guild Member: ${name}, Role: ${data.role}, Skills: ${data.skills.sort().join(', ')}`);
    }
}
