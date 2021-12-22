# Notes

once `startproject`, use `manage.py` instead of django-admin

then create an app with `python manage.py startapp bucket`
- add the name of the app ('bucket') to `settings.py`
- runserver with `runserver`

*Debugging*
- create launch.json file: open `views.py` > click 'run and debug' in VScode > 
- put breakpoint in code
- then start debug
- navigate to relevant page for debug (will 404 in browser for homepage since it's only listening to file you are debugging)
- bow you can step through lines
    - look at particular variables by adding them to 'WATCH'
- run with or without debugging with F5 shortcuts

*Coding tools*
- `$ pipenv install django-debug-toolbar` > follow [installation](https://django-debug-toolbar.readthedocs.io/en/latest/installation.html)
    - includes middleware
    - make sure to have right HTML tags for toolbar to pop up

*Django Admin*
- to create super user: `python manage.py createsuperuser`
- then go to website/admin/auth

*Database*
- `python manage.py makemigrations`
- `python manage.py migrate`
- After registering model in admin.py, can test/create new one in /admin panel

*Shell*
- `python manage.py shell`
```python
from appname.models import ModelName
ModelName.objects.create(init attrs)
```
*REST*
- [great implementation](https://stackoverflow.com/questions/21925671/convert-django-model-object-to-dict-with-all-of-the-fields-intact)
- otherwise consider [this](https://www.django-rest-framework.org/)


*The Game Plan*
- basic create/read views for buckets
    - ensure that form works
- Make shell/python script to automatically make buckets


# REACT 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
