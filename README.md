# Hello-angular

TODO: add some introduction here!!

## The dynamic form builder

This feature allows you build dynamic forms based on a Javascript Object. To define the fileds that the form should have, create an object like:

```Javascript

{
	// define a textbox field
	name: { // the field name
		label: 'Nombre', // the field label
		type: 'text', // the input type
		placeholder: 'tu nombre...', // a palce holder for the field
		labelClass: 'my-label-class', // classes for the input label tag
		inputClass: 'my-input-class', // classes for the input
		inputGridClass: 'my-grid-class-for-input' // classes for the input wrapper
	},
	// define a select dropdown with static options
	country: {
		label: 'Country',
		type: 'select',
		multiple: false, // it's a multiple dropdown?
		options: [ // the dropdown options
			{ value: 1, label: 'Colombia' },
			{ value: 2, label: 'Perú' },
		]
	},
	// define a select dropdown with dynamic options  (given in the data ()Input component) based on another form value
	state: {
		label: 'State',
		type: 'select',
		multiple: false,
		dependantDynamicOptions: { // options depends on another field value
			field: 'country', // depends on the country field value
			data: 'departments', // the data object key where we go to filter and map to retrieve our options
			key: 'country_id' // the above object key used to filter the data
		},
	},
	// select dropdown multiple
	abilities: {
		label: 'Abilities',
		type: 'select',
		multiple: true,
		options: [
			{ value: 'php', label: 'PHP' },
			{ value: 'ruby', label: 'Ruby' },
			{ value: 'python', label: 'Python' },
			{ value: 'javascript', label: 'Javascript' },
			{ value: 'css', label: 'CSS' },
			{ value: 'html', label: 'HTML' },
		]
	}
	// define a radio button
	genre: {
		label: 'Genre',
		type: 'radiobutton',
		options: [ // the options
			{ value: 'm', label: 'Male' },
			{ value: 'f', label: 'Female' },
		]
	},
	// define a textarea
	comments: {
		label: 'comments',
		type: 'textarea',
	},
	// define checkbox array 
	topics: {
		label: 'Topics',
		type: 'checkbox-array',
		options: [
			{ value: 'science', label: 'Science' },
			{ value: 'tech', label: 'Technology' },
			{ value: 'robotics', label: 'Robotics' },
			{ value: 'programming', label: 'Programming' },
		]
	},
	// single checkbox, for boolean data maybe?
	active: {
		label: 'Activate Account?',
		type: 'checkbox',
		option: { value: 'true', label: 'Yes!!' } // object, not array
	},
}

``` 