## Rails w/JS Portfolio Project
- [Rails w/JS Portfolio project page](https://learn.co/lessons/rails-js-assessment)

- [project specs](https://docs.google.com/document/d/1__ggX6daBp_Lc6EWFEYXASR-UnskU5Hy9UnXGCez3mc/edit)

- [project kickoff meeting checklist](https://docs.google.com/document/d/1vCRVElNxknmF7oxWCDDqVVNTZElhHfp1kKE1HaSif9c/edit?ts=5bd754b1)

- [Rails w/JavaScript Project Checklist:  Alice Balbuena presentation](https://docs.google.com/presentation/d/11XLlVKOJCS6tC0db6L5ND-Y2zMU7crXlTpq7Y1vVQyA/edit#slide=id.p)

## Study Group Video: Intro to the project
[Github Repo in this video](https://github.com/smithWEBtek/ajaxblog)
[![study-group-video](https://i.ytimg.com/vi/b93S2_Hc8z8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBVr1OXvxh6GDQLFZEP3PvRJt0izw)](https://www.youtube.com/embed/b93S2_Hc8z8)

## Rails app basics

- Put some basic navigation your `layouts/application.html.erb`

```html
  <body>
    <section class="section">
      <div class="container">
        <h1 class="title">
          Ajaxblog
        </h1>
      </div>
      <div class="column">
        <%= link_to "All Posts", posts_path %> |
        <%= link_to "Rails:NewPost", new_post_path %> |
        <%= link_to "Ajax:NewPost", new_post_path, class: 'ajax-new-post' %>
        <hr>
        <div id="flash_messages" class="flash_style">
          <% flash.each do |key, value| %>
            <%= content_tag(:div, value, :class => "flash #{key}") %>
          <% end %>
        </div>
        <%= yield %>
      </div>
    </section>
  </body>
```
gives you this:

![nav sample](https://res.cloudinary.com/smithwebtek/image/upload/v1544484794/rails-wjs-project/basic-nav.png)

- Create a seed file for your Rails app
- Make sure you build objects in the right order (comment requires a post_id, so create Posts first)

```ruby
  Post.create(title: "The New Dog", content: "He was not a happy dog, having been tied up for long periods of   time.")
  Post.create(title: "Our Boat", content: "It is a big red boat.")
  Post.create(title: "Dinner", content: "We arrived a little early, which caused some awkward silence.")
  
  Comment.create(post_id: 1, content: 'I love all dogs.')
  Comment.create(post_id: 1, content: 'We have a good dog.')
  Comment.create(post_id: 1, content: 'I am a cat person.')
  
  Comment.create(post_id: 2, content: 'Can we have a picnic on your boat?')
  Comment.create(post_id: 2, content: 'Did you paint it red?')
  Comment.create(post_id: 2, content: 'There was a Disney cruise ship called the big red boat.')
  
  Comment.create(post_id: 3, content: 'Aunt Jean had begun drinking early as well.')
  Comment.create(post_id: 3, content: 'Sara brought her famous cheese cake.')
  Comment.create(post_id: 3, content: 'Is there any more guack?')
```

- [Use this Rake task to Dump Create Migrate Seed and Start Rails](https://gist.github.com/smithWEBtek/07ae565855801c0fe9ff066baf0b7ef0)

in `app/lib/tasks/dcms.rake`
 
```ruby
namespace :db do
  desc 'Drop, Create, Migrate, Seed db, Start rails server'
  task dcms: :environment do
    puts 'dropping db....'
    Rake::Task['db:drop'].invoke
    
    puts 'creating db....'
    Rake::Task['db:create'].invoke
    
    puts 'running migrations ....'
    Rake::Task['db:migrate'].invoke
    
    puts 'seeding db ....'
    Rake::Task['db:seed'].invoke
    
    puts 'starting rails server ....'
    exec('rails s')    
  end
end
```

after you code this, check in your terminal to see if it shows up in Rake tasks:

run: `rake -T`

you should see the new rake task in the list:
```ruby
// ♥ rake -T
rake db:dcms  # Drop, Create, Migrate, Seed db, Start rails...
```

## Active Model Serializer
- Exploit all ActiveModel relationships for JSON data
- You must see JSON data at your URL's in Rails (where you intend it) for the rest of this to work
- in `serializers/post_serializer.rb` you have to add code to get all the JSON goodness

```ruby
class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content
  has_many :comments
end
```
- Set up your Rails controllers to provide JSON data (wherever your AJAX requests land)

```ruby
respond_to do |format|
  format.html {render :index, layout: false}
  format.json {render json: @posts}
end
```

## Custom Rails routes
- You can create custom routes where you serve up data in JSON format
- Make sure to modify `config/routes.rb` to get the routes working
```ruby
get '/myroute', to: 'mycontroller#myroute'
```
- Again, you must see JSON data at your URL's in Rails (where you intend it) for the rest of this to work
```ruby
def myroute
 @mydata = Post.my_custom_method
 render json: @mydata
end
```

## Methods for retrieving data (HTML or JSON) from Rails
[XHR request docs](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) (yes, this is still a thing)

[Brad Traversy: Crash course video on XHR and AJAX](https://www.youtube.com/watch?v=82hnvUYY6QA)

[AJAX request](http://api.jquery.com/jQuery.ajax/)

```javascript
$.ajax({
  url: "test.html",
  context: document.body
}).done(function() {
  $( this ).addClass( "done" );
});
```

[FETCH request](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

```javascript
fetch('https://swt-movies.herokuapp.com/')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
```

## Managing the flow in Javascript
- Document ready (good place to call your listeners)
- Listeners, that listen for events 
	- good place to fire your functions based on events
- Functions called by listeners ()
- How to manage the DOM
- Naming your functions
- Calling your functions deliberately based on your intended flow
	
```javascript
// document ready, listeners called
$(() => {
  listenerCommentsClick()
  listenerNewPostFormClick()
  listenerPostDetailsClick()
  // listenerNewCommenClick()
  // why not listen for this on document ready?
})
```

## Debugging
- Use console.log with labels to keep your mind right
- Build your debugging skills with Chrome css selector tool, to verify what you are listening to
- Use Chrome console to see everything

![chrome](https://res.cloudinary.com/smithwebtek/image/upload/v1544483956/rails-wjs-project/chrome-css-selector.png)

- Use `binding.pry` in your controller actions where you expect a request to 'land'
- Your Rails controller "strong params" dictate the format of the data object you should send 
```ruby
params = {post: {
  title: 'My Latest Post', 
  content: 'This is a long post ...'}
  }
```
## Rendering a form
(see video above)

## Rendering a list
(see video above)

## Rendering a has_many
(see video above)
 
## JavaScript Object Model
(see video above)
- [Codepen example of JavaScript Object Model:  Alice Balbuena](https://codepen.io/Balbasuar/pen/LXNyrV?editors=1010)


## Learn Curriculum Videos: 
### Rails with Ajax 4 videos:  Avi Flombaum

####	1. [Video Review: Loading Comments via GET AJAX](https://learn.co/tracks/full-stack-web-development-v6/rails-and-javascript/using-ajax-and-rails/video-review-loading-comments-via-get-ajax)

- First 50 minutes covers HTML response and JSON response from Rails server.
- Code every single thing Avi does until you get the results he shows.
- Do not use "remote: true", which is demonstrated after the 50 minute mark
	
#### 2. [Video Review: Rails and AJAX, Submitting a Form](	https://learn.co/tracks/full-stack-web-development-v6/rails-and-javascript/using-ajax-and-rails/video-review-rails-and-ajax-submitting-a-form)

- First 39 minutes covers retrieving an HTML form (a Rails partial) which is rendered to DOM
- Javascript and JSON send the form data back to Rails controlller
- Do not use "remote: true", which is demonstrated after the 39 minute mark

####	3. [Video Review: Adding Form Fields via AJAX](https://learn.co/tracks/full-stack-web-development-v6/rails-and-javascript/using-ajax-and-rails/video-review-adding-form-fields-via-ajax)
- This is a trouble shooting session, valuable to learn from.
	
#### 4. [Video Review: Handlebars and JS Prototypes](https://learn.co/tracks/full-stack-web-development-v6/rails-and-javascript/using-ajax-and-rails/video-review-handlebars-and-js-prototypes)
- This is a very fast paced implementation of Handlebars.
- Be ready to slow it down, rewind and chew very slowly on each part.
 

## Learn Curriculum labs: 
- [Active Model Serializer to render JSON data in Rails](https://learn.co/tracks/full-stack-web-development-v6/rails-and-javascript/building-apis/using-active-model-serializer)

- [Asset Pipeline in Rails](https://learn.co/tracks/full-stack-web-development-v6/rails-and-javascript/asset-pipeline/what-is-the-asset-pipeline)
	- What if my JQuery is not working?
	- What if my JavaScript file is not being recognized by Rails?
	
- [JavaScript Object Model](https://learn.co/tracks/full-stack-web-development-v6/javascript/object-oriented-js/creating-objects)

## Additional resources:
### Alice Balbuena: Codepen example
- [JavaScript Object Model](https://codepen.io/Balbasuar/pen/LXNyrV?editors=1010)

### Cernan Bernardo videos:  Rails API w/JS Frontend
- [Rails API with JS Frontend - 1](https://instruction.learn.co/student/video_lectures#/309)

- [Rails API with JS Frontend - 2](https://instruction.learn.co/student/video_lectures#/311)

- [Rails API with JS Frontend - 3](https://instruction.learn.co/student/video_lectures#/312)

### Matt Cassara Handlebars tutorial :
- [Using AJAX and HandlebarsJS in Ruby on Rails](https://www.mattcassara.com/using-ajax-handlebarsjs-rails/)

### Style
- [Checkout Bulma!](https://bulma.io/)
- [Bulma crash course video](https://www.youtube.com/watch?v=IiPQYQT2-wg)
- [CSS grid crash course video](https://www.youtube.com/watch?v=jV8B24rSN5o&t=240s)


### Books
- [Eloquent JavaScript](https://eloquentjavascript.net/)
- [You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS)
- [The Modern Javascript Tutorial](https://javascript.info/)

### JavaScript Primer
- [Hoisting, Scope & Promises](https://guides.emberjs.com/v3.6.0/getting-started/js-primer/)