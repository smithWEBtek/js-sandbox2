
	1. Record the meeting to give to student in an unlisted youtube link.
	2. Fork, clone and make a branch to work in.
		a. If student is weak at coding or typing, you might want to take over and demo these things.
		b. Give them a link to your branch after the meeting.
		c. Give them a link to the recording of the meeting.
	3. Show me your app
		a. BRIEFLY allow student to walk through app
		b. Focus on data model, List, Show, HasMany in the context of this app.
	4. Touch on requirements
		a. How will you show data for an index of 'things'?
		b. How will you show data for a single 'thing'?
		c. Which 'has_many' relation will you demo in your assessment?
		d. What form will you use to post data back to Rails server and database?
	5. Active Model Serializer gem
		a. Add to gem file if needed
		b. Bundle and restart Rails
		c. rails g serializer <model_name>
	6. JSON data in controller using 'respond_to do |format|' etc. 
	7. Verify JSON data in browser
	8. Remove TurboLinks in 3 places:
		a. in  app/assets/javascripts/application.js
		b. in app/views/layouts/application.html.erb ( remove references to turbo links from 2 tags in head
		c. comment out the TurboLins gem
		d. bundle and restart Rails
	9. Get JQuery working 
		a. confirm they have  gem 'jquery-rails'
		b. create a javscript file in app/assets/javascripts/application.js
		c. put jquery document ready function at top
			i. $(function(){    console.log('jquery is alive! ....')
			})
			ii. trouble shoot jquery load order if errors like "  $ is not a function" 
			iii. move jquery to top of list in  app/assets/javascripts/application.js
			iv. check  app/views/layouts/application.html.erb for weird placement of jquery CDN link; sometimes happens with Bootstrap. 
			v. When it  doubt, try to get jquery loading first, as early as possible
	10. Set up an ajax request in a function
		a. Be sure that the JSON data is already working in the browser at intended URL
		b. Be suer that you are actually calling your function when the page loads
		c. Get json data response showing in Chrome console
	11. Demo the javascript class contructor sytax, appropriate to the data you fetched
	12. Demo the custom function on class prototype, using it to display HTML for a single item
	13. Remind them that the JSON data is an array, and you have only demoed 1 item in the array when you create a class instance and call the custom html method to put on the DOM.
	14. Talk through 3 options for rendering an HTML form
		a. Rails partial or view with layout false
		b. JS static function on class to render form
		c. Handlebars template or other framework
		d. EMPHASIZE THAT THIS IS THE ONLY TIME YOU WOULD BRING BACK HTML VIA AN AJAX REQUEST FOR THIS PROJECT. All other requests return JSON data.
	15. Remind them of study groups and Alice office hours.
	16. Set expectations for Slack help
