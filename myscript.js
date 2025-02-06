let users = [];

function showform() {
    let message = document.getElementById("message");
    
    message.innerHTML = `
    <div class="container">
        <div class="box">
            <h3>GOKU DRAGON BALL Z ENGINEERING COLLEGE</h3>
            <div class="xbox">
                <input type="text" required placeholder="wassur name hoy" id="name"><br><br>
            </div>
            <div class="xbox1">
                <input type="text" required placeholder="email ray ra" id="email"><br><br>
            </div>
            <div class="xbox2">
                <input type="password" required placeholder="piss sorry password" id="pass"><br><br>
            </div>
            <div class="xbox3">
                <input type="date" required placeholder="when was u born" id="date"><br><br>
            </div>
            <div class="xbox4">
                <button onclick="f1()">LOGIN</button>
            </div>
        </div>
    </div>`;
}

function f2() {
    let message = document.getElementById("message");
    let str = "";

    for (let i = 0; i < users.length; i++) {
        str += `<div>${users[i].name} - ${users[i].email} - ${users[i].password} - ${users[i].dob} 
                <button onclick='deleteUSER(${i})'>Delete</button></div>`;
    }

    message.innerHTML = str;
}

function f1() {
    let n = document.getElementById("name").value;
    let e = document.getElementById("email").value;
    let p = document.getElementById("pass").value;
    let d = document.getElementById("date").value;
    let message = document.getElementById("message");

    let user = {
        name: n,
        email: e,
        password: p,
        dob: d
    };

    users.push(user);
    f2();
}

function deleteUSER(index) {
    users.splice(index, 1);
    f2();
}
