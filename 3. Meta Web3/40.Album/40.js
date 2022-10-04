function album(artist, album, tracks='') {
    if (tracks !== '') {
        obj1 = {
            artist : artist,
            album : album,
            tracks : tracks
        }
        return obj1
    } else {
        obj1 = {
            artist : artist,
            album : album,
        }
        return obj1
    }
}
console.log(album("JJ", "DIL DIL"))
console.log(album("Ivan Torrent", "Path to Eaden", 5))
console.log(album("Hoogway","Missing Eath"))