---
title: Understanding HTTP
date: 2020-08-17
published: true
cover: ./img/understand-http.png
---

## Introduction

Did you know that the moment you open your web browser, you begin to use HTTP. Well, in this post we will be looking at how HTTP works. We will cover topics such as:

- HTTP Requests/Response
- HTTP Headers
- Domain Name System (DNS)

## How the web works?

Before we begin, let's look at how the web works in general. Look at the diagram below:

![](https://i.imgur.com/0h9XCCJ.png)

Let's go in detail of how this works.

Basically, when you type `http://google.com` the browser makes a request to a DNS (Domain Name System) which returns the IP address or location of the server where data for `google.com` could be found.

The DNS returns an IP address, then the server knows that it has to return an HTML file to any client who hits the `/` (root).

Then it returns the `html` page back to the client who made the request. This is also known as a response.

## Request vs Response

A request is something that you ask for. A response is something you get.

In HTTP, a request you make can have different data depending on the request that is made.

For example, when you visit your morning news site, it does make a `GET` request which probably doesn't contain much, maybe contains a location if it is trying to find news based on your location, but that should be it.

However, lets say you `request` a specific article like:

```
https://some-news-site.com/2020-0-0-nano-starts-a-blog
```

Now, that request contains a param, and that is the news article we are requesting.

The param in this case is a URL param which is: `2020-0-0-nano-starts-a-blog`.

Now, what if the article had multiple languages, and included a `language` param.

```
https://some-news-site.com/2020-0-0-nano-starts-a-blog?lang=en
```

Now this URL has two different params.

- Route param: the news post
- URL param: the language of the post we want

Now, the response, the stuff we get back, might contain the whole entire news post we need, and could contain much more.

Let's say it gives back an HTML page that contains the news post.

```html
<h1>NEWS POST</h1>
```

## HTTP Headers

Well, when we make a request, it contains something called `Headers`.

A header basically carries extra information that the URL cannot carry.

A header might contain:

- The Request URL: The URL we are requesting to get a response back from.
- The Request Method: The method we are using to send the request.
- The Status Code: When the request comes back as a response, what is the status code for which it came back.

Now when we make a request we are allowed to send custom headers also.

Lets say we login to a site, then we get back an `auth-token`, with that token, we can make requests to any protected route with the `auth-token` in the header.

Usually when we use custom headers, we prefix it with `x-`.

For example, a popular custom header is:
`X-Powered-By`. So usually this would be telling you what the API "server" is powered by.

Lets say an API endpoint we hit has a PHP server, such as a WordPress site, then we would get back:

```
X-Powered-By: PHP/5.2.17
```

Now this could have been Node.js even, doesn't really mater at all.

Headers can be set when we make the request, and when we get a response.

## The Complete Request/Response

So far we have just spoke about concepts, now lets look at this practically.

For this example, we will use the chrome console for us to see how a complete request/response cycle basically works.

Inside of the chrome console, go to any site, and then in the console, paste in:

```js
const res = await fetch('https://jsonplaceholder.typicode.com/posts')
```

Now if you want to see the result you can run:

```js
await res.json()
```

But it isn't required to continue on.

So, under the network tab, click on it, and look for the `posts` request that was made.

Now click for the Headers tab.

![](https://i.imgur.com/RYSzdcl.png)

As you can see in the headers, we have some headers.

Now look at these headers carefully.

- We got back a status code of `200`
- The request method we made was a GET request.
- We also get back the remote address.

So those headers are just the general ones. **So what headers do you think are based on the request we made?**

**Answer:** Well, the Request Method is from us as we made a GET request ot the API. Also, the Request URL is the URL we requested data from.

Under the preview or response tab, we can see the data that we got back.

Just a quick head start, we always make GET requests from our browser URL bar. Essentially it is always a GET request.

So, paste the JSON Placeholder URL in the URL bar, and go, then you will see the exact same response you did when we made the request using `fetch()`

```
URL: https://jsonplaceholder.typicode.com/posts
```

And you should get back the response that we saw in the network tab.

## HTTP Request Methods

This section is one of the most interesting as we get into HTTP Request methods. We have seen the `GET` method, but there are many more that we need to know.

Request Methods:

- `GET`
- `POST`
- `PUT`
- `PATCH`
- `DELETE`
- `HEAD`

Those are the only ones that we will really use. The `HEAD` method is not commonly used, but it is pretty simple so I decided to cover it.

### Sandbox

Now we will once again be using the chrome console and the `fetch()` API so we can make HTTP requests to JSON Placeholder to see how they are used.

### GET Method

This is one of the most commonly used, and we have covered this in detail.

Basically, any data we want to send has to be through the `URL`.

So lets make a GET request to JSON Placeholder once again inside the Chrome Console.

```js
fetch('https://jsonplaceholder.typicode.com/posts')
```

Then go under the `Network` tab. To look at the request. Simply, we get the headers and the response of posts.

Now, let's say we want to get posts with a specific `user id`. So we can use URL query params to filter those posts.

```js
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
```

Remember that all data transmission is through the URL or the headers. But it is more common to just use the URL in GET.

### POST Request

The POST request is just like what it sounds like. We are posting data.

For example, you go to a site and fill out the form, now there are two ways we can send it. We can use `GET` to send the data through the URL or through the `body` by using the `POST` method.

A post request contains an additional section to the request.

So, let's make a `POST` request to JSON Placeholder. We will do this in the chrome console once again.

Run the code, then we will go over it.

```js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'My fav post',
    body: 'wow what a post',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
```

Now, `fetch()` allows us to define request options as a second parameter.

We define the method as a `POST`, then the `body` that we send along in our request. Now, `JSON.stringify({})`??

Well, in JavaScript we use an object usually, but let's say our API wasn't written in JavaScript, what if it was written in Python Flask.

Now, Python doesn't know a bit about JavaScript objects, so that is why any HTTP request we send, we use JSON data. But the JSON is held inside a string.

JavaScript provides us with `JSON.stringify()` for a reason obviously. With the method we can turn our JavaScript object into a JSON string.

So, according to JSON placeholder, when we make a POST request to its `/posts` route, we need to supply `title, body and userID`, which we have supplied.

Then we set a header telling the API that we sent some `application/json`, so it knows that it needs to decode the response as `JSON`, and not some other format.

Under the network tab, you should see the majority of what I have defined here.

Basically, `POST` is creating a new resource on an API.

### PUT/PATCH Request

While both being very similar, but do two different things.

#### PUT Request

`PUT` basically means to replace the whole resource. Lets say we want to replace the blog post with the id of `4`. So, we would need to provide a complete replacement of the blog post.

```js
fetch('https://jsonplaceholder.typicode.com/posts/4', {
  method: 'PUT',
  body: JSON.stringify({
    id: 4,
    title: 'The new Blog Post #4',
    body: 'Wow what a new post lol',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
```

Now the request is very similar to our `POST` request that we made, except that we have a different method.

The `POST` method created a new post, but we did not have to create a new ID since the API creates the ID automatically, however in `PUT` we are replacing it, so the API tells us to replace the ID.

#### PATCH Request

Now `PATCH` sounds like it does. It patches a resource. Lets say, a post with an id of 10 has a typo in the title, we can edit it with a `PATCH` request.

```js
fetch('https://jsonplaceholder.typicode.com/posts/10', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'Edited Title',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
```

Now, once again very similar with the other requests we have made, but this time we only provide the data that we want edited. Lets look at this request in the network tab.

![](https://i.imgur.com/j3mVOgB.png)
![](https://i.imgur.com/m2XP5HI.png)

Now the `body` has been taken from the original post. And look at the URL and the methods specially.

### `DELETE` Request Method

Now, `DELETE` is just as it sounds like. It deletes a resource!

So, lets delete Post with an `id` of `25`.

```js
fetch('https://jsonplaceholder.typicode.com/posts/25', {
  method: 'DELETE',
})
```

Very simple request. We just delete the post with id of `25`.

Very very simple probably.

### `HEAD` Request

Now a HEAD request is basically just like a `GET` request except that we do not get back the body of the response. Instead we get back just the headers.

For example:

```js
fetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'HEAD' })
```

Now, check the `network` tab, and you will see we get back `headers` only, but no body.

## HTTP Status Codes

Enough of making requests, lets start looking at some common status codes, then we shall be done!

Now, there won't be much hands on as we don't really get to control status codes much, unless you wrote the API.

Status codes are sent as a response to the client who made the request.

So, lets look at the various status codes.

- _200:_ Means that everything is **okay**. The data has been **received** or sent successfully.

- _201:_ The resource has been **created**. Usually in `POST` or `PUT`.

- _204:_ Things are okay, but there is no data to send back.

- _300:_ There are multiple options for the response, usually you should choose from HTML client options.

- _301:_ The resource has moved and server provides new URL.

- _302:_ The URL has temporarily changed, but changes will be made in the future.

- _304:_ Resource not modified meaning that the client previous cache data is still valid.

- _400:_ **Bad Response**. Maybe the JSON you sent was badly formatted or something.

- _401:_ **Not Authorized** You are trying to access a resource where you are not authorized. Usually used when you don't send auth-token in the request header.

- _403:_ Similar to `401` but the server knows who you are, but not allowed to access the resource. Maybe something like you didn't pay for.

- _404:_ Who could forget 404. Not found!

- _405:_ The request method is not allowed. You might be deleting a comment when that is not allowed or so.

This may have been alot of information in terms of status codes, but they mean alot in HTTP.

## Conclusion

So, this is it. I have covered many core concepts of HTTP in this post. Now knowing these topics ensures that now I can begin creating posts on Node.js HTTP module and even using Deno for HTTP.
