// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        launchApp();
    } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        document.getElementById('status').innerHTML = 'Please log ' + 'into this app.';
    } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        document.getElementById('status').innerHTML = 'Please log ' + 'into Facebook.';
    }
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

window.fbAsyncInit = function() {
    FB.init({
        appId      : '1719791898287877',
        cookie     : true,  // enable cookies to allow the server to access 
                            // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.6' // use version 2.6
    });
    // Now that we've initialized the JavaScript SDK, we call 
    // FB.getLoginStatus().  This function gets the state of the
    // person visiting this page and can return one of three states to
    // the callback you provide.  They can be:
    //
    // 1. Logged into your app ('connected')
    // 2. Logged into Facebook, but not your app ('not_authorized')
    // 3. Not logged into Facebook and can't tell if they are logged into
    //    your app or not.
    //
    // These three cases are handled in the callback function.

    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
};

var scope = {
    user: {},
    groups: {}
};

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function launchApp() {
    console.log('Welcome! Fetching your information.... ');
    fetchMe();
    fetchGroups();
}

function fetchMe() {
    FB.api("/me", function(response) {
        scope.user = response;
        displayHTMLUser();
    });
    FB.api("/me/picture", function(response) {
        var picture = response.data;
        document.getElementById('status').innerHTML += "<img src=\"" + picture.url +"\"></img>";
    });
}

function displayHTMLUser() {
    var user = scope.user;
    document.getElementById('status').innerHTML = "<h1>Welcome " + user.name + "</h1>";
}

function fetchGroups() {
    FB.api("/me/groups", function(response) {
        var groups = response.data;
        for (var i = 0; i < groups.length; i++) {
            var group = groups[i];
            addGroupToScope(group);
        }
        var htmlGroups = buildHTMLGroupList(groups);
        document.getElementById("content").innerHTML = htmlGroups;
    });    
}

function addGroupToScope(group) {
    group.feeds = {};
    scope.groups[group.id] = group;
}

function buildHTMLGroupList(groups) {
    var html = "<ul>";
    for (var i = 0; i < groups.length; i++) {
        var group = groups[i];
        html += buildHTMLGroupLink(group);
    }
    html += "</ul>";
    return html;
}

function buildHTMLGroupLink(group) {
    var html = "<li>";
    html += "<a href=\"#/groups/" + group.id + "\" onclick=\"displayGroupFeed(" + group.id +")\">" + group.name + "</a>";
    html += "<div id=\"group_" + group.id +"\"><ul></ul></div>";
    html += "</li>";
    return html;
}

function displayGroupFeed(groupId) {
    var group = scope.groups[groupId];
    fetchFeed(group);
}

function fetchFeed(group) {
    FB.api(group.id + "/feed", function(response) {
        var feeds = response.data;
        addFeeds(group, feeds);
    });
}

function addFeeds(group, feeds) {
    var htmlFeeds = "";
    for(var i = 0; i < feeds.length; i++) {
        var feed = feeds[i];
        scope.groups[group.id].feeds[feed.id] = feed;
        htmlFeeds += buildHTMLFeedLink(feed, group);
    }
    document.getElementById("group_" + group.id).innerHTML = htmlFeeds;
}

function buildHTMLFeedLink(feed, group) {
    var html = "<li>";
    html += "<a href=\"#/groups/" + group.id +"/feeds/" + feed.id +"\">" + feed.story + "</a>";
    html += "</li>";
    return html;
}

function fetchComments(feed) {
    FB.api(feed.id + "/comments", function(response) {
        console.log("Receive " + feed.story + " comments : ", response.data);
    });
}