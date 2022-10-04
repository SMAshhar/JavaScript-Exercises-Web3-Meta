var current_users  = ["noshad", "ali", "noman", "aish", "kanta"];
var new_users = ['Ali', 'Neeko', 'Aish', 'lunara', 'Naami'];

for (var i = 0; i<new_users.length; i++) {
    if (current_users.includes(new_users[i].toLowerCase())) {
        console.log("Already in use. Please choose any other name.")
    } else {
        console.log("Name is available.")
    }
}
