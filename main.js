function req() {
    const xhr = new XMLHttpRequest();
    const url = 'https://api.2b2t.dev/status';
    
    return new Promise((resolve, reject) => {
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            resolve(response[1][0]);
          } else {
            reject('Request failed. Status code:', xhr.status);
          }
        }
      };
              xhr.open('GET', url);
      xhr.send();
    });
}

function check(array, username) {
    const SUCCESS = "yep :p";
    const FAILURE = "noo :d";

    const usernames = Object.keys(array);
    const upper = usernames.map(element => {
        return element.toUpperCase();
    });

    if (upper.includes(username.toUpperCase())) {
        document.getElementById("res").innerHTML = SUCCESS;
    }

    else {
        document.getElementById("res").innerHTML = FAILURE;
    }
}