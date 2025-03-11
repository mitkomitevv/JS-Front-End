function solve(arr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    let n = arr.shift();
    let typeSong = arr.pop();

    for (let i = 0; i < n; i++) {
        let [type, name, runtime] = arr[i].split('_');
        songs.push(new Song(type, name, runtime));
    }

    if (typeSong === 'all') {
        songs.forEach((i) => console.log(i.name))
    } else {
        let filteredSongs = songs.filter((i) => i.typeList === typeSong);
        filteredSongs.forEach((i) => console.log(i.name));
    }
}
