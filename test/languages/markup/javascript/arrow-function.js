const sum = (a, b) => a + b;
const getTime = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    return `${hours}:${minutes}`;
};


// Arrow function

const sum = (a, b) => a + b;
const getTime = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    return `${hours}:${minutes}`;
};

// class

class User {
    constructor(name) {
        this.name = name;
    }

    say(text) {
        alert(`${this.name} say: ${text}`);
    }
}

let user = new User("Kevin");

// keywords

function test() {
    ['test', 'keywords'].forEach((name, index) => {
        const regExp = new RegExp(/test/, 'gm');
        var match;

        while (match = regExp.exec(name)) {
            let token = new Token(match[0], match.index);

            if (getTokenIndex(token) >= 0) {
                tokens.splice(token.index, 0, token);
            } else {
                tokens[Math.abs(token.index)] = token;
            }
        }
    });
await
    return true;
}

// method-call
text.next().wait().continue(0);

// multiline comment

/*
    line 1
    line ...
    line N
*/


// Object attr
{
  key0: value,
  key1: value,
  'key-2': value,
  key_3: false ? undefined : true
}

// Template String
`string ${foo + `str${undefined}ing`}`;
