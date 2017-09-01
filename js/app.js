const alert = document.querySelector('.alert');
const $socWidget = $("#myWidget4");
const $submitButton = $("#myWidget7 .btn");
USERS = [
    {
        "name": "Michal Janek",
        "date": "10/15/2017",
        "email": "mikael.janek@gmail.com",
        "avatar": "images/gary.jpg"
    },
    {
        "name": "Bob Smithsonian",
        "date": "10/15/2017",
        "email": "random.chick@gmail.com",
        "avatar": "images/gary.jpg"
    },
    {
        "name": "Mary Ann",
        "date": "10/15/2017",
        "email": "mary.lamb@hotmail.com",
        "avatar": "images/gary.jpg"
    },
];
SOCIAL_SITES = [
    {
        "name": "Twitter",
        "logo": "icons/icon-twitter.svg",
        "shares": 10345
    },
    {
        "name": "Facebook",
        "logo": "icons/icon-facebook.svg",
        "shares": 8796
    },
    {
        "name": "Google+",
        "logo": "icons/icon-google-plus.svg",
        "shares": 2534
    },
];
//Events
    // Event for removing alert box upon clicking X
alert.addEventListener("click", (e)=> {
    if (e.target.className === "alert-close") {
        e.target.parentNode.remove();
    }
});
// Social stats widget
for (let i =0; i < SOCIAL_SITES.length; i++) {
    const $divSocial = $('<div class="social"></div>');
    const $divImage = $('<div class="social-icon"></div>');
    const $divText = $('<div class="social-text"></div>');
    //Append main social div into widget container
    $socWidget.append($divSocial);
    //Append div for image to outer social div
    $divSocial.append($divImage);
    //Append image to its div
    $('<img/>', {
        class: 'icon-logo',
        src: SOCIAL_SITES[i].logo,
    }).appendTo($divImage);

    //Append div for text to outer social div
    $divSocial.append($divText);
    //Append text elements into text div
    $('<h3/>', {
        class: 'social-title',
        text: SOCIAL_SITES[i].name,
    }).appendTo($divText);
    $('<p/>', {
        class: 'social-shares',
        text: SOCIAL_SITES[i].shares,
    }).appendTo($divText);
}
// Members widget
const memberHTML = "<ul class='members-list'></ul>";
$('#myWidget5').append(memberHTML);
// $('#myWidget6').append(memberHTML);
const createListItem = (
                        name,
                        email,
                        avatar,
                        date) => {
    $('.members-list').append("<li class='list-item'>" +
        "<img src='' class='icon-logo'/>" +
        "<div class='members-text'><p>"+name+"</p><a href='#'>"+email+"</a></div>" +
        "<span class='text-side'>"+date+"</span>" +
        "</li>");
    $(".members-list .icon-logo").attr("src", avatar);
};


for (let i=0; i < USERS.length; i++) {
    createListItem(
        USERS[i].name,
        USERS[i].email,
        USERS[i].avatar,
        USERS[i].date);}


// ==================================
// Recent activity widget



// ==================================
//Message User widget
const checkValid =()=>{
  const nameInput = $("#myWidget7 .user-name").val();
  const textareaInput =$("#myWidget7 .user-message").val();
  const validText = "Please make sure you entered your Name and your Message.";
  const $alertMessage = $("<span class='valid-alert'>"+validText+"</span>");

  $(".valid-alert").remove();
    if (nameInput === null || nameInput === "") {
        $alertMessage.insertBefore($submitButton);
        return false;
  } if(textareaInput === null || textareaInput === "") {
        $alertMessage.insertBefore($submitButton);
        return false;
  }
  //If none of the conditions were true then function automatically returns true and ends
    return true;
};

$submitButton.click((e)=>{
    if (checkValid()) {
        console.log("Yes");
    }else {
        e.preventDefault()
    }
});
// ==================================
// Options for charts
let globalOptions = {
    responsive: true,
    legend: {
        display: false
    }
};
// Line chart
const ctx1= document.getElementById('myWidget1').getContext('2d');
const lineChart = new Chart(ctx1, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "none",
            backgroundColor: '#7377BF',
            borderColor: '#7377BF',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options: globalOptions
});

const ctx2 = document.getElementById('myWidget2').getContext('2d');
const barChart = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            backgroundColor: '#7377BF',
            borderColor: '#7377BF',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options: globalOptions
});

const ctx3 = document.getElementById('myWidget3').getContext('2d');
const pieChart = new Chart(ctx3, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options: globalOptions
});
